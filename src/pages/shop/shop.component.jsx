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
        return ( 
        <div className='shop-page'>
            {/*<h1 className='title'>Fine Linen</h1>
            <h2 className='subtitle'>Clothing for Christians</h2>*/}
            <div>
                {this.state.inventory.map(section => (<CollectionPreview key={section.title} section={section} />))}
            </div>
        </div>);
    }
}

export default withRouter(ShopPage);