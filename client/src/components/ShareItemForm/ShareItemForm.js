import React, { Component } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { withStyles, Typography, TextField } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import DevicesIcon from "@material-ui/icons/Devices";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import styles from "./styles.js";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
  }

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
      <Mutation mutation={ADD_ITEM_MUTATION}>
        {addItem => (
          <ItemPreviewContext.Consumer>
            {({ updatePreview, resetPreview }) => (
              <Form
                onSubmit={async values => {
                  try {
                    await addItem({
                      variables: {
                        item: {
                          ...values,
                          tags: this.applyTags(values.tags || [], tags)
                        }
                      }
                    });
                  } catch (err) {
                    throw new Error(err);
                  }
                }}
                validate={this.validate}
                render={({ handleSubmit, pristine, submitting }) => (
                  <form
                    onSubmit={() => {
                      handleSubmit();
                      resetPreview();
                    }}
                  >
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
                      <Typography variant="h2">
                        Share. Borrow. Prosper.
                      </Typography>

                      

                      <Field
                        name="title"
                        render={({ input, meta }) => (
                          <TextField
                            label="Name Your Item"
                            fullWidth={true}
                            {...input}
                          />
                        )}
                      />

                      <Field
                        name="description"
                        render={({ input, meta }) => (
                          <TextField
                            label="Describe Your Item"
                            fullWidth={true}
                            multiline
                            rows="5"
                            {...input}
                          />
                        )}
                      />

                      <Typography style={{ margin: 10 }} variant="h6">
                        Add Tags:
                      </Typography>

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
                        <BuildIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Electronics"
                        />
                        Electronics
                        <DevicesIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Books"
                        />
                        Books
                        <LibraryBooksIcon />
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
                      <Field
                        name="submit"
                        render={(input, meta) => (
                          <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className={classes.submit}
                            disabled={submitting || pristine}
                          >
                            Share
                          </button>
                        )}
                      />
                    </div>
                  </form>
                )}
              />
            )}
          </ItemPreviewContext.Consumer>
        )}
      </Mutation>
    );
  }
}
export default withStyles(styles)(ShareItemForm);
