import React from 'react';
import { Header } from 'Components';
import HeaderCabinetUserData from '../components/HeaderCabinet/HeaderCabinetUserData';

const UserLayout = props =>
  <div className='login-layout'>
    <Header />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>


export default UserLayout;
