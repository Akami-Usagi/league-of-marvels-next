import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api';
import CharacterCard from "./characterCard";
import styled from "styled-components"

const BoxCharacters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const CharactersDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`
const NavigationDiv = styled.div`
    display: flex;
    align-items: center;
    column-gap: 25px;
    color: #C89B3C;
    font-family: LeagueFont;
    position: relative;
    top: 30px;
    
`
const NavigationImg = styled.img`
    width: 34px;
    cursor: pointer;
`

export default function CharacterList({openModal, setModalData}){ //funciones para abrir el modal y para actualizar los datos del modal
    
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => { //useEffect para traer los datos de los personajes de la api de marvel
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

  // Paginador
  const ItemsPorPagina = 5; // Cantidad de elementos por página
  const totalPaginas = Math.ceil(characters.length / ItemsPorPagina); // Numero total de paginas
  const indexInicial = (currentPage - 1) * ItemsPorPagina; // Index desde el cual se empezaran a mostrar las cards
  const indexFinal = indexInicial + ItemsPorPagina; //Index hasta el cual se mostraran las cards
  const itemsDePagina = characters.slice(indexInicial, indexFinal); //Array de items con los que se renderizara cada pagina

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    return(
        <BoxCharacters>
            <CharactersDiv>
                {/* mapeo de tarjetas de personaje, por cada personaje traido de la api de marvel se crea una tarjeta */}
                 {itemsDePagina.map((character => {
                    return(
                        <CharacterCard 
                        key={character.id} 
                        nombre={character.name} 
                        imagen={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                        comics={character.comics.available}
                        series={character.series.available}
                        descripcion={character.description}
                        openModal={openModal}
                        setModalData={setModalData}/>
                    )
                }))}
            </CharactersDiv>
            <NavigationDiv>
                <NavigationImg src="/img/back_button.svg" alt="Back" onClick={()=> {
                    if(currentPage > 1){
                        // cambia a la pagina anterior, si ya se está en la pagina 1 no hace nada
                        handlePageChange(currentPage-1)
                    }
                }}/>
                <h3>{`${currentPage} / ${totalPaginas}`}</h3>
                <NavigationImg src="/img/next_button.svg" alt="Next" onClick={()=> {
                    if(currentPage < totalPaginas){
                        //cambia a la pagina siguiente, si la pagina actual es menor de la cantidad maxima de paginas
                        handlePageChange(currentPage+1)
                    }
                }}/>
            </NavigationDiv>    
        </BoxCharacters>
    )
}