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
      .then(response => this.setState({ authorpostings: response.data }));
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
            <DisplayDog />
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
                    <Button color="danger" onClick={this.toggle.bind(this)}>{allpost.text}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                      <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                      <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle.bind(this)}>OK</Button>{' '}
                      </ModalFooter>
                    </Modal>
                    <h4>{allpost.boneCount} {allpost.newspaperCount} {allpost.cageCount}</h4>
                    <Emojify>
                      <button onClick={(e) => this.addUserReaction(e, allpost._id, "bone")} className="emoji-btn" role="img" aria-label="bone">🦴</button>
                    </Emojify>
                    {/* <BoneButton onClick={(e) => this.addUserReaction(e, allpost._id, "bone")}/> */}
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





