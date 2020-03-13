import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ tags, viewer, classes}) => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainerOne}>
      <ShareItemPreview viewer={viewer} />
      </div>
      <div className={classes.subContainer}>
      <ShareItemForm tags={tags} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
