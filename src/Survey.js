import React, {Component} from 'react';
import './Survey.css';

ReactDOM.render(
    <h1>Activity Survey</h1>
    <p>To help us select a city that better suits our
        customers, we ask that they select from the list below
        some common activities. This information will not be collected.
    </p>

    <div id = "survey" style = "./">
    <p>Select one or more of the following:</p>
    <h3>Sports</h3>
    <input type = "checkbox">Swimming</input><br/>
    <input type = "checkbox">Baseball</input><br/>
    <input type = "checkbox">Football</input><br/>
    <input type = "checkbox">Running</input><br/>
    <input type = "checkbox">Softball</input><br/>
    <input type = "checkbox">Tennis</input><br/>
    <h3>Organizations</h3>
    <input type = "checkbox">DEFCon</input><br/>
    <input type = "checkbox">Hackathon</input><br/>
    </div>
);

export default Survey;