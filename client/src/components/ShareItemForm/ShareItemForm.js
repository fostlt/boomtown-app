import React, { Component } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { withStyles, Typography, TextField } from "@material-ui/core";
/* REPLACE WITH TEXTFIELD WHEN YOU HAVE THE TIME */
import HomeIcon from "@material-ui/icons/Home";
import styles from "./styles.js";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

class ShareForm extends Component {
  validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.tags) {
      errors.tags = "Required";
    }
    return errors;
  };

  onSubmit = values => {
    console.log(values);
  };
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };
  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };
  render() {
    const { classes, tags } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, pristine, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <FormSpy
                  subscription={{ values: true }}
                  onChange={({ values }) => {
                    if (values) {
                      this.dispatchUpdate(values, tags, updatePreview);
                    }
                    return "";
                  }}
                />

                <div className={classes.test}>
                  <Typography variant="h2">Share. Borrow. Prosper.</Typography>
                  <TextField label="Name Your Item" fullWidth={true} />

                  <TextField
                    label="Describe Your Item"
                    fullWidth={true}
                    multiline
                    rows="5"
                  />

                  <Typography variant="h6">Add Tags:</Typography>

                  <label className={classes.tagIcons}>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Household Items"
                    />
                    Household Items
                    <HomeIcon />
                  </label>
                  <label className={classes.tagIcons}>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Tools"
                    />
                    Tools
                    <HomeIcon />
                  </label>
                  <label className={classes.tagIcons}>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Electronics"
                    />
                    Electronics
                    <HomeIcon />
                  </label>
                  <label className={classes.tagIcons}>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Books"
                    />
                    Books
                    <HomeIcon />
                  </label>
                  <label className={classes.tagIcons}>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Sporting Goods"
                    />
                    Sporting Goods
                    <HomeIcon />
                  </label>
                  <label className={classes.tagIcons}>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Trash"
                    />
                    Trash
                    <HomeIcon />
                  </label>

                  <button type="submit" className={classes.submit} disabled={submitting || pristine}>
                    Share
                  </button>
                </div>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareForm);
