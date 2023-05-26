"use client"
import axios from 'axios';
import md5 from 'md5';

const API_PUBLIC_KEY = 'c10738862151862e744b6792e7a14a38';
const API_PRIVATE_KEY = '5084fb765d3fbef6e1291299f51390c4112b9caa';
const BASE_URL = 'https://gateway.marvel.com/v1/public';

const getCharacters = () => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

  const url = `${BASE_URL}/series/16410/characters?offset=2&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

  return axios.get(url);
};

export { getCharacters };
