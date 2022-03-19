import axios from 'axios';

const POKEMON = 'pikachu';

const { data } = await axios.get(
  `https://pokeapi.co/api/v2/pokemon/${POKEMON}`
);

console.log({ [POKEMON]: data });
