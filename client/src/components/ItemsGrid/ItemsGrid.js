import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const ItemsGrid = ({ items, classes }) => {
  console.log("items ", items)
  return (
    <div className={classes.root}>
      <Grid
        className={classes.content}
        container
        alignContent="center"
        item
        lg={12}
      >
        <Grid container className={styles.container} spacing={3}>
          {items.map(item => {
                return (
                  <Grid item key={item.id}>
                    <ItemCard item={item} />
                  </Grid>
                );
              })
            }
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ItemsGrid);
