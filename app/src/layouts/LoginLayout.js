import React from 'react';

import { Header } from 'Components';

const LoginLayout = props => (
  <div className='login-layout'>
    <Header />
    {props.children}
  </div>
)

export default LoginLayout;
