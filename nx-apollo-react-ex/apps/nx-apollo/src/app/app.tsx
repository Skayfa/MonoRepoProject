// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import React from 'react';
import './app.css';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>My Lego Sets</h1>
  </ApolloProvider>
);

export default App;
