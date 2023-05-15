
import './App.css';
//import './css/App1.css';
import Join from './Pages/Join';
import Login from './Pages/Login';
import SchList from './Pages/SchList';
import SchTrans from './Pages/SchTrans';
import Home from './Pages/Home';
import SchArea from './Pages/SchArea';
import Pop1 from './Pages/Pop1';
import Pop2 from './Pages/Pop2';
import Pop3 from './Pages/Pop3';
import Pop4 from './Pages/Pop4';
import Pop5 from './Pages/Pop5';
import Pop6 from './Pages/Pop6';
import Mback from './components/Mback';
import Modal from './components/Modal';
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

        <>
            <Categories/>

            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/schList" element={<SchList />} />
                    <Route path="/schTrans" element={<SchTrans />} />
                    <Route path="/schArea" element={<SchArea />} />
                    <Route path="/modal" element={<Modal />} />
                    {/*<Route path="/Board" element={<Board />} />*/}
                    <Route path="/pop1" element={<Pop1 />} />
                    <Route path="/pop2" element={<Pop2 />} />
                    <Route path="/pop3" element={<Pop3 />} />
                    <Route path="/pop4" element={<Pop4 />} />
                    <Route path="/pop5" element={<Pop5 />} />
                    <Route path="/pop6" element={<Pop6 />} />

            </Routes>

            
        </>



    );
};

export default App;



