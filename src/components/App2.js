import '../css/App2.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App2() {
    const images = [
        {
            id: 5,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 5',
            link: '/image/5',
            pageTitle: 'Image 5 Page',
        },
        {
            id: 6,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 6',
            link: '/image/6',
            pageTitle: 'Image 6 Page',
        },

    ];

    return (
        <div className="container1">

            <div className="images2">
                {images.map((image) => (
                    <Link to={image.link} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}

            </div>
            <div className="board2">
                <Routes>
                    {images.map((image) => (
                        <Route key={image.id} path={image.link} element={<h1>{image.pageTitle}</h1>} />

                    ))}

                </Routes>
            </div>
        </div>
    );
}