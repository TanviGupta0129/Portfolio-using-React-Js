import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-kLWLWlKx6C8SjbjAJSoBw-2D2mWKy8c1Pw&usqp=CAU"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              
              <h1>Tanvi Gupta</h1>

            <hr/>

          <p>RESUME ASSIGNMENT BY SKILLSANTA</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com/in/tanvi-gupta-a30282194" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/TanviGupta0129" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/TanviGupta__" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;