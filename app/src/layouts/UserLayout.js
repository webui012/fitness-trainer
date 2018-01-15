import React from 'react';
//import { Header } from 'Components';
import { HeaderCabinet } from 'Components';
import HeaderCabinetUserData from '../components/HeaderCabinet/HeaderCabinetUserData';

const UserLayout = props =>
  <div className='user-layout'>
    <HeaderCabinet data={HeaderCabinetUserData} />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>


export default UserLayout;
