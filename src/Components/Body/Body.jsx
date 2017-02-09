import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import '../../Styles/Body/body.css'
export default class Body extends Component {
  render() {
    return (
      <section className="bodyContainer">
        <div className="introPhoto">
          <div className="introText">
            <h1>A Collaborative Utility For Physicians.</h1>
            <p>Interactive. Convenient. Centralized. </p>
            <RaisedButton 
              className="RaisedButton" 
              label="Try Application" 
              primary={true} 
              style={{order:3, margin:300}}
              href="/documents"
            />
          </div>
        </div>
       
        <div className="trait1"> 
          <h1>Share</h1>
        </div>
        <div className="trait2">
          <h1>Collaborate</h1>
        </div>
        <div className="trait3">
          <h1>Connect</h1>
        </div>
        <div className="team">
          <h1>Our Team</h1>
        </div>

      </section>

    );
  }
}

