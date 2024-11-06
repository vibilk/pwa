import React from 'react'
import { Popover } from 'antd';
import logo from "../../assets/images/logo.png";
import { LuBell } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { PiNotepad } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

import "../../assets/css/sidenav.css"
function Sidenav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  
  const DashboardList = (
    <div className='dashboard_link'>
      <ul className='p-0 m-0'>
        <li><Link to="/app/dashboard">Dashboard</Link> </li>
        <li>Reports</li>
      </ul>
    </div>
  );
  const Notification = (
    <div className='dashboard_link'>
      <p className='m-0'>Notification</p>
    </div>
  );
  const profile = (
    <div className='dashboard_link'>
      <p className='m-0' onClick={handleLogout}>Logout</p>
    </div>
  );

 

  return (
    <>
    <div className='sidenav_wrapper'>
      <div className='sidenav_top'>
        <div className='sidenav_logo'>
          <img src={logo} alt="logo" />
        </div>
        <ul className='p-0 m-0 sidenav_list'>
          <li>

            <Popover placement="right" content={Notification} overlayClassName="custom-popover">
              <LuBell />
            </Popover>
          </li>
          <li>
            <IoHomeOutline /> </li>
          <li>
            <Popover placement="rightTop" content={DashboardList} overlayClassName="custom-popover">
              <MdOutlineSpaceDashboard />
            </Popover>
          </li>
          <li><LuBuilding2 /></li>
          <li><PiNotepad /></li>
        </ul>
      </div>

      <div className='sidenav_bottom'>
        <ul className='p-0 m-0 sidenav_list'>
          <li>
            <CiGift />
          </li>
          <li><IoChatboxEllipsesOutline /></li>
          <li>
            <div className='user_log'>
              <Popover placement="right"  content={profile}>
                <span className='d-block'> v</span>
              </Popover>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Sidenav