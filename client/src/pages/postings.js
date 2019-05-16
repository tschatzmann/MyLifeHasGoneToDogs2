import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Container } from "../components/grid";
import { TextArea } from "../components/postingsdetail"
import { List, ListItem } from "../components/list";
import { BoneButton } from "../components/emoji/bone";
import { NewspaperButton } from "../components/emoji/newspaper";
import { CageButton } from "../components/emoji/cage";
//import { Input, TextArea, FormBtn } from "../components/form";
import apiPosting from "../utils/apiPosting";
import Jumbotron from "../components/dogheader"



class Postings extends Component {

  state = {
    authorpostings: [],
    allpostings: [],
    highestNum: { name: null, image: "", msg: "", text: "", num: 0 },
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
      .then(res => this.setState({ authorpostings: res.data }))
      .then(res => this.getDogGif(this.state.authorpostings[0]));
    // .then(res => this.setState({ authorpostings: res.data }))

  };
  addUserReaction = (e, postinfo, emojiValue) => {
    switch (emojiValue) {
      case "bone":
        // this.setState({ boneCount: this.state.boneCount + 1 }, () => {
        postinfo.boneCount = postinfo.boneCount + 1
        console.log(`bone count in switch ${postinfo.boneCount}`)
        // })

        break;
      case "newspaper":
        //   this.setState({ newspaperCount: this.state.newspaperCount + 1 }, () => {
        postinfo.newspaperCount = postinfo.newspaperCount + 1
        console.log(`newspaper count in switch ${postinfo.newspaperCount}`)
        //   })
        break;
      case "cage":
        postinfo.cageCount = postinfo.cageCount + 1
        console.log(`cage count in switch ${postinfo.cageCount}`)
        break;
      default:
    }
    this.updateCounts(postinfo);
  };

  getDogGif = (postinfo) => {
    console.log('in getDogGif')
    console.log(postinfo)
    let arr = [
      { name: 'waggy tails', image: "https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif", msg: `You received ${postinfo.boneCount} waggy tails`, text: postinfo.text, num: postinfo.boneCount },
      { name: 'newspaper', image: "https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif", msg: `You received ${postinfo.newspaperCount} newspapers`, text: postinfo.text, num: postinfo.newspaperCount },
      { name: 'cage', image: "https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif", msg: `You received ${postinfo.cageCount} cages`, text: postinfo.text, num: postinfo.cageCount }
    ];
    arr.sort(function (a, b) {
      return b.num - a.num;
    })
    console.log(arr);
    // console.log(highestNum)
    this.setState({ highestNum: arr[0] })
    // return highestNum;

  };
  updateCounts = (postinfo) => {
    console.log("in update counts");
    console.log(`bone count ${postinfo.boneCount}`);
    console.log(`newspaper count ${postinfo.newspaperCount}`);
    console.log(postinfo);
    const postingData = [{
      id: postinfo._id,
      boneCount: postinfo.boneCount,
      newspaperCount: postinfo.newspaperCount,
      cageCount: postinfo.cageCount,
    }]
    console.log(`before updatePost ${postingData}`);
    console.log(`id ${postinfo}`);
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
  handlebuttonclick = (allpost) => {
    console.log('in button click')
    console.log(allpost)
    this.toggle(this.toggle.bind(this));
    console.log("on way to getDogGif")
    console.log(allpost)
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
        <Jumbotron />
        <Row>
          <Col size="md-6">
            {/* <Jumbotron/> */}
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
            <img src={this.state.highestNum.image} alt="dog" />
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
                    <Button color="blue" onClick={(e) => this.handlebuttonclick(allpost)} style={{color: "blue"}}> {allpost.text}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} >
                      <ModalHeader toggle={this.toggle.bind(this)}>{this.state.highestNum.text}</ModalHeader>
                      <ModalBody>
                        <img src={this.state.highestNum.image} alt="dog" />
                        <h3>{this.state.highestNum.msg}</h3>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle.bind(this)}>OK</Button>{' '}
                      </ModalFooter>
                    </Modal>
                    {/* <h4>{allpost.boneCount} {allpost.newspaperCount} {allpost.cageCount}</h4> */}
                    {/* <Emojify>
                      <button onClick={(e) => this.addUserReaction(e, allpost._id, "bone")} className="emoji-btn" role="img" aria-label="bone">🦴</button>
                    </Emojify>
                    <BoneButton onClick={(e) => this.addUserReaction(e, allpost._id, "bone")}/> */}
                    <BoneButton addUserReaction={this.addUserReaction} allpost={allpost} emojiValue={"bone"} />
                    <NewspaperButton addUserReaction={this.addUserReaction} allpost={allpost} emojiValue={"newspaper"} />
                    <CageButton addUserReaction={this.addUserReaction} allpost={allpost} emojiValue={"cage"} />
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





