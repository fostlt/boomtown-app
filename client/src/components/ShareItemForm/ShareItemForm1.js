// import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
// import { withStyles } from "@material-ui/styles";
// import styles from "./styles";
// import { Typography, TextField } from "@material-ui/core";
// import { Form, Field, FormSpy } from "react-final-form";
// import HomeIcon from "@material-ui/icons/Home";
// import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

// //const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const onSubmit = async values => {
//   console.log(values);
// };

// class ShareItemForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const { classes, tags } = this.props;

    
//     //let { classes, tags } = this.props;
//     dispatchUpdate = (values, allTags, updatePreview) => {
//         applyTags = (tags, allTags) => {
//           return tags.map(tag => {
//             const updatedTag = { title: tag };
//             allTags.filter(t => {
//               if (t.title === tag) {
//                 updatedTag.id = t.id;
//               }
//             });
//             return updatedTag;
//           });
//         };
//       updatePreview({
//         ...values,
//         tags: this.applyTags(values.tags || [], allTags)
//       });
//     };

//     return (
//       <ItemPreviewContext.Consumer>
//         {({ updatePreview, resetPreview }) => (
//           <Form
//             onSubmit={onSubmit}
//             //initialValues={{ stooge: "larry", employed: false }}
//             render={({ handleSubmit, form, submitting, pristine, values }) => (
//               <form onSubmit={handleSubmit}>
//                 <FormSpy
//                   subscription={{ values: true }}
//                   onChange={({ values }) => {
//                     if (values) {
//                       this.dispatchUpdate(values, tags, updatePreview);
//                     }
//                     return "";
//                   }}
//                 />
//                 <div>
//                   <Typography variant="h2">Share. Borrow. Prosper.</Typography>
//                   <Field
//                     name="firstName"
//                     component="input"
//                     type="text"
//                     placeholder="Name your item"
//                   />
//                 </div>
//                 <div>
//                   <Field
//                     name="lastName"
//                     component="input"
//                     type="text"
//                     placeholder="Describe your item"
//                   />
//                 </div>
//                 <Typography variant="h6">Add Tags:</Typography>
//                 <div>
//                   <label className={classes.tagIcons}>
//                     <Field
//                       name="tags"
//                       component="input"
//                       type="checkbox"
//                       value="Household Items"
//                     />
//                     Household Items
//                     <HomeIcon />
//                   </label>
//                   <label className={classes.tagIcons}>
//                     <Field
//                       name="tags"
//                       component="input"
//                       type="checkbox"
//                       value="Tools"
//                     />
//                     Tools
//                     <HomeIcon />
//                   </label>
//                   <label className={classes.tagIcons}>
//                     <Field
//                       name="tags"
//                       component="input"
//                       type="checkbox"
//                       value="Electronics"
//                     />
//                     Electronics
//                     <HomeIcon />
//                   </label>
//                   <label className={classes.tagIcons}>
//                     <Field
//                       name="tags"
//                       component="input"
//                       type="checkbox"
//                       value="Books"
//                     />
//                     Books
//                     <HomeIcon />
//                   </label>
//                   <label className={classes.tagIcons}>
//                     <Field
//                       name="tags"
//                       component="input"
//                       type="checkbox"
//                       value="Sporting Goods"
//                     />
//                     Sporting Goods
//                     <HomeIcon />
//                   </label>
//                   <label className={classes.tagIcons}>
//                     <Field
//                       name="tags"
//                       component="input"
//                       type="checkbox"
//                       value="Trash"
//                     />
//                     Trash
//                     <HomeIcon />
//                   </label>

//                   <button type="submit" disabled={submitting || pristine}>
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             )}
//           />
//         )}
//       </ItemPreviewContext.Consumer>
//     );
//   }
// }

// export default withStyles(styles)(ShareItemForm);
