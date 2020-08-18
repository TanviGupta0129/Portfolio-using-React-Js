import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
// import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <a href="https://drive.google.com/file/d/1lzjO48Z318iNV-vSOUWsiKJ9yn3HSQZ2/view?usp=sharing">
              <img  
                src="https://drive.google.com/thumbnail?id=1lzjO48Z318iNV-vSOUWsiKJ9yn3HSQZ2"
                alt="myphoto"
                style={{height: '400px',width: '70%'}}
                 /></a>
            </div>

            <h2 style={{paddingTop: '0em'}}><b><u>TANVI GUPTA</u></b></h2>
            <h4 style={{color: 'black'}}>Student</h4>
            <hr style={{borderTop: '3px solid #000000', width: '50%'}}/>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
            <hr style={{borderTop: '3px solid #000000', width: '50%'}}/>
            <h5><b>Address :</b></h5>
            <p>I- 7/27, Sector-16, Rohini, Delhi</p>
            <h5><b>Phone :</b></h5>
            <p>9643512998</p>
            <h5><b>Email :</b></h5>
            <p>tanvigupta0129@gmail.com</p>
            <hr style={{borderTop: '3px solid #000000', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2><u><i>Education</i></u></h2>
           <Education
              startYear="2017"
              endYear="2021"
              schoolName="GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY"
              schoolDescription="BACHELOR OF TECHNOLOGY (ELECTRONICS AND COMMUNICATION ENGINEERING) "
               />
                <hr style={{borderTop: '2px solid #000000'}} />

              <h2><u><i>Skills</i></u></h2>
              <h4>  <Skills 
                skill="1. JavaScript"
                />
                 <Skills
                      skill="2. JAVA"
                      />
                       <Skills
                      skill="3. Advanced JAVA"
                      />
                <Skills
                  skill="4. HTML/CSS"
                  />
                  <Skills
                    skill="5. NodeJS"
                    />
                    <Skills
                      skill="6. React JS"
                      /></h4>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;