import React from "react";
import styled from "styled-components"
import { useState, useEffect } from "react";
import { getCharacters } from "../api";

const ProgresDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MetaProduccion = styled.div`
    width: 100%;
    font-family: LeagueFont;
    color: #C89B3c;
    display: flex;
    flex-direction: column;
    line-height: 0.1;
    font-size: 10px;
    align-items: flex-end;
    margin-right: 30px;

`
const ProgressBack = styled.img`
    width: 100%;
    
`
const ProgressMeter = styled.div`
  width: 90%;
`
const ProgressCell = styled.div`
        width: 100%;
        position: relative;
        bottom: 42px;
        left: 8px;
        
        
`
const ProgressImage = styled.img`
      height: 37px;
      margin-right: -5px;
      @media (max-width: 400px){
        display: none;;
      }
      
`
const MetaCompletada = styled.div`
    width: 100%;
    font-family: LeagueFont;
    color: #3cb3c8;
    display: flex;
    flex-direction: column;
    line-height: 0.1;
    font-size: 10px;
    align-items: flex-end;
    margin-right: 30px;

`
const MetaCompletadaDiv = styled.div`
  width: fit-content;
  @media (max-width: 400px){
    position: relative;
    top: 40px;
    right: 0;
    left: 0;
    margin: auto;
  }
`

export default function ProgressBar({seriesGoal}){
    /*
     una serie de useStates para crear un array con el cual se van a renderizar celdas deacuerdo al porcentaje completado
     el progressArray sirve para crear las celdas con un .map 
    */
    const [characters, setCharacters] = useState([]);
    const [progressArray, setProgressArray] = useState([])
    // funcion que agrega un item al progressArray por cada 10% de meta completada
    const cells = (index) => {
      for (let i = 0; i < index; i++) {
        setProgressArray(current => [...current, "item"])
        
      }
    }
        
    const totalSeries = characters.map((character) => character.series.available).reduce(function(a, b) { return a + b; }, 0);
    const porcentajeCompletado = ((totalSeries / seriesGoal) * 100).toFixed(2)
    let cantidadCeldas = Math.round( porcentajeCompletado / 10);

    //useEffect para traer la cantidad de series totales de los personajes en la api de Marvel
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await getCharacters();
          setCharacters(response.data.data.results);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };

      fetchCharacters();
      
    }, []);

    //useEffect para ingresar items al progressArray con el cual renderizar las celdas
    useEffect(()=>{
      cells(cantidadCeldas)
      
    },[cantidadCeldas])
  

    return(
        <ProgresDiv>
            <MetaProduccion>
                <p>{`${seriesGoal} Series`}</p>
                <p>Meta de Produccion</p>
            </MetaProduccion>
            <ProgressMeter>
                <ProgressBack src="/img/progress_bar.svg" alt="Progress Bar" />
                <ProgressCell>
                  <MetaCompletadaDiv>
                  {progressArray.map((item, index) => {
                    return <ProgressImage src="/img/progress_cell.svg" key={index}/>
                  })}
                  <MetaCompletada>
                     <p>{`${totalSeries} Series`}</p>
                     <p>{`${porcentajeCompletado}% Meta Completada`}</p>
                  </MetaCompletada>
                  </MetaCompletadaDiv>
                </ProgressCell>
            </ProgressMeter>       
        </ProgresDiv>
    )
}