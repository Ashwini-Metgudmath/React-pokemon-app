import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './containers/PokemonsContainer'

function App() {
 const client = new ApolloClient({
   'uri':'https://graphql-pokemon.now.sh'
 })

  return (
    <ApolloProvider client={client}>
      <main>
      <p className='title'>My favourite Pokemons</p>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
