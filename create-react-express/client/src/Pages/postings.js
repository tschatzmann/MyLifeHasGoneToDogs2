import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Col, Row, Container } from "../components/grid";
import { List, ListItem } from "../components/list";
//import { Input, TextArea, FormBtn } from "../components/form";
import apiPosting from "../utils/apiPosting";


class Postings extends Component {

    state = {
        postings: []
    };


componentDidMount() {
    this.loadPostings();
  };


  loadPostings = () => {
    console.log("at loadpostings")
    axios.get("/api/posting")
  // .then(response => console.log(response));
    .then(res => this.setState({ postings: res.data }))
  };
//
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
              <h1>What Postings Should I Read?</h1>
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
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron> */}
              <h1>Postings On My List</h1>
            {/* </Jumbotron> */}
            {this.state.postings.length ? (
              <List>
                {this.state.postings.map(posting => (
                  <ListItem key={posting._id}>
                    <a href={"/api/posting/" + posting._id}>
                      <strong>
                        {posting.text}
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





