import React from 'react';
import { Jumbotron } from 'reactstrap';

const dogJumbotron = (props) => {
    return (
        <div>
            <Jumbotron>
                    <h1 className="display-12">The place where you can vent lifes frustrations and celebrate achievements</h1>
                    {/* <h1 className="App-intro">
                        The place where you can vent lifes frustrations and celebrate achievements
                    </h1> */}
                    <img src="https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif" alt="waggy tails"/>
                    <img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif" alt="newspaper" />
                    <img src="https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif" alt="dog cage" />        
            </Jumbotron>
        </div>
    );
};

export default dogJumbotron;