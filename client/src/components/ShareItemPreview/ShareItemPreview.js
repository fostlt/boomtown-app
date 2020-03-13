import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";
import styles from "./styles";

const ShareItemPreview = () => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => {
        return (
          <div>
            <ItemCard item={state}></ItemCard>
          </div>
        );
      }}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;