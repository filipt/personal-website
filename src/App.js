import React,  { Component } from 'react';
import Menu from './components/menu'
import Footer from './components/footer'

import Home from './components/home'

import About from './components/about'
import Projects from './components/projects'
import Experience from './components/experience'
import Essays from './components/essays'
import Placeholder from './components/placeholder'

import Contact from './components/contact'


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';


class App extends Component {
  render() {
    return (     
       <BrowserRouter basename={process.env.PUBLIC_URL}>
       <div>
        <Menu />       
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/projects" component={Projects}/>
             <Route path="/experience" component={Experience}/>
             <Route path="/essays" component={Essays}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/placeholder" component={Placeholder}/>
           </Switch>
        </div> 
      <Footer />
      </BrowserRouter>

    );
  }
}
 
export default App;
