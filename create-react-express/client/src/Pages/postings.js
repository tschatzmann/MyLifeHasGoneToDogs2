import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/apiPosting";


class Postings extends Component {
    state = {
        Postings: []
    };


// componentDidMount() {
//     this.loadPostings();
//   };


//   loadPostings = () => {
//     API.getPostings()
//       .then(res => this.setState({ Postings: res.data }))
//       .catch(err => console.log(err));
//   };

  render() {
    return (
      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
      //       <Jumbotron>
      //         <h1>What Postings Should I Read?</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input name="title" placeholder="Title (required)" />
      //         <Input name="author" placeholder="Author (required)" />
      //         <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
      //         <FormBtn>Submit Posting</FormBtn>
      //       </form>
      //     </Col>
      //     <Col size="md-6 sm-12">
      //       <Jumbotron>
      //         <h1>Postings On My List</h1>
      //       </Jumbotron>
      //       {this.state.Postings.length ? (
      //         <List>
      //           {this.state.Postings.map(Posting => (
      //             <ListItem key={Posting._id}>
      //               <a href={"/Postings/" + Posting._id}>
      //                 <strong>
      //                   {Posting.title} by {Posting.author}
      //                 </strong>
      //               </a>
      //               <DeleteBtn />
      //             </ListItem>
      //           ))}
      //         </List>
      //       ) : (
      //         <h3>No Results to Display</h3>
      //       )}
      //     </Col>
    //      </Container>
    <main>
<div>
<h1>
  welcome to posting page
</h1>
</div>


    </main>

    );
  }
};


export default Postings;





