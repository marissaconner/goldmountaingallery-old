import React from 'react';
import pages from '../data/pages'

const Navbar = ({ changePage }) => 
 
  <div className="container">
    <div id="gmg-masthead">
      <a href="#">
        <img src="gold-mountain-gallery.jpg" alt="Gold Mountain Gallery" />
      </a>
    </div>
    <nav>
      <ul>
        <li>
          About
          <ul>
            <li><a href="#">Our Artists</a></li>
            <li><a href="#">Our Mission</a></li>
          </ul>
        </li>
        
        <li>
          Beautiful Things
          <ul>
            <li><a href="#">Artwork</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Photography</a></li>
          </ul>
        </li>
        
        <li>
          <a href="#">Events</a>
        </li>
        
        <li>
          <a href="#">Get In Touch</a>
        </li>
      </ul>
    </nav>
  </div>
   
    
export default Navbar;
