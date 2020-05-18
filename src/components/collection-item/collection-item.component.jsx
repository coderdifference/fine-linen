import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  return (
    <div className="collection-item">
      <div className="image-wrapper">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/media/images/${item.imageUrl})`,
          }}
        ></div>
      </div>
      <div className="button">add to cart</div>
      <div className="item-name">{item.name}</div>
      <div className="item-price">${item.price.toFixed(2)}</div>
    </div>
  );
};
export default CollectionItem;
