import React from 'react'
import "./dashboard.css";
import { LuArrowDownWideNarrow } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { LuArrowUpNarrowWide } from "react-icons/lu";
import { GoArrowBoth } from "react-icons/go";
import { BsFillBuildingsFill } from "react-icons/bs";
import { Breadcrumb } from 'antd';
import { AiFillThunderbolt } from "react-icons/ai";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";
import { PiStorefrontLight } from "react-icons/pi";
import { FaCircle } from "react-icons/fa6";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { TbArrowWaveLeftUp } from "react-icons/tb";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { PiWaveSineBold } from "react-icons/pi";
import { BsArrow90DegUp } from "react-icons/bs";
import { BsArrow90DegDown } from "react-icons/bs";
import { BsArrows } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { PiTrolleyFill } from "react-icons/pi";
import { MdShelves } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";

function Dashboard() {


  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return { greeting: 'Good morning', icon: <FiSunrise /> };
    } else if (currentHour >= 12 && currentHour < 18) {
      return { greeting: 'Good afternoon', icon: <FiSun /> };
    } else {
      return { greeting: 'Good evening', icon: <FiSunset /> };
    }
  };
  const { greeting, icon } = getGreeting();


  return (
    <div className='container-fluid pt-0'>
      <div className="row mb-4">
        {/* <div className="col-12 mb-3 text-start">
          <h1 className='page_title'>Dashboard</h1>
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },

              {
                title: 'Dashboard',
              },
            ]}
          />
        </div> */}
        <div className="col-12 py-3 top_header-title d-flex">
          <span className='d-flex align-items-center gap-1 me-2'>{icon} {greeting},</span> Hi Admin!
        </div>
      </div>
      <div className='row mt-3'>
        <div className="col-12 col-sm-9">
          <div className="row mb-3">
            <div className="col-12 col-sm-4 ">
              <div className="card diagnose_card card_1 mb-3">
                <Link to="/app/list" className='cross_arrow'>
                  <GoArrowUpRight />
                </Link>

                <div className='card_detail'>
                  <div className='card_title d-flex align-items-center'>
                    <span className='diagnose_arrow-1'> <CiMoneyCheck1 /></span>
                    Cost</div>
                  <div className='card_value d-flex align-items-center justify-content-between'>
                    <span>33.3K</span>
                    <div className=''>
                      <span className='m-0 arrow_col d-flex align-items-center'>
                       <p className='m-0'>Increase - 20%</p> <BsArrow90DegUp className='text-success'/>
                      </span>
                    </div>
                  </div>
                  <div className='card_subtitle'>No Incidents in previous time period</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 ">
              <div className="card diagnose_card card_2 mb-3">
                <Link to="/app/accounts" className='cross_arrow'>
                  <GoArrowUpRight />
                </Link>

                <div className='card_detail'>
                  <div className='card_title d-flex align-items-center'>
                    <span className='diagnose_arrow-1'> <MdOutlineInventory2 /></span>
                    Inventory</div>
                  <div className='card_value d-flex align-items-center justify-content-between'>
                    <span>68K</span>
                    <div className=''>
                    <span className='m-0 arrow_col d-flex align-items-center'>
                       <p className='m-0'>Increase - 20%</p> <BsArrow90DegDown className='text-danger'/>
                      </span>
                    </div>
                  </div>
                  <div className='card_subtitle'>No Incidents in previous time period</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 ">
              <div className="card diagnose_card card_3 mb-3">
                <Link to="/app/accounts" className='cross_arrow'>
                  <GoArrowUpRight />
                </Link>

                <div className='card_detail'>
                  <div className='card_title d-flex align-items-center'>

                    <span className='diagnose_arrow-1'> <MdHealthAndSafety /></span>
                    Safety</div>
                  <div className='card_value d-flex align-items-center justify-content-between'>
                    <span>0 Incident</span>
                    <div className=''>
                    <span className='m-0 arrow_col d-flex align-items-center'>
                       <p className='m-0'>Status Quo - 20%</p> <BsArrows className='text-warning'/>
                      </span>
                    </div>
                  </div>
                  <div className='card_subtitle'>No Incidents in previous time period</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 ">
              <div className="card diagnose_card card_4 mb-3">
                <Link to="/app/accounts" className='cross_arrow'>
                  <GoArrowUpRight />
                </Link>

                <div className='card_detail'>
                  <div className='card_title d-flex align-items-center'>

                    <span className='diagnose_arrow-1'> <PiTrolleyFill /></span>
                    Operations</div>
                  <div className='card_value d-flex align-items-center justify-content-between'>
                    <span>6% OTIF</span>
                    <div className=''>
                    <span className='m-0 arrow_col d-flex align-items-center'>
                       <p className='m-0'>Increase - 20%</p> <BsArrow90DegUp className='text-success'/>
                      </span>
                    </div>
                  </div>
                  <div className='card_subtitle'>No Incidents in previous time period</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 ">
              <div className="card diagnose_card card_5 mb-3">
                <Link to="/app/accounts" className='cross_arrow'>
                  <GoArrowUpRight />
                </Link>

                <div className='card_detail'>
                  <div className='card_title d-flex align-items-center'>

                    <span className='diagnose_arrow-1'> <MdShelves /></span>
                    Space Utilization</div>
                  <div className='card_value d-flex align-items-center justify-content-between'>
                    <span>200 Pallets</span>
                    <div className=''>
                    <span className='m-0 arrow_col d-flex align-items-center'>
                       <p className='m-0'>Increase - 20%</p> <BsArrow90DegUp className='text-success'/>
                      </span>
                    </div>
                  </div>
                  <div className='card_subtitle'>No Incidents in previous time period</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 ">
              <div className="card diagnose_card card_5 mb-3">
                <Link to="/app/accounts" className='cross_arrow'>
                  <GoArrowUpRight />
                </Link>

                <div className='card_detail'>
                  <div className='card_title d-flex align-items-center'>

                    <span className='diagnose_arrow-1'> <MdShelves /></span>
                    Sustainability</div>
                  <div className='card_value d-flex align-items-center justify-content-between'>
                    <span>200KG CO<sub>2</sub></span>
                    <div className=''>
                    <span className='m-0 arrow_col d-flex align-items-center'>
                       <p className='m-0'>Decrease - 20%</p> <BsArrow90DegDown className='text-danger'/>
                      </span>
                    </div>
                  </div>
                  <div className='card_subtitle'>No Incidents in previous time period</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h2 className='text-start title_head mb-3'>High Impact Events(External)</h2>
            </div>


            <div className="col-12 col-sm-4">
              <div className="card events_card mb-3 px-3 py-3">

                <div className='events_card-top d-flex justify-content-between align-items-center mb-3'>
                  <div className="event_value">7%</div>
                  <div className="event_day d-flex flex-column align-items-center">
                    <span className='event_day-val d-flex align-items-center gap-1'><FaCircle /> 2 days to go</span>
                    <span className='event_status-icon'><PiStorefrontLight /> </span>
                  </div>
                </div>
                <div className="event_card-content">
                  <p>Heavy rain and flood in South India is expected to impact the Inbound supply</p>
                </div>
                <div className="event_cost d-flex flex-column align-items-start">
                  <span className='event_cost-title'>Potential Cost Overrun</span>
                  <span className='event_cost-val'><BsArrowDownCircleFill /> ₹ 100k</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="card events_card mb-3 px-3 py-3">

                <div className='events_card-top d-flex justify-content-between align-items-center mb-3'>
                  <div className="event_value">12%</div>
                  <div className="event_day d-flex flex-column align-items-center">
                    <span className='event_day-val d-flex align-items-center gap-1'><FaCircle /> 2 days to go</span>
                    <span className='event_status-icon'><PiStorefrontLight /> </span>
                  </div>
                </div>
                <div className="event_card-content">
                  <p>A Nationwide courier strike is announced by the Transportation Union</p>
                </div>
                <div className="event_cost d-flex flex-column align-items-start">
                  <span className='event_cost-title'>Potential Cost Overrun</span>
                  <span className='event_cost-val'><BsArrowDownCircleFill /> ₹ 100k</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="card events_card mb-3 px-3 py-3">

                <div className='events_card-top d-flex justify-content-between align-items-center mb-3'>
                  <div className="event_value">7%</div>
                  <div className="event_day d-flex flex-column align-items-center">
                    <span className='event_day-val d-flex align-items-center gap-1'><FaCircle /> 2 days to go</span>
                    <span className='event_status-icon'><PiStorefrontLight /> </span>
                  </div>
                </div>
                <div className="event_card-content">
                  <p>Heavy rain and flood in South India is expected to impact the Inbound supply</p>
                </div>
                <div className="event_cost d-flex flex-column align-items-start">
                  <span className='event_cost-title'>Potential Cost Overrun</span>
                  <span className='event_cost-val'><BsArrowDownCircleFill /> ₹ 100k</span>
                </div>
              </div>
            </div>




          </div>

        </div>

        <div className="col-12 col-sm-3">
          <div className="card mb-3 activity_track-card">
            <div className="card_header">
              <h3><AiFillThunderbolt /> Activity Track</h3>
            </div>
            <div className="card_body px-4 py-3">

              <ul className='m-0 p-0 activity_list'>
                <li className='mb-3'>
                  <div className='activity_content d-flex align-items-start gap-2'>
                    <div className='activity_icon'>
                      <TbRosetteDiscountCheckFilled />
                    </div>
                    <p className='m-0'>
                      <span className='activity_description'>Action taken on Deviation #40002 Order number #12312 picked after 30 minutes
                      </span> 
                      <span className='activity_id d-block'>Order number: #12312</span>
                    </p>
                    
                  </div>
                  <div className='activity_view d-flex align-items-center gap-1'>
                    View <HiArrowUpRight />
                  </div>
                </li>
                <li className='mb-3'>
                  <div className='activity_content d-flex align-items-start gap-2'>
                    <div className='activity_icon'>
                      <TbRosetteDiscountCheckFilled />
                    </div>
                    <p className='m-0'>
                      <span className='activity_description'>Deviation reported and alarm triggered for Order number #12231 picked but not loaded</span>
                      <span className='activity_id d-block'>Order number: #12231</span>
                    </p>
                  </div>
                  <div className='activity_view d-flex align-items-center gap-1'>
                    View <HiArrowUpRight />
                  </div>
                </li>
                <li className='mb-3'>
                  <div className='activity_content d-flex align-items-start gap-2'>
                    <div className='activity_icon'>
                      <TbRosetteDiscountCheckFilled />
                    </div>
                    <p className='m-0'>
                      <span className='activity_description'>Action taken on Deviation #30001 to decrease employee cost by $5</span>
                      <span className='activity_id d-block'>Order number: #12231</span>
                    </p>
                  </div>
                  <div className='activity_view d-flex align-items-center gap-1'>
                    View <HiArrowUpRight />
                  </div>
                </li>
                <li className='mb-3'>
                  <div className='activity_content d-flex align-items-start gap-2'>
                    <div className='activity_icon'>
                      <TbRosetteDiscountCheckFilled />
                    </div>
                    <p className='m-0'>
                      <span className='activity_description'>Action taken on Deviation #20012 packaging material ordered with PO Number #12121</span>
                      <span className='activity_id d-block'>Order number: #12231</span>
                    </p>
                  </div>
                  <div className='activity_view d-flex align-items-center gap-1'>
                    View <HiArrowUpRight />
                  </div>
                </li>
              </ul>


            </div>
          </div>
        </div>






      </div>


    </div>
  )
}

export default Dashboard