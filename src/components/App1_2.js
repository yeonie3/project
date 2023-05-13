import '../css/App1_2.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function App1_2() {
    const images = [
        {
            id: 3,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 3',
            link: '/pop3',
            pageTitle: 'Image 3 Page',
        },
        {
            id: 4,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 4',
            link: '/pop4',
            pageTitle: 'Image 4 Page',
        },
    ];


    return (
        <div className="container_2">
            <div className={"text"}>
                {images.map((image) => (
                    <div key={image.id}>

                        <h2>{image.pageTitle}</h2>
                    </div>
                ))}
            </div>

            <div className="images_2">
                {images.map((image) => (
                    <Link to={image.link} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}


            </div>
        </div>
    );
}