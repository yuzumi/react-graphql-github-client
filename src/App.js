import React, { useState } from 'react';
import apolloClient from "src/apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { SearchBar, RepositoryList } from "src/components";
import { Typography, Container, makeStyles } from "@material-ui/core";
import config from "src/config";

const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center'
  }
});

const App = () => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ApolloProvider
      client={apolloClient}
    >
      <Container
        maxWidth="md"
      >
        <Typography
          variant="h3"
          className={classes.title}
        >
          {config.app.name}
        </Typography>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <RepositoryList 
          searchTerm={searchTerm}
        />
      </Container>
    </ApolloProvider>
  )
};

export default App;
