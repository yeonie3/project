import '../css/App1.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App1() {
    const images = [
        {
            id: 1,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 1',
            link: '/image/1',
            pageTitle: 'Image 1 Page',
        },
        {
            id: 2,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 2',
            link: '/image/2',
            pageTitle: 'Image 2 Page',
        },
        {
            id: 3,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 3',
            link: '/image/3',
            pageTitle: 'Image 3 Page',
        },
        {
            id: 4,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 4',
            link: '/image/4',
            pageTitle: 'Image 4 Page',
        },
    ];

    return (
        <div className="container">

            <div className="images">
                {images.map((image) => (
                    <Link to={image.link} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}

            </div>
            <div className="board">
                <Routes>
                    {images.map((image) => (
                        <Route key={image.id} path={image.link} element={<h1>{image.pageTitle}</h1>} />

                    ))}

                </Routes>
            </div>
        </div>
    );
}