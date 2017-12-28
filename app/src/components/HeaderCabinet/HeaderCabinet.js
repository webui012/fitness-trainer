import React from 'react';
import { Navigation } from 'Components';
import HeaderCabinetUserData from './HeaderCabinetUserData';
import './HeaderCabinet.scss';


const HeaderCabinet = props => {
  const navigation = HeaderCabinetUserData.navigation;
{console.log(navigation)}

  return (
    <header className='header-user-cabinet'>
      <Navigation data={navigation} />
    </header>
  )
}


export default HeaderCabinet;
