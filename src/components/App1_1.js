import '../css/App1_1.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function App1_1() {
    const images = [
        {
            id: 1,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 1',
            link: '/pop1',
            pageTitle: '경주(임시)',
        },
        {
            id: 2,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 2',
            link: '/pop2',
            pageTitle: 'Image 2 Page',
        },

    ];

    return (
        <div className="container_1">
            <div className={"text"}>
                {images.map((image) => (
                    <div key={image.id}>

                        <h2>{image.pageTitle}</h2>
                    </div>
                ))}
            </div>
            <div className="images_1">

                {images.map((image) => (
                    <Link to={image.link} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}

            </div>

        </div>
    );
}