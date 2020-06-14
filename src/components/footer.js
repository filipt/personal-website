import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import './footer.css'

export default class Footer extends Component {
  render(){
    return(
      <div className = "">

        <div className="fixed-bottom test">  
            <Navbar expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                  <SocialIcon url="http://instagram.com/polish_fil" className = "icon" />
                  <SocialIcon url="https://www.facebook.com/filip.twarowski.7/" className = "icon"/>
                  <SocialIcon url="https://www.linkedin.com/in/filip-twarowski-00996a54/" className = "icon" />
                  <SocialIcon url="http://twitter.com/filiptwarowski" className = "icon"/>
                  <SocialIcon url="https://medium.com/@filiptwarowski" className = "icon" />
                  <SocialIcon url="mailto:filiptwarowski@gmail.com" className = "icon" />
                </Navbar.Brand>
                <Navbar.Brand className = "text">
                  Fil Twarowski &copy; 2020
                </Navbar.Brand>
            </Navbar>
         </div>
      </div>
      )
  }
}
    
