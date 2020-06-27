import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CircularProgress, List, Typography, makeStyles } from "@material-ui/core";
import IssueListItem from "src/components/IssueListItem";
import getRepoIssues from "src/queries/get-repo-issues";

const useStyles = makeStyles({
  root: {
    flexDirection: 'column'
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const IssueList = ({ repoName, repoOwner }) => {
  const classes = useStyles();

  const { data, loading, error } = useQuery(getRepoIssues, {
    variables: {
      name: repoName,
      owner: repoOwner
    }
  });

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
        component="div"
        color="error"
      >
        {error}
      </Typography>
    );
  }

  if (!data.repository.issues.nodes.length) {
    return (
      <Typography
        variant="overline"
        component="div"
      >
        There are no issues!
      </Typography>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">Latest issues: </Typography>
      <List>
        {data.repository.issues.nodes.map(issue => (
          <IssueListItem 
            key={issue.title}
            title={issue.title}
            bodyHTML={issue.bodyHTML}
          />
        ))}
      </List>
    </div>
  );
};

export default IssueList;