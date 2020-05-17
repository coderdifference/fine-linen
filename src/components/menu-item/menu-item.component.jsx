import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({item, subtitle}) => 
<div className={`menu-item ${item.size ||''}`}>
    <div className="background-image" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/media/images/${item.title}/section.png)`
    }}>
    </div>
    <div className='content'>
        <h1 className='title'>{item.title}</h1>
        <span className='subtitle'>{subtitle}</span>
    </div>
</div>;

export default MenuItem;