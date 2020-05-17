import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import SectionData from "../../data/sections";

class DirectoryMenu extends Component {
  constructor({ menuItems }) {
    super();
    this.state = {
      sections: SectionData
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => (
          <MenuItem key={section.id} item={section} subtitle='SHOP NOW'/>
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
