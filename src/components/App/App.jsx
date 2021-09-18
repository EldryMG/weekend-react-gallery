import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [pics, setPics] = useState([]); //These names I'm choosing are making me nervous.

  const getPicsData = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      // response.data is what we sent from the server
      //axios has an object as a response with .data being
      //what we sent from the server.
      console.log('This is GET request data,', response.data);
      setPics(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Error making GET request.');
    })
  }

  useEffect(() => {
    getPicsData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div class="container">
        {pics.map(apic =>
        (<div class="picture-wrapper">
          <img src={apic.path} />
          <div class="description">
            {apic.description}
          </div>
          <div class="button">
            <button>Love It</button>
          </div>

        </div>))}
      </div>
    </div>
  );
}

export default App;
