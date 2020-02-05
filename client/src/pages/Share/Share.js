import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
//import ShareItemPreview from '../../components/ShareItemPreview';
//put <ShareItemPreview> below

const Share = ({ tags }) => {
  return (
    <div>
      <ShareItemPreview />
     {/* <ShareItemForm/> */}
     <ShareItemForm tags={tags} />
     
     {console.log(tags)}
    </div>
    
  );
};

export default withStyles(styles)(Share);
