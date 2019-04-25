import React, { Component } from "react";

export default class LearningFooter extends Component {
  render() {
    return (
      <div className="bottom--2-l tc fixed">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}
/*

.navbar {
    background-color: #333;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  /* Style the links inside the navigation bar 
  .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  /* Change the color of links on hover 
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  
  /* Add a color to the active/current link 
  .navbar a.active {
    background-color: #4CAF50;
    color: white;
  }
}

*/