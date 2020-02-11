import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";
import logo from "../../../src/images/boomtown.svg";
import { withRouter } from "react-router-dom";
import Icon from "@material-ui/icons/AddCircle";
import { withStyles } from "@material-ui/styles";

const NavBar = ({ location }) => {
  const classes = styles();
  console.log(location);
  return (
    <div className={classes.NavBar}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.containerone}>
          <img src={logo} className={classes.logo}/>
          </div>
          <div className={classes.container}>
            <Button>
          <Icon/>
          <Typography className={classes.text}>Share Something</Typography>
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          </div>
        </Toolbar>

      </AppBar>
      <Toolbar />
      <Toolbar />
    </div>
  );
};

export default withStyles(styles)(NavBar);