import React from 'react';
import { MuiBox, MuiTypography } from 'components';
import DropMenu from 'components/DropMenu';
import { AccountCircleIcon, ChecklistIcon, DeleteIcon } from 'helpers/Icons';

const customerList = [
    { customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712', totalOrder: 99 },
    { customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712', totalOrder: 17 },
    { customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712', totalOrder: 32 },
    { customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712', totalOrder: 32 },
    { customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712', totalOrder: 95 },
]

const ActionList = [
    { label: 'Profile', icon: <AccountCircleIcon />, link: '/admin/customer-profile' },
    { label: 'Orders', icon: <ChecklistIcon />, link: '/admin/orders' },
    { label: 'Delete', icon: <DeleteIcon /> },
]

function CustomerView() {

    return (
        <MuiBox className='tableBtnHeadingLayoutWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <MuiTypography variant='h6' color='primary.dark'>Customers List</MuiTypography>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiBox className='commonTableWrap'>
                    <MuiBox component='table'>
                        <MuiBox component='thead'>
                            <MuiBox component='tr'>
                                <MuiBox component='th'>Customer Name</MuiBox>
                                <MuiBox component='th'>Address</MuiBox>
                                <MuiBox component='th'>Phone No.</MuiBox>
                                <MuiBox component='th'>Total Order</MuiBox>
                                <MuiBox component='th'>Action</MuiBox>
                            </MuiBox>
                        </MuiBox>

                        <MuiBox component='tbody'>
                            {customerList.map((item, index) => (
                                <MuiBox component='tr' key={index}>
                                    <MuiBox component='td'>{item.customer}</MuiBox>
                                    <MuiBox component='td'>{item.address}</MuiBox>
                                    <MuiBox component='td'>{item.mobile}</MuiBox>
                                    <MuiBox component='td'>{item.totalOrder}</MuiBox>
                                    <MuiBox component='td'><DropMenu listItems={ActionList} /></MuiBox>
                                </MuiBox>
                            ))}
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </MuiBox>
        </MuiBox>
    );
}


export default CustomerView;