import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
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
  setHeadlineSearch,
  setCategorySearch,
  setTopicSearch,
  setMediumSearch,
  className
}) => {
  const classes = useStyles();

  const handleHeadlineChange = (event) => {
    setHeadlineSearch(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategorySearch(event.target.value)
  }

  const handleTopicChange = (event) => {
    setTopicSearch(event.target.value)
  }

  const handleMediumChange = (event) => {
    setMediumSearch(event.target.value)
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
            label="Headline search"
            variant="outlined"
            onChange={handleHeadlineChange}
          />
        </Grid>
        <Grid
          className={classes.searchInput}
          item
          xl={2}
          xs={12}
        >
          <TextField
            label="Category search"
            variant="outlined"
            onChange={handleCategoryChange}
          />
        </Grid>
        <Grid
          className={classes.searchInput}
          item
          xl={2}
          xs={12}
        >
          <TextField
            label="Topic search"
            variant="outlined"
            onChange={handleTopicChange}
          />
        </Grid>
        <Grid
          className={classes.searchInput}
          item
          xl={2}
          xs={12}
        >
          <TextField
            label="Medium search"
            variant="outlined"
            onChange={handleMediumChange}
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
