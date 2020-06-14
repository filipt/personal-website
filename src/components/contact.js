import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import './contact.css'

export default class Contact extends Component {
  render(){
    return (
      <div className = "container contact">
        <Table responsive="lg" bordered={false}>
          <thead bordered={false}>
            <tr>
              <th><h2><b>Feel free to get in touch! You can email me at:</b></h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h2><a href = "mailto:filiptwarowski@gmail.com">filiptwarowski@gmail.com</a></h2></td>
            </tr>
            <tr>
              <td><h2> </h2></td>
            </tr>
            <tr>
              <td><h2><b>Or follow me at:</b></h2></td>
            </tr>
            <tr>
              <td>
                <h2>
                  <SocialIcon url="http://instagram.com/polish_fil" className = "icon" />
                  <SocialIcon url="https://www.facebook.com/filip.twarowski.7/" className = "icon"/>
                  <SocialIcon url="https://www.linkedin.com/in/filip-twarowski-00996a54/" className = "icon" />
                  <SocialIcon url="http://twitter.com/filiptwarowski" className = "icon"/>
                  <SocialIcon url="https://medium.com/@filiptwarowski" className = "icon" />
                  <SocialIcon url="mailto:filiptwarowski@gmail.com" className = "icon" />
                </h2>
              </td>
            </tr>

          </tbody>
        </Table>      
      </div>
      )
  }
}