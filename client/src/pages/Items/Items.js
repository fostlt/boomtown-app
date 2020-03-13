import React from "react";
import ItemsGrid from "../../components/ItemsGrid";
import styles from "./styles";
import { Container, withStyles } from '@material-ui/core/';
import {createMuiTheme } from "@material-ui/core/styles";

const Items = ({ items, classes }) => {
  return (
    <Container maxWidth="xl" className={classes.root}>
      <ItemsGrid items={items} />
    </Container>
  );
};


export default withStyles(styles)(Items);



