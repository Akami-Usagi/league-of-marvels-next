"use client"
import React from "react";
import styled, {css} from "styled-components"
import { useState } from "react";

const CardBody = styled.div`
    width: 248px;
    height: 448px;
    border: 1pt solid gray;
    border-radius: 8px;
    background: url("/img/card_back.jpg");
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`
const CardTitle = styled.div`
    height: 50px;
    position: relative;
    top: 25px;
    display: flex;
    align-items: center;
    color: white;
    font-family: LeagueFont;
    text-align: center;
    column-gap: 8px;
    
`
const CardTitleImg = styled.img`
    width: 28px;
`
const CardImageDiv = styled.div`
    position: relative;
    top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardImageBack = styled.img`
    width: 170px;
    transition: 1s ease-in-out;
    transition: transform 1.5s;
    ${props =>
    props.rotado === "true" &&
    css`
      transform: rotate(360deg);
    `}
`
const CardInfo = styled.div`
    width: 178px;
    height: 49px;
    border: 1px solid gray;
    display: flex;
    color:  white;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    font-family: LeagueFont;
    margin-top: 25px;
    background-color: #1E2328;
`
const CardAvatar = styled.img`
    position: relative;
    top: -169px;
    width: 140px;
    height: 140px;
    border-radius: 100%;
`
const CardInfoDiv = styled.div`
    position: relative;
    bottom: 120px;
`

export default function CharacterCard({nombre, imagen, comics, series, descripcion, openModal, setModalData}){

    const [rotado, setRotado] = useState(false); //useState para rotar el circulo que rodea el avatar del personaje
    const handleHover = () => {
        setRotado(!rotado);
      };

    return(
        <CardBody onClick={()=>{
            // al clickear en una tarjeta se abre su modal y guarda los datos en la constante modalData de app.js para poder mostrar unicamente los datos de ese personaje
            openModal();
            setModalData({nombre, imagen, comics, series, descripcion})
        }}>
            <CardTitle>
                <CardTitleImg src="/img/lname_vector.svg" alt="lname" />
                <p>{nombre}</p>
                <CardTitleImg src="/img/rname_vector.svg" alt="rname" />
            </CardTitle>
            <CardImageDiv>
                <CardImageBack src="/img/rotate_back.png" alt="Round" rotado={rotado.toString()}/>
                <CardAvatar src={imagen} alt="Character Avatar" onMouseEnter={handleHover} onMouseLeave={handleHover}/> {/* al pasar por encima con el puntero desata el evento de rotacion del fondo */}
            </CardImageDiv>
            <CardInfoDiv>
                <CardInfo>
                    <h4>Comics:</h4>
                    <h1>{comics}</h1>
                </CardInfo>
                <CardInfo>
                    <h4>Series:</h4>
                    <h1>{series}</h1>
                </CardInfo>
            </CardInfoDiv>
        </CardBody>
    )
}