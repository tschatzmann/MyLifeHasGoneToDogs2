import React from 'react';
import { Jumbotron, Col, Row } from 'reactstrap';
import "./css/style.css"

const line1 = "Feel free to anonymously tell others about life's frustrations and achievements";
const line2 = 'Sign In to share your opinion with others';

const dogJumbotron = (props) => {
    return (
        <div>
            <Jumbotron className="headerstyle">
                <Row>
                    <Col lg="12" md="1" style={{ fontSize: 30 }} className="text-center"><span>{line1}</span></Col>
                </Row>
                <Row>
                    <Col lg="12" md="1"  className="text-center" style={{ fontSize: 30 }}><span>{line2}</span></Col>
                </Row>

                <Row>
                    <Col xs="6" sm="4"><div className="text-center"  ><img style={{ width: 130, height: 130, textalignright: -10, paddingLeft: -10 }} src={require('../emoji/assets/images/waggytail.png')} alt="waggy tail" /></div></Col>
                    <Col xs="6" sm="4"><div className="text-center" ><img style={{ width: 130, height: 130, paddingLeft: -10 }} src={require('../emoji/assets/images/dognewspaper.png')} /></div></Col>
                    <Col xs="6" sm="4"><div className="text-center" ><img style={{ width: 130, height: 130, paddingLeft: -10 }} src={require('../emoji/assets/images/doginjailonbackground.png')} alt="dog cage" /></div></Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4" className="text-center"><h4>Waggy tail to celebrate</h4></Col>
                    <Col xs="6" sm="4" className="text-center"><h4>Newspaper to swat the bad</h4></Col>
                    <Col xs="6" sm="4" className="text-center"><h4>Put those who are totally wrong in the cage</h4></Col>


                </Row>
            </Jumbotron>
        </div>
    );
};

export default dogJumbotron;