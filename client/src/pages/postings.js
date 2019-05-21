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

const origPosting = {
  authorpostings: [],
  allpostings: [],
  highestNum: { name: null, image: "https://media.giphy.com/media/SIKe5cA5q3cvTSds0a/giphy.gif", msg: "Your post does not have any dog counts", text: "", num: 0 },
  authorhighestNum: { name: null, image: "https://media.giphy.com/media/SIKe5cA5q3cvTSds0a/giphy.gif", msg: "Your post does not have any dog counts", text: "", num: 0 },
  emojiValue: "",
  modal: false,
};

class Postings extends Component {


  state = {
    authorpostings: [],
    allpostings: [],
    highestNum: { name: null, image: "https://media.giphy.com/media/SIKe5cA5q3cvTSds0a/giphy.gif", msg: "Your post does not a dog count", text: "", num: 0 },
    authorhighestNum: { name: null, image: "https://media.giphy.com/media/SIKe5cA5q3cvTSds0a/giphy.gif", msg: "Your post does not a dog count", text: "", num: 0 },
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
  togglehighestNum(posttype) {
    this.setState(origState => {
      console.log(`in toggle ${posttype}`)
      switch (posttype) {
        case "all":
          console.log(origPosting.highestNum)
          this.setState({ highestNum: origPosting.highestNum })
          console.log(this.state.highestNum)
          break;
        case "author":
          this.setState({ authorhighestNum: origPosting.authorhighestNum })
          break;
        default:
      }

    })
  }

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
      .then(res => this.getDogGif(this.state.authorpostings[0], "author"));
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
    alert("Thank you, for your opinion.")
    this.updateCounts(postinfo);
  };

  getDogGif = (postinfo, posttype) => {
    let totalcounts = 0;
    console.log('in getDogGif')
    console.log(postinfo)
    console.log(`posttype ${posttype}`)
    // this.togglehighestNum(posttype);
    console.log(this.state.highestNum);
    console.log(this.state.authorhighestNum);
    if (postinfo == null) {
      return;
    }
    let arr = [
      { name: 'waggy tails', image: "https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif", msg: `You received ${postinfo.boneCount} waggy tails`, text: postinfo.text, num: postinfo.boneCount },
      { name: 'newspaper', image: "https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif", msg: `You received ${postinfo.newspaperCount} newspapers`, text: postinfo.text, num: postinfo.newspaperCount },
      { name: 'cage', image: "https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif", msg: `You received ${postinfo.cageCount} cages`, text: postinfo.text, num: postinfo.cageCount }
    ];
    arr.sort(function (a, b) {
      return b.num - a.num;
    })
    totalcounts = (postinfo.boneCount + postinfo.newspaperCount + postinfo.cageCount)
    console.log(totalcounts);
    console.log(arr[0]);
    // console.log(highestNum)
    if (totalcounts > 0) {
      switch (posttype) {
        case "author":
          this.setState({ authorhighestNum: arr[0] });
          console.log("at set author");
          break;
        case "all":
          console.log('arr in all case')
          console.log(arr[0]);
          this.setState({ highestNum: arr[0] });
          console.log(this.state.highestNum)
          console.log("at set all");
          break;
        default:

      }
    } else {
      console.log(`posttype: ${posttype} totalcounts ${totalcounts}`)
      this.togglehighestNum(posttype);
    }

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
    this.getDogGif(allpost, "all");

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

            {
              this.state.authorpostings.length &&
              <div>
              <TextArea value={this.state.authorpostings[0].text} />
            <img src={this.state.authorhighestNum.image} alt="dog" />
            <h3>{this.state.authorhighestNum.msg}</h3>
            </div>
            }


            <h1> Add a new post</h1>
            <TextArea name="text" placeholder="text"  value={this.state.text} onChange={this.handleInputChange} />

            <button onClick={this.handleFormSubmit}>
              Submit Posting
              </button>

            {/* </form> */}


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
                    <Button color="blue" onClick={(e) => this.handlebuttonclick(allpost)} style={{ color: "blue" }}> {allpost.text}</Button>
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





