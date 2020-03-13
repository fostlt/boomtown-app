import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";
import logo from "../../../src/images/boomtown.svg";
import { withRouter, Redirect } from "react-router-dom";
import Icon from "@material-ui/icons/AddCircle";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { LOGOUT_MUTATION } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import { Fingerprint, PowerSettingsNew } from "@material-ui/icons/";

const NavBar = ({ location }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = styles();
  console.log(location);
  return (
    <Mutation mutation={LOGOUT_MUTATION}>
      {logout => {
        return (
          <div className={classes.NavBar}>
            <AppBar position="fixed">
              <Toolbar>
                <div className={classes.containerone}>
                  <Link to="/">
                    <img src={logo} className={classes.logo} />
                  </Link>
                </div>
                <div className={classes.container}>
                  <Button>
                    <Icon style={{ marginRight: 10 }} />
                    <Link to="/share">
                      <Typography style={{ color: "black" }}>
                        Share Something
                      </Typography>
                    </Link>
                  </Button>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/profile">
                      <MenuItem
                        style={{ color: "black" }}
                        onClick={handleClose}
                      >
                        <PowerSettingsNew  style={{ marginRight: 10 }} />
                        Profile
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={logout}>
                      <Fingerprint style={{ marginRight: 10 }} /> Sign out
                    </MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
            <Toolbar />
            <Toolbar />
          </div>
        );
      }}
    </Mutation>
  );
};

export default withStyles(styles)(NavBar);
