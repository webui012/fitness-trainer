import React from 'react';

import {
  Header,
  Footer
} from 'Components';

const MainLayout = props => (
  <div className='main-layout'>
    <Header />
    <div className='layout-content'>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default MainLayout;
