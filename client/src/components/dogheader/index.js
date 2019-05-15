import React from 'react';
import { Jumbotron, Col, Row } from 'reactstrap';


const dogJumbotron = (props) => {
    return (
        <div>
            <Jumbotron style={{background: "aqua"}}> 
            <Row>
                <Col lg="12" md="1" style={{fontSize: 40}} className="text-center"><span>The place where you can vent lifes frustrations and celebrate achievements</span></Col>
            </Row>
                    {/* <h1  className="center-text">The place where you can vent lifes frustrations and celebrate achievements</h1> */}
                    {/* <h1 className="App-intro">
                        The place where you can vent lifes frustrations and celebrate achievements
                    </h1> */}
          <Row>
          <Col xs="6" sm="4"><div  className= "text-center" style={{borderColor: "transparent", backgroundColor: "transparent"}} ><img  style={{width: 150, height: 150, textalignright: -10, paddingLeft: -10}}src={require('../emoji/assets/images/waggytail.jpg')} alt="waggy tail"/></div></Col>
          <Col xs="6" sm="4"><div  className= "text-center" style={{borderColor: "transparent", backgroundColor: "transparent"}} ><img style={{width: 150, height: 150, paddingLeft: -10}}src={require('../emoji/assets/images/dognewspaper.jpeg')} /></div></Col>
          <Col xs="6" sm="4"><div className= "text-center" style={{borderColor: "transparent", backgroundColor: "transparent"}} ><img style={{width: 150, height: 150, paddingLeft: -10}}src={require('../emoji/assets/images/doginjailonbackground.png')} alt="dog cage"/></div></Col>
        </Row>
              {/* <div  className= "text-center" style={{borderColor: "transparent", backgroundColor: "transparent"}} ><img style={{width: 150, height: 150, paddingLeft: -10}}src={require('../Emoji/assets/images/dognewspaper.jpeg')} /></div>
              <div  className= "text-left" style={{borderColor: "transparent", backgroundColor: "transparent"}} ><img  style={{width: 150, height: 150, textalignright: -10, paddingLeft: -10}}src={require('../Emoji/assets/images/waggytail.jpg')} alt="waggy tail"/></div>
              <div className= "text-right" style={{borderColor: "transparent", backgroundColor: "transparent"}} ><img style={{width: 150, height: 150, paddingLeft: -10}}src={require('../Emoji/assets/images/doginjailonbackground.png')} alt="dog cage"/></div> */}
                    {/* <img src="https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif" alt="waggy tails"/> */}
                    {/* <img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif" alt="newspaper" />
                    <img src="https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif" alt="dog cage" />         */}
            </Jumbotron>
        </div>
    );
};

export default dogJumbotron;