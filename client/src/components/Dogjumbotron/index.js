import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const dogJumbotron = (props) => {
    return (
        <div>
            <Jumbotron>
                {/* <Container> */}
                    <h1 className="display-12">The place where you can vent lifes frustrations and celebrate achievements</h1>
                    {/* <h1 className="App-intro">
                        The place where you can vent lifes frustrations and celebrate achievements
                    </h1> */}
                    <img src="https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif" />
                    <img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif" />
                    <img src="https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif" />        
                    {/* </Container> */}
            </Jumbotron>
        </div>
    );
};

export default dogJumbotron;