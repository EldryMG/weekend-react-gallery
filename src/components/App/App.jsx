import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
//import galleryItems from '../../../server/modules/gallery.data';
//import d from '../../../server/modules/gallery.data';
import './App.css';

// It looks like you're sourcing in the data instead of making a GET request. 
//You should be using GET and PUT for the data, it shouldn't be sourced directly in the client.



function App() {
  const [pics, setPics] = useState([]); 

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
    });
  }


  const plusLike = (thing) => {
    console.log('in plusLike', thing);
    axios({
      method: 'PUT',
      url: `/gallery/like/${thing}`,
    }).then((response) => {
      getPicsData();
    }).catch((error) => {
      alert('Error in handleLike');
      console.log(error);
    })
  }
  const handleLike = (thing) => {
    console.log('in handleLike', thing);
    plusLike(thing);
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
        (<div class="picture-wrapper" key={apic.id}>
          <img src={apic.path} />
          <div class="description">
            {apic.description}
          </div>
          <div class="button">
            <button onClick={() => handleLike(apic.id)}>Love It</button>
            <p>{apic.likes}</p>
          </div>

        </div>))}
      </div>
    </div>
  );
}

export default App;
