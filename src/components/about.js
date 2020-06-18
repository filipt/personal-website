import React, { Component } from 'react'
import image from './it-is-i-the-fil.png'
import Map from './templates/map'
import {Table} from 'react-bootstrap'

import './about.css'



export default class About extends Component {
  render(){
    return(
      <div className = "container placement">
        <img src = { image } className = "image" />
        <h4>Short intro</h4>
        <p>The toothless creature above is indeed me, myself, and I: Filip Twarowski. </p>
        <p>I do bizdev at <a href = "pulley.com">Pulley</a>, where I'm responsible for the go-to-market strategy, customer acquisition and everything in-between.</p>
        <p>I'm interested in building high-growth startups, improving higher education, and self-improvement. I think of my life as a large project, so all I need to do is become an excellent project manager. And then execute on the project.</p>
        <p>I'm an avid judoka, and love playing blues on harmonica. In my spare time, I volunteer as an online teacher, educational consultant, and advise people who want to start a startup, and sometimes help investors evaluate startups. I'm by no means an expert on any of those, but I listen carefully, attempt to use first-principle logic, and ultimately offer an unbiased opinion. </p>

        <h4>Brief history of my world</h4>
        <p>I was born in Bialystok, Poland on the 2nd of January, 1994 to my wonderful parents, Andrzej and Iwona. I have an older brother, Olek, who's my biggest role model.  </p>

        <p>I grew up doing loads of sports. I ultimately focused on judo, which I've been doing since 2004. I initially thought I'll be a professional judoka, but a severe case of meningitis forced me to give up any sports for a year. All the time I spent doing sports went into getting good at math and physics.</p> 
        
        <p>I did pretty well at school stuff, which landed me an incredible scholarship to go to a British high-school, called Dulwich College. I left my hometown at 17 and started living full-time in a boarding house. It's undoubtedly the most formative experience I went through. I ended up applying to American colleges, and was lucky enough to get into MIT.</p>

        <p>I initially thought I'll be a rocket scientist, so I majored in aerospace engineering and mathematics. After going through an internship at NASA JPL, I realized that I wanted something more fast-pace. In the end, I started a startup with my buddy Lambert in my senior year of college (2016).</p>

        <p>The startup (called Point) was the first autocomplete on email. We enjoyed some quick growth, went through YC, raised $1.2m, hired 8 people, and got 3 acquisition offers. Unfortunately, the company failed after Gmail Smart Compose got released -- but hey, can't win every time!</p>

        <p>I then started a new business with one of my investors from Point. We essentially started automating digital make-up for Hollywood. Things were going great (signed a letter-of-intent within 2 weeks of starting), but the COVID thing happened, and we had to stop. </p>

        <p>I then got hired by Yin Wu at Pulley, and I'm super stoked to see where we can take this company together! If you want a more in-depth walk through of what happened in my life, go <a href = "#experience">here</a>.</p> 

        <h4>Countries I've been in</h4>
        {/* <p>To-do: display which countries you've lived in, how many you've visited, and where you're planning on going. Perhaps I can do it onClick?</p> */} 
         <p>< Map ></ Map ></p>

        <h4>Things I like</h4>
        <ul>
          <li>working efficiently</li>
          <li>judo</li>
          <li>windsurfing</li>
          <li>reading</li>
          <li>rock music, and almost any kind of music</li>
          <li>self-improvement</li>

        </ul>

        <h4>Fun facts</h4>
        <ul>
          <li>I once got in a car accident 10 minutes before the interview to YC. I was driving, and it was 100% my fault. Still got in though ;)</li>
          <li>I was on the Polish National U17 team for judo</li>
          <li>I speak 4 languages. None of them particularly well though</li>
          <li>I did fluid dynamics research on tiny droplets bouncing on a sheet of liquid. They model quantum mechanics particularly well.</li>
          <li>I came 4th in an international safe-cracking tournament (as part of a team, to be precise)</li>
          <li>I have a serious Nutella problem. I once ate 3.3 lbs (1.5 kg) of Nutella over two days. It was the only thing I ate that weekend</li>
          <li>For those concerned with my health: I no longer buy Nutella</li>
          <li>I used to build model rockets. Most of them exploded on the ground. Fortunately, I decided to not pursue it as a career</li>
          <li>My personality was described as "human labrador". I take pride in that.</li>        
        </ul>
      
        <h4>Stats about me</h4>

          <Table responsive="lg" bordered striped >
            <tbody>
              <tr>
                <td>Height</td><td>5'9</td>
              </tr>
              <tr>
                <td>Weight</td><td>180 lbs</td>
              </tr>
              <tr>
                <td>Countries visited</td><td>16</td>
              </tr>
              <tr>
                <td>Countries lived in</td><td>3</td>
              </tr>
              <tr>
                <td>States visited</td><td>12</td>
              </tr>
              <tr>
                <td>Languages spoken</td><td>4</td>
              </tr>
            </tbody>
          </Table>      


        <h4></h4>
      </div>
    )
  }
}
    
