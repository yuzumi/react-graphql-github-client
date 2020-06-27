import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  note: {
    marginTop: '1rem',
    textAlign: 'center'
  }
});

const RepositoryList = ({ searchTerm }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="overline"
      className={classes.note}
      component="div"
    >
      No repositories yet.
    </Typography>
  );
};

export default RepositoryList;