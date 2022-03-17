// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { SetForm, SetList } from '@nx-apollo-react-ex/feature-sets';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>My Lego Sets</h1>
    <div className="flex">
      <SetForm />
      <SetList />
    </div>
  </ApolloProvider>
);

export default App;
