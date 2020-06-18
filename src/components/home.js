import React, { Component } from 'react'

import './home.css'
{/* 
Inspirations:
mldaneglo.com
wlessin.com
*/}
{/* 
Notes & To-dos:/
- fix the centering
- check on https
- write a blog on the habits you're trying to build out and rhe scheduule?
- figure out how to make a subscription list?
- view counter for the website
- blog read counter
- make it possible to tweet about it, and to like it
- fix experience template. Make it be relevant to differnet lables.
- clean ouput images, csses etc.
- fill out experiences
- write out a couple essays.
- add links everywhere you think there should ultimately be a link. name them "placeholder"
- add colors to experiences 
- make a diet plannign thing
- on "stats" section
        Add switching to metric 
        Add more stats
        automatically update stats?

*/}
export default class Home extends Component {
  render(){
    return(
      <div className = "container placement">
        <h1>Hi, I'm Fil.</h1>
        <br />
        <h4>I run bizdev at <a href = "pulley.com">Pulley</a>. I've been doing <a href = "https://www.youtube.com/channel/UCRBSLiBHKGonId6N-Ir_Kaw">judo</a> my entire life,  am an avid <a href = "#placeholder">harmonica</a> player, and am trying to get better every day.</h4>
        <br />
        {/* <h4>I run a <a href = "placeholder">blog</a>, a <a href = "placeholder">podcast</a>, and a bunch of <a href = "placeholder">products</a> to make my life easier. If you've got some feedback, ideas, or wanna use anything, <a href = "contact">hmu</a>!</h4>
        <br />*/}
        <h4>I put together this website to share how I'm trying to improve, keep track of what I wanna do, and keep myself accountable. 
        </h4>
        <br />
        <h4>If you wanna learn more about me, go <a href = "#about">here</a>. If you wanna see what I'm working on, <a href = "#projects">check it out</a>. My resume is riiiight <a href = "#experience">here.</a>
        </h4>
      </div>
      )
  }
}
    

