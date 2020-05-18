import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

function getImageUrl(item) {
  return item.imageUrl
    ? `${process.env.PUBLIC_URL}/media/images/${item.imageUrl}`
    : `${process.env.PUBLIC_URL}/media/images/${item.title}/section.png`;
}

const MenuItem = ({ item, subtitle, history, match }) => (
  <div
    className={`menu-item ${item.size || ""}`}
    onClick={() => history.push(`${match.url}${item.linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${getImageUrl(item)})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{item.title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
