"use client"
import React from "react";
import styled from "styled-components"
import ProgressBar from "./progressBar";

const BannerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
    
`
const ProgressDiv = styled.div`
    width: 510px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: LeagueFont;
    font-weight: 500;
    font-size: 20px;
    
`
const ProgressText = styled.p`
    color: white;
    text-align: center;
`
const VideoDiv = styled.div`
    width: 382px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
`
const ImageDiv = styled.div`
    width: 382px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
    @media (max-width: 383px){
        width: 100%;
        height: auto;
    }
`
const ImageFile = styled.img`
    width: 382px;
    height: 193px;
    @media (max-width: 383px){
        width: 100%;
        height: auto;
    }
`
const VideoFime = styled.iframe`
    width: 382px;
    height: 193px;
    @media (max-width: 383px){
        width: 100%;
        
    }
`


export default function Banner({seriesGoal}){ //meta de series desde app.js
    return(
        <BannerDiv>
            <ProgressDiv>
                <ProgressText>PROGRESO DE SERIES PRODUCIDAS</ProgressText>
                <ProgressBar seriesGoal={seriesGoal}/> {/* lleva los datos de la meta de forma dinamica para establecer metas personalizadas */}
            </ProgressDiv>
            <VideoDiv>
            <VideoFime src="https://www.youtube.com/embed/ONJ2Cr8h6A8?autoplay=1&mute=1&loop=1&playlist=ONJ2Cr8h6A8" title="YouTube video player" frameBorder="0" ></VideoFime>
            </VideoDiv>
            <ImageDiv>
                <ImageFile src="https://mcdn.wallpapersafari.com/medium/30/87/bKOQC3.jpg" alt="Marvel Wallpaper" />
            </ImageDiv>
        </BannerDiv>
    )
}