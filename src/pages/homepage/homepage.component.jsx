import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const HomePage = () => (
  <div className='homepage'>
    <DirectoryMenu menuItems={[
      {
        title: 'SCARFS'
      },
      {
        title: 'JACKETS'
      },
      {
        title: 'PANTS'
      },
      {
        title: 'MENS'
      },
      {
        title: 'WOMENS'
      }
    ]}></DirectoryMenu>
  </div>
);

export default HomePage;