import React, { useState } from 'react'
import { Table, Tag, Space, Input } from 'antd';
import "./list.css";
import { AiFillAlert } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";
import slackicon from "../../assets/images/slack.svg";
import teamicon from "../../assets/images/teams.svg";
import callicon from "../../assets/images/call.svg";
import whatsappicon from "../../assets/images/whatsapp.svg";
const { Search } = Input;

export default function List() {

    const columns = [
        {
            title: 'S.no',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Cost Type',
            dataIndex: 'CostType',
            key: 'CostType',
            render: (text) => <a href='#' className='account_holder-name'>{text}</a>,
        },
        {
            title: 'Cost Component',
            dataIndex: 'CostComponent',
            key: 'CostComponent',
        },
        {
            title: 'Cost Account',
            dataIndex: 'CostAccount',
            key: 'CostAccount',
        },
        {
            title: 'Increase per day',
            key: 'Increase',
            dataIndex: 'Increase',
        },
        {
            title: 'Impact',
            key: 'Impact',
            dataIndex: 'Impact',
        },
       
        {
            title: 'Alarm',
            key: 'Alarm',
            dataIndex: 'Alarm',
        },
    ];

    const initialData = [
        {
            key: '1',
            sno: '1',
            CostType: 'Employee',
            CostComponent: "C2",
            CostAccount: 'Daily Wages',
            Increase: "$25.00",
            Impact: "$750",
            Alarm: <AiFillAlert className='text-danger'/>,
        },
        {
            key: '1',
            sno: '2',
            CostType: 'Packaging cost',
            CostComponent: "C3",
            CostAccount: 'Packaging and Consumables',
            Increase: "$30.00",
            Impact: "$900",
            Alarm: <AiFillAlert className='text-danger'/>,
        },

    ];
    const [data, setData] = useState(initialData);
    const handleSearch = (value) => {
        const filteredData = initialData.filter((item) =>
            Object.keys(item).some((key) =>
                String(item[key]).toLowerCase().includes(value.toLowerCase())
            )
        );
        setData(filteredData);
    };
  return (
    <div className='container-fluid'>
    <div className="row">
        <div className="col-12 py-3 top_header-title d-flex align-items-center gap-1">
            <AiFillCarryOut />  Cost
        </div>
        <div className="col-12">
            <div className='search_field d-flex align-items-center justify-content-between'>

            
            <Search
                placeholder="Search..."
                onSearch={handleSearch}
                onChange={(e) => handleSearch(e.target.value)}
                className='table_search my-3'
            />

            <div className='social_media'>
             <ul className='m-0 p-0'>
                <li><a href="#"><img src={slackicon} alt="slackicon" /> </a> </li>
                <li><a href="#"><img src={teamicon} alt="teamicon" /> </a> </li>
                <li><a href="#"><img src={callicon} alt="callicon" /> </a> </li>
                <li><a href="#"><img src={whatsappicon} alt="whatsappicon" /> </a> </li>
             </ul>
            </div>
            </div>
        </div>
    </div>
    <div className="col-12">
        <Table className="custom-table" columns={columns} dataSource={data} />
    </div>


</div>
  )
}
