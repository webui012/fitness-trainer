import React from 'react';

import { Header } from 'Components';

const LoginLayout = props => (
  <div className='login-layout'>
    <Header />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>
)

export default LoginLayout;
