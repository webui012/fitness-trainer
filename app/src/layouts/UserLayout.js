import React from 'react';
import { Header, HeaderCabinet } from 'Components';

const UserLayout = props => (
  <div className='login-layout'>
    <Header />
    <HeaderCabinet />
    <div className='layout-content'>
      {props.children}
    </div>
    </div>
  )


export default UserLayout;
