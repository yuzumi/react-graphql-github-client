import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "@apollo/react-hooks";
import { Typography, CircularProgress, makeStyles } from "@material-ui/core";
import searchForRepos from "src/queries/search-for-repos";
import RepositoryListItem from "src/components/RepositoryListItem";

const useStyles = makeStyles({
  note: {
    marginTop: '1rem',
    textAlign: 'center'
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  }
});

const RepositoryList = ({ searchTerm }) => {
  const classes = useStyles();

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const { data, loading, error } = useQuery(searchForRepos, {
    variables: {
      search_term: debouncedSearchTerm
    }
  });

  const [expandedRepo, setExpandedRepo] = useState(null);

  useEffect(() => {
    setExpandedRepo(null);
  }, [data]);

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant="overline"
        className={classes.note}
        component="div"
        color="error"
      >
        {error}
      </Typography>
    );
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant="overline"
        className={classes.note}
        component="div"
      >
        There are no such repositories!
      </Typography>
    );
  }

  return (
    <div>
      {data.search.edges.map((repo, index) => (
        <RepositoryListItem 
          repo={repo}
          expanded={expandedRepo === index}
          onToggled={() => setExpandedRepo(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default RepositoryList;