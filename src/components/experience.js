import React, { Component } from 'react'
import { Timeline }  from 'vertical-timeline-component-for-react';

import data from "./data/experience"
import  Experience_Template  from './templates/experience_template'

import "./experience.css"

export default class Experience extends Component {
    render(){
        return(
        <div className = "container placement"> 
          <h1>tl;dr: My resume is <a href = "https://drive.google.com/file/d/1bxu40hndGuR-SAHAUkPS2ueLX6PrOicx/view?usp=sharing">here</a>. </h1>
          <br />
          <h1>Intro</h1>
          <p>I think of life as something that can be developed <a href="https://youtu.be/wqEsTPaUZF0?t=1340">in 6 different areas:</a></p>
          <ol>
            <li>Education</li>
            <li>Career</li>
            <li>Athletics</li>
            <li>Service</li>
            <li>Arts</li>
            <li>Personal
              <ul>
                <li>relationships</li>
                <li>finances</li>
                <li>health</li>
                <li>spiritulality</li>
              </ul>
            </li>
          </ol>
          <p>Thinking of my life allows me to better myself in every area. Can you be split it further?</p> 
          <p>Sure, but for me, this works remarkably well. I want to have a great grasp on what exactly I should be doing to better myself and progress in "life". </p>
          <br />

          <h1>Timeline</h1>
          <p>This is meant to be a fairly accurate representation of how my life has gone so far. I fully intend to continue filling this in, so that you have a great representation of who I am, and how I got where I am.</p> 
          <br />
          <Timeline lineColor={'#f8f9fa'}>
            {data.map((experience) => (
              <Experience_Template
                data={experience}
              />  
            ))}
          </Timeline>
        </div>
        )
    }
}
