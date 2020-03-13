import React from "react";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../ItemCard";
import styles from "./styles";

const ShareItemPreview = () => {
  return (
    <ItemPreviewContext.Consumer>
      {({ item }) => {
        return (
          <div className={styles.container}>
            <ItemCard item={item}></ItemCard>
          </div>
        );
      }}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;