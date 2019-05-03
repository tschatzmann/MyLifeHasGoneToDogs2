import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Col, Row, Container } from "../components/grid";
import { List, ListItem } from "../components/list";
import { Input, TextArea, FormBtn } from "../components/form";


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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron> */}
              <h1>What Postings Should I Read?</h1>
            {/* </Jumbotron> */}
            <form>
              <TextArea name="text" placeholder="text" />
              <FormBtn>Submit Posting</FormBtn>
            </form>
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





