import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../logo.png';
export default class Menu extends Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href={process.env.PUBLIC_URL +"/"}>      
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
            <Link className = "nav-link" to='/about'>About me</Link> 
            <Link className = "nav-link" to="/projects">Projects</Link>
            <Link className = "nav-link" to="experience">Experience</Link>
          </Nav>
          <Nav>
            <Link className = "nav-link" to="essays">Essays</Link>
            <Link className = "nav-link" to="contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
