import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Container
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";
import ItemCard from "../../components/ItemCard";

const Profile = props => {
  const { profile, classes, user, viewer } = props;
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
      {profile.items.length ? (
        <Container>
          <Typography style={{ marginTop: 15 }} variant="h4" color="primary">
            Shared Items
          </Typography>
          <Grid>
            {profile.items.map(item => (
              <Grid item key={item.id} md={3}>
                <ItemCard item={item} viewer={viewer} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(Profile);
