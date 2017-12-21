import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const AdminCabinet = () =>
  <Router>
    <div className='admin-cabinet'>
      <AdminLayout>
        <Route exact path='/cabinet/admin/home' component={AdminHomepage} />
        <Route path='/cabinet/admin/about' component={AdminAbout} />
      </AdminLayout>
    </div>
  </Router>

export default App;
