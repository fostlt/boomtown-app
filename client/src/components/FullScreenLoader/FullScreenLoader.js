import React from "react";
import {
  withStyles,
  CircularProgress,
  Typography,
  Grid,
  Fade
} from "@material-ui/core";
import styles from "./styles";

const FullScreenLoader = props => {
  const {classes} = props;
  return (
    <Grid item align="center" className={classes.container}>

      <CircularProgress 
      className={classes.loading}/>
      <Typography className={classes.text}>
        "What is the Shadow DOM?"
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(FullScreenLoader);