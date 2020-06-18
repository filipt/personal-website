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


import {HashRouter, BrowserRouter, Route, Switch , Link} from 'react-router-dom';

import './App.css';


class App extends Component {
  render(  ) {

    return (     
      //  <BrowserRouter basename={process.env.PUBLIC_URL}>
      //  <div>
      //   <Menu />       
      //       <Switch>
      //        <Route path="/about" component={About}/>
      //        <Route path="/projects" component={Projects}/>
      //        <Route path="/experience" component={Experience}/>
      //        <Route path="/essays" component={Essays}/>
      //        <Route path="/contact" component={Contact}/>
      //        <Route path="/placeholder" component={Placeholder}/>
      //        <Route path= "/" component={Home} exact/>

      //      </Switch>
      //   </div> 
      // <Footer />
      // </BrowserRouter>
      <HashRouter basename="/">
          <Menu />
        <div>        
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/experience" component={Experience}/>
              <Route path="/essays" component={Essays}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/placeholder" component={Placeholder}/>
              <Route path= "/" component={Home} exact/>
        </div>
        <Footer />

      </HashRouter>
    );
  }
}
 
export default App;
