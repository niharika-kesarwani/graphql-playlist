import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// components
import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
