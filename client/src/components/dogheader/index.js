import React from 'react';
import { Jumbotron, Col, Row } from 'reactstrap';
import "./css/style.css"


const dogJumbotron = (props) => {
    return (
        <div>
            <Jumbotron className="headerstyle">
                <Row>
                    <Col lg="12" md="1" style={{ fontSize: 40 }} className="text-center"><span>The place where you can vent life's frustrations and celebrate achievements</span></Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4"><div className="text-center"  ><img style={{ width: 130, height: 130, textalignright: -10, paddingLeft: -10 }} src={require('../emoji/assets/images/waggytail.png')} alt="waggy tail" /></div></Col>
                    <Col xs="6" sm="4"><div className="text-center" ><img style={{ width: 130, height: 130, paddingLeft: -10 }} src={require('../emoji/assets/images/dognewspaper.png')} /></div></Col>
                    <Col xs="6" sm="4"><div className="text-center" ><img style={{ width: 130, height: 130, paddingLeft: -10 }} src={require('../emoji/assets/images/doginjailonbackground.png')} alt="dog cage" /></div></Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default dogJumbotron;