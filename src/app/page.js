"use client"
import React from 'react';
import Main from '@/Pages/main';
import Header from '@/Components/Header';
import Home from '@/Pages/home';
import CustomModal from '@/Components/modal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';



export default function App() {

  const [seriesGoal, setSeriesGoal] = useState(3000); //valor inicial de la meta de series
  const [modalIsOpen, setModalIsOpen] = useState(false); //booleano para definir si el modal esta abierto
  const [modalData, setModalData] = useState({}); // state para traer los datos de cada card para crear el modal

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Router>
      <Header/>
      <div>
        <CustomModal isOpen={modalIsOpen} onClose={closeModal} modalData={modalData}/>
      </div>
      <Routes>
        <Route path='/' element={<Main seriesGoal={seriesGoal} openModal={openModal} setModalData={setModalData}/>} />
        <Route path="/home" element={<Home seriesGoal={seriesGoal} setSeriesGoal={setSeriesGoal}/>}/>
      </Routes>
    </Router>
  
  );
}
