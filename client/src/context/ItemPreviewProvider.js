import React from "react";

export const ItemPreviewContext = React.createContext();

const IntitialState = {
  imageurl: "http://via.placeholder.com/350x250?text=Please+select+an+image",
  itemowner: {},
  created: new Date(),
  title: "Name your item",
  description: "Describe your item",
  tags: []
};

const ItemPreviewProvider = props => {
  const [item, setItem] = React.useState(IntitialState);

  const updatePreview = itemInput => {
    const newItem = 
   { ...item, ...itemInput }
    
    setItem(newItem );
  };

  const resetPreview = () => {
    setItem(IntitialState);
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
