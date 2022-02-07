import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles';
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    marginTop: 15
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: 15
  },
  exportButton: {
    marginRight: 15
  },
  searchInput: {
    marginRight: 0,
  },
  formControl: {
    margin: 25,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap"
  },
  date: {
    marginTop: 3
  },
  range: {
    marginTop: 13
  }
}));

const Toolbar = ({
  setEmailSearch,
  setNameSearch,
  className
}) => {
  const classes = useStyles();

  const handleNameChange = (event) => {
    setNameSearch(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmailSearch(event.target.value)
  }

  return (
    <div
      className={className}
    >
      <Grid container spacing={4}>
        <Grid
          className={classes.searchInput}
          item
          xl={2}
          xs={12}
        >
          <TextField
            label="Name search"
            variant="outlined"
            onChange={handleNameChange}
          />
        </Grid>
        <Grid
          className={classes.searchInput}
          item
          xl={2}
          xs={12}
        >
          <TextField
            label="Email search"
            variant="outlined"
            onChange={handleEmailChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
