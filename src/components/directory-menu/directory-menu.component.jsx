import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";

class DirectoryMenu extends Component {
  constructor({ menuItems }) {
    super();
    this.state = {
      menuItems: menuItems || [
        "SCARFS", "JACKETS", "PANTS", "MENS","WOMENS"
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.menuItems.map((item, index) => (
          <MenuItem
            key={"K" + index}
            title={item}
            subtitle='SHOP NOW'
          />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
