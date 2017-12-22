import React from 'react';
import { Header } from 'Components';

const AdminCabinetLayout = props => (
  <div className='admin-layout'>
    <Header />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>
)

export default AdminCabinetLayout;
