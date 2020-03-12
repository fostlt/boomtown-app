import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import Gravatar from "react-gravatar";
//import ItemGrid from "../../components/ItemsGrid";
//add itemgrid below profile card'
import ItemCard from "../../components/ItemCard/ItemCard"

const Profile = props => {
  const { profile, classes } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.profile}>
        <CardContent className={classes.content}>
          <Typography variant="h2">
            <Gravatar
              email={(profile && profile.email) || "No email entered"}
            />
            {(profile && profile.fullname && profile.fullname) ||
              "No name entered"}
          </Typography>
          <Typography>
            {profile && profile.items.length} Items Shared{" "}
            {profile && profile.borrowed.length} Items Borrowed
          </Typography>
          <Typography>
            {(profile && profile.bio && profile.bio) || "No bio. :("}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Profile);