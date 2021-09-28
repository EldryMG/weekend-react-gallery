import GalleryItem from "../GalleryItem/GalleryItem";
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import './GalleryList.css';

function GalleryList({ pics, plusLike }) {
    return (
        <div>
            <ul className="container">
                {pics.map(apic => (
                    <GalleryItem
                        key={apic.id}
                        pic={apic}
                        plusLike={plusLike}
                    />
                ))}
            </ul>
        </div>
    );
}

export default GalleryList;