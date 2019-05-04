import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Col, Row, Container } from "../components/grid";
import {TextArea, DisplayDog} from "../components/postingsdetail"
import { List, ListItem } from "../components/list";
//import { Input, TextArea, FormBtn } from "../components/form";
import apiPosting from "../utils/apiPosting";


class Postings extends Component {

    state = {
        authorpostings: [],
        allpostings: []

    };


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
        .then(res=> this.loadAuthorsPostings())
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
              <TextArea value={this.state.authorpostings[0].text}/>
            }
            <DisplayDog/>
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron> */}
              <h1>The latest Postings</h1>
            {/* </Jumbotron> */}
            {this.state.allpostings.length ? (
              <List>
                {this.state.allpostings.map(allpost => (
                  <ListItem key={allpost._id}>
                    <a href={"/api/posting/" + allpost._id}>
                      <strong>
                        {allpost.text}
                      </strong>
                      {}
                    </a>
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





