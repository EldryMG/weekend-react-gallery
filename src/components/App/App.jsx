import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from './GalleryList/GalleryList.jsx';




function App() {
  const [pics, setPics] = useState([]); 


  const getPicsData = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
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

  useEffect(() => {
    getPicsData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div className="container">
      <GalleryList 
      plusLike={plusLike}
      pics={pics}/>
      </div>
    </div>
  );
}

export default App;
