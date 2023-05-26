import React from "react";
import styled from "styled-components"
import { useState } from "react";

const MainDiv = styled.div`
    width: 100%;
`
const BackDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(black 2%, transparent), url("/img/content_back.jpg") no-repeat;
    background-size: cover;
    @media (max-width: 1330px){
        height: 175vh;
        background-size: auto 100%;
    }
    @media (max-width: 790px){
        height: 257vh;
    }
    @media (max-width: 520px){
        height: 370vh;
    }
`
const ContentDiv = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: larger;
    font-family: LeagueFont;
    color: #C89B3C;
`
const InputDiv = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GitHubLink = styled.a`
    color: #C89B3C;
`
const InputMeta = styled.input`
    width: 300px;
    text-align: center;
    margin-top: 10px;
    padding: 20px 0;
    font-size: 25px;
    background-color: transparent;
    color: #C89B3C;
    border: 2px solid #C89B3C;
    border-radius: 20px;
`
const MetaButton = styled.button`
    margin-top: 20px;
    font-family: LeagueFont;
    border: none;
    background-color: #C89B3C;
    color: white;
    font-size: 25px;
    padding: 10px 35px;
    border-radius: 15px;
    transition: 400ms;
    &:hover{
        background-color: #20202b;
        color: #C89B3C;
    }
`

export default function Home({seriesGoal, setSeriesGoal}){

    const [meta, setMeta] = useState(undefined); //usestate para establecer una nueva meta

    return(
        <MainDiv>
            <BackDiv></BackDiv>
            <ContentDiv>
                <h1>DESAROLLADO POR</h1>
                <h3>Christian Camilo Arango Escobar</h3>
                <h4>Akami.3DS@gmail.com</h4>
                <GitHubLink href="https://github.com/Akami-Usagi/League-Of-Marvels" target="blank"><h4>Repositorio en GitHub</h4></GitHubLink>
                <h4>Prueba tecnica para DCorp</h4>
                <p>Mayo de 2023</p>
                <InputDiv>
                    <h3>Establecer Meta de Produccion</h3>
                    <label>Nueva Meta</label>
                    <InputMeta type="number" value={meta} onChange={(event)=> setMeta(event.target.value)}/> 
                    {/* Aqui nos aseguramos de que el valor ingresado sea mayor al total de series para poderlo establecer como meta */}
                    <MetaButton onClick={()=>{
                        if (meta >= 2199) {
                            setSeriesGoal(meta);
                            alert("Nueva Meta Establecida")
                        }else{
                            alert("La meta de produccion es inferior al valor de series producidas, ingrese un valor mayor a 2199")
                        }
                        
                    }}>Aceptar</MetaButton>
                </InputDiv>
                 
            </ContentDiv>
            
        </MainDiv>
    )
}