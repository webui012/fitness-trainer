import React from 'react';
import UserLayout from '../../layouts/UserLayout'

const UserCabinet = () =>
  <Router>
    <div className='user-cabinet'>
      <UserLayout>
        <Route path='/cabinet/user/home' component={UserHomepage} />
        <Route path='/cabinet/user/about' component={UserAbout} />
      </UserLayout>
    </div>
  </Router>

export default App;
