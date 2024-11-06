import React, { useState } from 'react'
import { Table, Tag, Space, Input } from 'antd';
import "./accounts.css";
import { AiFillAlert } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";

const { Search } = Input;
function Accounts() {
    const columns = [
        {
            title: 'S.no',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Order Number',
            dataIndex: 'OrderNumber',
            key: 'OrderNumber',
            render: (text) => <a href='#' className='account_holder-name'>{text}</a>,
        },
        {
            title: 'Customer Name',
            dataIndex: 'CustomerName',
            key: 'CustomerName',
        },
        {
            title: 'Order Type',
            dataIndex: 'OrderType',
            key: 'OrderType',
        },
        {
            title: 'Order Creation Time',
            key: 'OrderCreationTime',
            dataIndex: 'OrderCreationTime',
        },
        {
            title: 'Order Status',
            key: 'OrderStatus',
            dataIndex: 'OrderStatus',
        },
        {
            title: 'Time Delay',
            key: 'TimeDelay',
            dataIndex: 'TimeDelay',
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
            OrderNumber: '001',
            CustomerName: "Stark Industries",
            OrderType: 'Customer Order',
            OrderCreationTime: "7/5/2024 11:12:00",
            OrderStatus: "Not Picked",
            TimeDelay: "10 minutes",
            Alarm: <AiFillAlert className='text-danger'/>,
        },
        {
            key: '1',
            sno: '2',
            OrderNumber: '001',
            CustomerName: "Stark Industries",
            OrderType: 'Customer Order',
            OrderCreationTime: "7/5/2024 11:12:00",
            OrderStatus: "Not Picked",
            TimeDelay: "10 minutes",
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
                    <AiFillCarryOut />  Operations
                </div>
                <div className="col-12">
                    <div className='search_field d-flex align-items-center justify-content-between'>

                    
                    <Search
                        placeholder="Search..."
                        onSearch={handleSearch}
                        onChange={(e) => handleSearch(e.target.value)}
                        className='table_search my-3'
                    />

               
                    </div>
                </div>
            </div>
            <div className="col-12">
                <Table className="custom-table" columns={columns} dataSource={data} />
            </div>


        </div>
    )
}

export default Accounts