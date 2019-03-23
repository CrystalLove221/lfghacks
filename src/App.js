import React, { Component } from 'react';
import './App.css';
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>
                    <span>LFG Hacks</span>
                </h2>
                   <div className='carousel'>
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
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>New York City</th>
                        <th>San Francisco</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Low Crime Rate</td>
                        <td className='good'>Slightly Higher Crime Rate</td>
                    </tr>
                    <tr>
                        <td className='good'>More Diverse Ethnicity</td>
                        <td>Less Diverse Ethnicity</td>
                    </tr>
                    <tr>
                        <td className='good'> Has Public Transportation </td>
                        <td className='good'> Has Public Transportation </td>
                    </tr>
                    </tbody>
                </Table>;
            </div>
        );
    }
}

export default App;
