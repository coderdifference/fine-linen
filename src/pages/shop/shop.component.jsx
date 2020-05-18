import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './shop.styles.scss';

import INVENTORY from '../../data/sections';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor() {
        super();
        this.state =  {
            inventory: INVENTORY
        };
        console.log('inventory', this.state.inventory);
    }
    render() {
        console.log('match', this.props.match);
        let section = null;
        if (this.props.match.params.section) {
            section = this.state.inventory.find(section => section.linkUrl === `shop/${this.props.match.params.section}`);
        }
        let preview = section 
            ? <div><CollectionPreview section={section}></CollectionPreview></div>
            : <div>{this.state.inventory.map(section => (<CollectionPreview key={section.title} limit={4} section={section} />))}</div>;

        return <div className='shop-page'>{preview}</div>;
    }
}

export default withRouter(ShopPage);