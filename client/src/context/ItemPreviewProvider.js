import React from "react";

export const ItemPreviewContext = React.createContext();

const IntitialState = {
  imageurl: "http://via.placeholder.com/350x250?text=Please select an image",
  itemowner: {},
  created: new Date(),
  title: "Dummy title",
  description: "dummy description",
  tags: []
};

const ItemPreviewProvider = props => {
  const [item, setItem] = React.useState(  IntitialState);
/* add item: to initital state */
  const updatePreview = itemInput => {
    const newItem = {item: { ...item, ...itemInput}}; /* itemInput is the new values -> right to left */
    setItem({item: newItem});
  };

  const resetPreview = () => {
    setItem({item: IntitialState});
  };

  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        resetPreview: resetPreview,
        updatePreview: updatePreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

export default ItemPreviewProvider;
