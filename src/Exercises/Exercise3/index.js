// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saida de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest
// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]

const { default: axios } = require("axios")

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

const parseHumanCharacter = (character) => {
  return {
    nome: character.name,
    genero: character.gender === "Male" ? "Homem" : "Mulher",
    avatar: character.image,
    especie: 'Humano'
  }
}

// simple aproach
// async function getRicAndMortyCharacters() {
//   const charactersId = '1,2,3,4,5'
//   return await axios.get(BASE_URL+charactersId)
//     .then(res => res.data.map(character => parseHumanCharacter(character)))
// }

// alternative aproach
// assuming we dont have characters Ids
// assuming any response for the requested name will suffice, as Rick and Morty has multiple realities
async function getRicAndMortyCharacters() {
  const characters = [
    'rick sanchez',
    'morty smith',
    'summer smith',
    'beth smith',
    'jerry smith'
  ]
  return await axios.all(characters.map(character => (
    axios.get(`${BASE_URL}?name=${character}&status=alive`)
  ))).then(responses => responses.map(response => (
    parseHumanCharacter(response.data.results[0])
  )))
}

module.exports = getRicAndMortyCharacters;
