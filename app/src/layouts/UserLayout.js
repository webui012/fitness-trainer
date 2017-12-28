import React from 'react';

import { HeaderCabinet } from 'Components';
import HeaderCabinetUserData from '../components/HeaderCabinet/HeaderCabinetUserData';


const UserLayout = props => (
  <div className='login-layout'>
    <HeaderCabinet data={HeaderCabinetUserData} />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>
)

export default UserLayout;
