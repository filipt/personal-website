import React, { Component } from 'react'
import  Tile  from './templates/tile'
import data from "./data/projects"

export default class Projects extends Component {
  render(){
    return(
      <div className = "container placement">

        Here I'll be writing down what I'm working on, and what's still on the plate!
        <br />
        Things I've got on the plate:
        <ul>
          <li>Essays</li>
          <li>Podcast</li>
          <li>This website</li>
          <li>options trading</li>
          <li>signing a job</li>
          <li>losing weight</li>
          <li>setting up long-term goals</li>
        </ul>
        Things I'm not working on, but will soon enough:
        <ul>
          <li>copy over ur trello?</li>
        </ul> 
        {data.map((project) => (
          <Tile
            data={project}
          />  
        ))}
        {/* <div className="tile">
          <h3>Title</h3>
            <h5>Subtitle</h5>
            <h5>Date - Date</h5>
            <img src = { image } className = "projectImage" />
            <p>Short description</p>
        </div>
        <div className="tile">
          <h3>Title</h3>
            <h5>Subtitle</h5>
            <h5>Date - Date</h5>
            <img src = { image } className = "projectImage" />
            <p>Short description</p>
        </div>
        <div className="tile">
          <h3>Title</h3>
            <h5>Subtitle</h5>
            <h5>Date - Date</h5>
            <img src = { image } className = "projectImage" />
            <p>Short description</p>
        </div>
        <div className="tile">
          <h3>Title</h3>
            <h5>Subtitle</h5>
            <h5>Date - Date</h5>
            <img src = { image } className = "projectImage" />
            <p>Short description</p>
        </div>
        <div className="tile">
          <h3>Title</h3>
            <h5>Subtitle</h5>
            <h5>Date - Date</h5>
            <img src = { image } className = "projectImage" />
            <p>Short description</p>
        </div>
        <div className="tile">
          <h3>Title</h3>
            <h5>Subtitle</h5>
            <h5>Date - Date</h5>
            <img src = { image } className = "projectImage" />
            <p>Short description</p>
        </div> */}
      </div>
    )
  }
}
    
