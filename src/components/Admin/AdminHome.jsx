// AdminHome.jsx
import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './Adminhome.css';
import './reg.css';
import adminPanelImage from './adminpanel.jpg';

const AdminHome = () => {
  return (
    
    <div >
      <Topbar />
      <Sidebar />
      <div className="aa">
  <img src={adminPanelImage} alt="Admin Panel" className="center-image" style={{ width: '100%', maxWidth: '600px' }} />
  <h1>WELCOME TO ADMIN PANEL!</h1>
</div>
    </div>
  );
};

export default AdminHome;
