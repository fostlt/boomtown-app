import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
//import ItemGrid from "../../components/ItemsGrid";
//add itemgrid below profile card

const Profile = props => {
  const { profile, classes } = props;
  return (
    <div className={classes.container}>
      <Grid container justify="center">
        <Grid container justify="center">
          <Grid item md={6}>
            <ProfileCard profile={profile} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Profile);