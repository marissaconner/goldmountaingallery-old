import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';

class App extends Component { 
  constructor() {
    super()
    this.state = {
      currentPage: 'home',
    }
    this.changePage = this.changePage.bind(this)
  } 

  changePage(currentPage) {
    this.setState({ currentPage })
  }

  render() {
    return (
     
    <div>
      <div className='row'>
        <header id="gmg-header">  
          <Navbar />
        </header>
      </div>  
            
    <div id="gmg-body">
      <div className="container-fluid">
        <div className="row">
        
          <div id="gmg-main-splash">
            <h1>Tailored to your taste.</h1>
            <p>We bring exclusive craftsmanship and fine artistry to your home.</p>
          </div>
          
          <div id="gmg-artist-feature">
            <div className="row">
              <div className="col-md-6">
                <p>Featuring</p>
                <p id="feature-title">Michelle Marocco</p>
                <p>The audacity of diamonds on leather</p>
                <a href="#">Gallery</a>
              </div>
              <div className="col-md-6">
              </div>
            </div>
          </div>
        
        </div>
      </div>
      
      <div className="container">
        <div className="row" id="gmg-link-tiles">
          <a className="col-md-2" href="#">
            Artwork
          </a>
          <a className="col-md-2" href="#">
            Artwork
          </a>
          <a className="col-md-2" href="#">
            Artwork
          </a>
          <a className="col-md-2" href="#">
            Artwork
          </a>
          <a className="col-md-2" href="#">
            Artwork
          </a>
          <a className="col-md-2" href="#">
            Artwork
          </a>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <h1>Lorem Ipsum</h1>
            <p>
              In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.
            </p>
            <p>
              The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-3">
            <p>Call</p>
            <a href="tel:1234567890">123 456 7890</a>
          </div>
          <div className="col-md-3">
            <p>Locations</p>
            <a href="#">Telluride</a>
            <a href="#">Ridgway</a>
          </div>
          <div className="col-md-3">
            <p>Hours</p>
            <p>X AM - Y PM</p>
            <a href="#">Appointments</a>
          </div>
          <div className="col-md-3">
            <p>Social</p>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
