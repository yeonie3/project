
//import './App.css'; 나중에 main.css 만들어서 수정

import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function App1(){
    const images = [
        {
            id: 1,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 1',
            link: '/image/1'
        },
        {
            id: 2,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 2',
            link: '/image/2'
        },
        {
            id: 3,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 3',
            link: '/image/3'
        },
        {
            id: 4,
            src: 'https://via.placeholder.com/150',
            alt: 'Image 4',
            link: '/image/4'
        }
    ];


    return (

            <div className="container">
                <div className="images">
                    {images.map(image => (
                        <Link to={image.link} key={image.id}>
                            <img src={image.src} alt={image.alt}/>
                        </Link>
                    ))}
                </div>
                <div className="board">
                    <Routes>
                        <Route path="/image/1" element={<h1>Image 1 Page</h1>}/>
                        <Route path="/image/2" element={<h1>Image 2 Page</h1>}/>
                        <Route path="/image/3" element={<h1>Image 3 Page</h1>}/>
                        <Route path="/image/4" element={<h1>Image 4 Page</h1>}/>

                    </Routes>
                </div>
            </div>
    )

}