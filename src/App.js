
import './App.css';
//import './css/App1.css';
import Join from './Pages/join';
import Login from './Pages/login';
import Sch from './Pages/sch';
import Home from './Pages/home';
import Mback from './components/Mback';
import App1_1 from './components/App1_1';
import App1_2 from './components/App1_2';
import ReactDOM from "react-dom/client";
import React,{useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Board from './Pages/Board';
import './css/index.css';
import Categories from "./components/Categories";


const App = () =>{
    return(

        <BrowserRouter>
            <Categories/>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/sch" element={<Sch />} />
            </Routes>
            
        </BrowserRouter>



    );
};

export default App;



