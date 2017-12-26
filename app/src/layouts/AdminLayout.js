import React from 'react';

import { HeaderCabinet } from 'Components';

const AdminLayout = props => (
  <div className='login-layout'>
    <HeaderCabinet />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>
)

export default AdminLayout;
