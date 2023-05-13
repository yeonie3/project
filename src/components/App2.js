import '../css/App2.css';
import React from 'react';
import {  Link } from 'react-router-dom';

export default function App2() {
    const images = [
        {
            id: 5,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 5',
            link: '/pop5',
            pageTitle: 'Image 5 Page',
        },
        {
            id: 6,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 6',
            link: '/pop6',
            pageTitle: 'Image 6 Page',
        },

    ];

    return (
        <div className="container_3">
            <div className={"text"}>
                {images.map((image) => (
                    <div key={image.id}>

                        <h2>{image.pageTitle}</h2>
                    </div>
                ))}
            </div>

            <div className="images_3">
                {images.map((image) => (
                    <Link to={image.link} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}


            </div>
        </div>
    );
}