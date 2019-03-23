import React, { Component } from 'react';
import './App.css';
import Carousel from "react-bootstrap/Carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 color='red'>
          <span>LFG Hacks</span>
        </h2>
        <Carousel>
          <Carousel.Item>
            <img
              src={require('./images/Philadelphia-Pass-Loews-Skyline-C.Smyth2200x1237-1024x576.jpg')}
              alt='First Slide'
            />
            <Carousel.Caption>
              <h3> Philly Photo 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require('./images/phillyskyline-comcast2ctc-july2018-crop.jpg')}
              alt='second slide'
            />
            <Carousel.Caption>
              <h3> Philly Photo 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <img
            src={require('./images/shutterstock_733975096.jpg')}
            alt='Third Slide'
            />
          <Carousel.Caption>
            <h3> Philly Photo 3 </h3>
          </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default App;
