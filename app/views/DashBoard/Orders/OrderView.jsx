import React from 'react';
import { MuiBox, MuiTypography } from 'components';
import DropMenu from 'components/DropMenu';

const orderList = [
    { name: 'Rerum consectetur modi impedit', category: 'Guiter', price: 9875, customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712' },
    { name: 'Impedit rerum consectetur modi', category: 'Flute', price: 1025, customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712' },
    { name: 'Rerum consectetur modi impedit', category: 'Guiter', price: 7000, customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712' },
    { name: 'Impedit rerum consectetur modi', category: 'Flute', price: 8925, customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712' },
    { name: 'Rerum consectetur modi impedit', category: 'Guiter', price: 3651, customer: 'John Kohli', address: 'Kolkata, Teghoria, 711 401', mobile: '9875455712' },
]

function OrderView() {

    return (
        <MuiBox className='tableBtnHeadingLayoutWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <MuiTypography variant='h6' color='primary.dark'>Order List</MuiTypography>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiBox className='commonTableWrap'>
                    <MuiBox component='table'>
                        <MuiBox component='thead'>
                            <MuiBox component='tr'>
                                <MuiBox component='th'>Product Name</MuiBox>
                                <MuiBox component='th'>Price</MuiBox>
                                <MuiBox component='th'>Category</MuiBox>
                                <MuiBox component='th'>Date</MuiBox>
                                <MuiBox component='th'>Customer Name</MuiBox>
                                <MuiBox component='th'>Customer Address</MuiBox>
                                <MuiBox component='th'>Phone No.</MuiBox>
                                <MuiBox component='th'>Action</MuiBox>
                            </MuiBox>
                        </MuiBox>

                        <MuiBox component='tbody'>
                            {orderList.map((item, index) => (
                                <MuiBox component='tr' key={index}>
                                    <MuiBox component='td'>{item.name}</MuiBox>
                                    <MuiBox component='td'>{item.price}</MuiBox>
                                    <MuiBox component='td'>{item.category}</MuiBox>
                                    <MuiBox component='td'>31.05.2023</MuiBox>
                                    <MuiBox component='td'>{item.customer}</MuiBox>
                                    <MuiBox component='td'>{item.address}</MuiBox>
                                    <MuiBox component='td'>{item.mobile}</MuiBox>
                                    <MuiBox component='td'><DropMenu /></MuiBox>
                                </MuiBox>
                            ))}
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </MuiBox>
        </MuiBox>
    );
}


export default OrderView;