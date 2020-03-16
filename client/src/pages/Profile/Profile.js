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
  const { profile, classes, viewer } = props;
  console.log("hmu on da gram", props)
  return (
    <div className={classes.container}>
      <Card className={classes.profile}>
        <CardContent className={classes.content}>
          <div className={classes.containerImage}>
          <Typography>
            <Gravatar style={{borderRadius: 50}}
              email={(profile && profile.email) || "No email entered"}
            />
            <Typography style={{fontSize: 40, fontWeight: 500}}>{(profile && profile.fullname && profile.fullname) ||
              "No name entered"}</Typography>
          </Typography>
          </div>
          <Typography style={{fontSize: 30}}>
            {profile && profile.items.length} Items Shared,{" "}

            
            {profile && profile.borrowed.length} Items Borrowed
          </Typography>
          <Typography style={{fontSize: 30}}>
            {(profile && profile.bio && profile.bio) || "No bio. :("}
          </Typography>
        </CardContent>
      </Card>
      {profile.items.length ? (
        <Container>
          <Typography style={{ marginTop: 15}} variant="h4" color="primary">
            Shared Items
          </Typography>
          <Grid style={{display: "flex", paddingBottom: 40}}>
            {profile.items.map(item => (
              <Grid item key={item.id} md={10}>
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
