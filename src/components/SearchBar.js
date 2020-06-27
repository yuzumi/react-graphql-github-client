import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

const SearchBar = ({ value, onChange }) => {
  const classes = useStyles();
  
  const handleChange = event => 
    onChange(event.target.value);

  return (
    <TextField 
      className={classes.input}
      label="Search for repos..."
      type="search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBar;