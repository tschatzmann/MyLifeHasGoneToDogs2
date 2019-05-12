import React, { Component } from "react";
import { Link } from "react-router-dom";
import Emojify from 'react-emojione';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import { Col, Row, Container } from "../components/grid";
import { TextArea, DisplayDog } from "../components/postingsdetail"
import { List, ListItem } from "../components/list";
import { BoneButton } from "../components/Emoji/bone";
import { NewspaperButton } from "../components/Emoji/newspaper";
import { CageButton } from "../components/Emoji/cage";
//import { Input, TextArea, FormBtn } from "../components/form";
import apiPosting from "../utils/apiPosting";
import { set } from "mongoose";
import style from "../components/Emoji/style.css";



class Postings extends Component {

  state = {
    authorpostings: [],
    allpostings: [],
    highestNum: { name: null, image: "", msg: "You have 3 waggy tails", num: 0 },
    boneCount: 0,
    newspaperCount: 0,
    cageCount: 0,
    emojiValue: "",
    modal: false,

  };
 
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    this.loadPostings();
    this.loadAuthorsPostings();

  };


  loadPostings = () => {
    console.log("at loadpostings")
    apiPosting.getpostings("/api/posting")
      // .then(response => console.log(response));
      .then(res => this.setState({ allpostings: res.data }))
  };
  loadAuthorsPostings = () => {
    console.log("at loadauthorpostings")
    apiPosting.getPopulatePostings(this.props.location.state.authorid)
      .then(response => this.setState({ authorpostings: response.data }))
      // .then(response => this.getDogGif({authorpostings}));
    // .then(res => this.setState({ authorpostings: res.data }))
      
  };
  addUserReaction = (e, id, emojiValue) => {
    switch (emojiValue) {
      case "bone":
        this.setState({ boneCount: this.state.boneCount + 1 }, () => {
          alert(`boneCount ${this.state.boneCount}`)
          console.log(`bone count in switch ${this.state.boneCount}`)
        })

        break;
      case "newspaper":
        this.setState({ newspaperCount: this.state.newspaperCount + 1 }, () => {
          alert(`newspaperCount ${this.state.newspaperCount}`)
        })
        break;
      case "cage":
        this.setState({ cageCount: this.state.cageCount + 1 }, () => {
          alert(`cageCount ${this.state.cageCount}`)
        })
        break;
      default:
        alert(`no found ${emojiValue}`)
    }
    this.updateCounts(id);
  };

  getDogGif = (allpost) => {
    console.log('in getDogGif')
    console.log(allpost)
    let arr = [
      { name: 'waggy tails', image: "https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif", msg: `You received ${allpost.boneCount} bones` , num: allpost.boneCount },
      { name: 'cage', image: "https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif",  msg: `You received ${allpost.newspaperCount} newspapers`, num: allpost.newspaperCount },
      { name: 'newspaper', image:"https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif",  msg: `You received ${allpost.cageCount} cages`, num: allpost.cageCount }
    ];
    arr.sort(function (a, b) {
      return b.num - a.num;
    })
    console.log(arr);
      // console.log(highestNum)
      this.setState({highestNum: arr[0]})
      // return highestNum;

    };

  updateCounts = (id) => {
    console.log("in update counts");
    console.log(`bone count ${this.state.boneCount}`);
    console.log(`newspaper count ${this.state.newspaperCount}`);
    const postingData = [{
      id: id,
      boneCount: this.state.boneCount,
      newspaperCount: this.state.newspaperCount,
      cageCount: this.state.cageCount,
    }]
    console.log(`before updatePost ${postingData}`);
    console.log(`id ${id}`);
    apiPosting.updatePost(postingData)
      .then(res => this.loadPostings())
      .then(res => this.loadAuthorsPostings())
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.text) {
      const postingData = [{
        text: this.state.text,
        authorid: this.props.location.state.authorid,
        date: new Date(Date.now())
      }]
      apiPosting.savePost(postingData)
        .then(res => this.loadPostings())
        .then(res => this.loadAuthorsPostings())
        .catch(err => console.log(err));
    }
  };
  handlebuttonclick = (allpost)=> {
    console.log('in button click')
    console.log(allpost)
    this.toggle();
    this.getDogGif(allpost);
    
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };
  //
  render() {
    console.log(this.props)
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron> */}
            <h1>My Postings</h1>
            {/* </Jumbotron> */}
            {/* <form> */}
            <input
              type="text"
              placeholder="text"
              name="text"
              value={this.state.text}
              onChange={this.handleInputChange}
            />
            {/* <TextArea name="text" placeholder="text" /> */}
            {/* <FormBtn>Submit Posting</FormBtn> */}
            <button onClick={this.handleFormSubmit}>
              Submit Posting
              </button>

            {/* </form> */}

            {
              this.state.authorpostings.length &&
              <TextArea value={this.state.authorpostings[0].text} />

            }
              <img src = "https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif"/>
              <h3>{this.state.highestNum.msg}</h3>
            {/* <DisplayDog /> */}
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron> */}
            <h1>The latest Postings</h1>
            {/* </Jumbotron> */}
            {this.state.allpostings.length ? (
              <List>
                {this.state.allpostings.map(allpost => (
                  <ListItem key={allpost._id}>
                  
                    {/* <button > 
                      <strong>
                        {allpost.text}
                      </strong>
                    </button> */}
                    <Button color="blue" onClick= {(e)=>this.handlebuttonclick(allpost)} >{allpost.text}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                      <ModalHeader toggle={this.toggle}>{allpost.text}</ModalHeader>
                      <ModalBody>
                        <img src= {this.state.highestNum.image}/>
                        <h3>{this.state.highestNum.msg}</h3>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle.bind(this)}>OK</Button>{' '}
                      </ModalFooter>
                    </Modal>
                    <h4>{allpost.boneCount} {allpost.newspaperCount} {allpost.cageCount}</h4>
                    {/* <Emojify>
                      <button onClick={(e) => this.addUserReaction(e, allpost._id, "bone")} className="emoji-btn" role="img" aria-label="bone">🦴</button>
                    </Emojify>
                    <BoneButton onClick={(e) => this.addUserReaction(e, allpost._id, "bone")}/> */}
                    <BoneButton addUserReaction={this.addUserReaction} allpost={allpost._id} emojiValue={"bone"} />
                    <NewspaperButton addUserReaction={this.addUserReaction} allpost={allpost._id} emojiValue={"newspaper"} />
                    <CageButton addUserReaction={this.addUserReaction} allpost={allpost._id} emojiValue={"cage"} />
                    {/* <DeleteBtn /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
};


export default Postings;





