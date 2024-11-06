import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import SideNav from './Sidenav';
import Accounts from '../../pages/Accounts/Accounts';
import List from '../../pages/List/List';
function MainLayout() {


  return (

    <>
      <div className='container_wrapper position-relative'>
        <div className='sidenav'><SideNav /></div>
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<Navigate to="/app/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="list" element={<List />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default MainLayout