import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NoticeMarque from './NoticeMarque';


function Layout() {
  return (
    <div>
      <NoticeMarque />
      <Navbar />
      <main>
        <Outlet />  {/* This renders the specific content for each route */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;