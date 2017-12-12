import React from 'react';

import {
  Header,
  Footer
} from 'Components';

const MainLayout = props => (
  <div className='main-layout'>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default MainLayout;
