import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
      <div class="container">
        <div class="wrapper">
          <img class="picture" src="images/goat_small.jpg"></img>
          <h4 class="subtitle">Subtitle goes here</h4>
          </div>
        </div> 
      </div>
    );
}

export default App;
