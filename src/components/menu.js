import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../logo.png';
export default class Menu extends Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">      
        <img
          src={ logo } 
          width="25"
          height="25"
          className="d-inline-block align-top"
          alt="wut"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="about">About me</Nav.Link> 
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="experience">Experience</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="essays">Essays</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
    
