import React from 'react';
import Modal from 'react-modal';
import styled from "styled-components"

Modal.setAppElement(); // Configura el elemento raíz del DOM

const ModalDiv = styled(Modal)`
    width: 900px;
    height: 500px;
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #20202b;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.4), -10px 10px 10px rgba(0,0,0,0.4);
    @media (max-width: 900px){
        width: 80%;
        height: fit-content;
        flex-direction: column;
        padding: 60px 30px;
        top: 70px;
    }
`

const ModalImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`
const ModalTextDiv = styled.div`
    color: white;
    font-family: LeagueFont;
    margin-left: 60px;
    @media(max-width: 500px){
        margin: initial;
    }
    
`
const ModalButton = styled.button`
    font-family: LeagueFont;
    position: relative;
    top: 50px;
    margin: auto;
    border: none;
    padding: 10px 20px;
    font-size: 17px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.4);
`

const CustomModal = ({ isOpen, onClose, modalData }) => {
  return (
    <div>
        <ModalDiv
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={{overlay: {backgroundColor: "rgba(0,0,0,0.75)", zIndex: 1000}}}
        >
            <div>
                <ModalImg src={modalData.imagen} alt={modalData.nombre} />
            </div>  
            <ModalTextDiv>
                <h1>{modalData.nombre}</h1>
                <h3>{`Comics: ${modalData.comics}`}</h3>
                <h3>{`Series: ${modalData.series}`}</h3>
                <p>{modalData.descripcion === "" ? "Lo sentimos, este personaje no tiene descripcion activa en la base de datos." : modalData.descripcion}</p>
                <ModalButton onClick={onClose}>Cerrar</ModalButton>
            </ModalTextDiv>  
            
        </ModalDiv>
    </div>
  );
};

export default CustomModal;