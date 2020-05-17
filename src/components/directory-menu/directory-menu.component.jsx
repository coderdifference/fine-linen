import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss';

const DirectoryMenu = props => 
<div className="directory-menu">{
    props.menuItems.map((item, index) => <MenuItem key={'K'+index} title={item.title} subtitle={item.subtitle || 'SHOP NOW'}/>)
}
</div>;

export default DirectoryMenu;