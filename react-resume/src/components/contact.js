import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tanvi Gupta</h2>
            <a href="https://drive.google.com/file/d/1lzjO48Z318iNV-vSOUWsiKJ9yn3HSQZ2/view?usp=sharing">
              <img  
                src="https://drive.google.com/thumbnail?id=1lzjO48Z318iNV-vSOUWsiKJ9yn3HSQZ2"
                // style={{width: 500px}}
                // title="Click for the larger version."
                alt="myphoto"
                style={{height: '400px',width: '70%'}}
                 /></a>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    9643512998
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    tanvigupta0129@gmail.com
                  </ListItemContent>
                </ListItem>
{
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-home" aria-hidden="true"/>
                    I-7/27, Sector-16, Rohini, Delhi
                  </ListItemContent>
                </ListItem> }


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
