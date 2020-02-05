import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { item, classes } = this.props;
    /* added item && infront of return -> white screen -> maybe try on individual items */
    return ( item &&
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://www.fillmurray.com/300/300"
            />
            <CardContent>
              <Typography>
                <Gravatar email={item.itemowner.email} />
                {item.itemowner.fullname + " " + item.created}
              </Typography>
              <Typography>{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" className={classes.button}>
              Borrow
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ItemCard);
