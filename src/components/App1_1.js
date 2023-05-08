import '../css/App1_1.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App1_1() {
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

    ];

    return (
        <div className="container_1">

            <div className="images_1">
                {images.map((image) => (
                    <Link to={image.link} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}

            </div>
            <div className="board_1">
                <Routes>
                    {images.map((image) => (
                        <Route key={image.id} path={image.link} element={<h1>{image.pageTitle}</h1>} />

                    ))}

                </Routes>
            </div>
        </div>
    );
}