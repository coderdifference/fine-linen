import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ section, limit }) => {
  console.log(section);
  return (
    <div className="collection-preview">
      <h1 className="title">{section.title}</h1>
      <div className="list">
        {(limit ? section.items.slice(0, limit) : section.items).map((item) => (
          <CollectionItem key={`item_${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
