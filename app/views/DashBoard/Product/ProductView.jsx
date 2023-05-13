import React from 'react';
import { MuiBox, MuiTypography } from 'components';
import MuiButton from 'components/Buttons';
import DropMenu from 'components/DropMenu';
import { useHistory } from 'react-router-dom';

const productList = [
    { name: 'Rerum consectetur modi impedit', category: 'Guiter', price: 9875, edit: '/admin/edit-product' },
    { name: 'Impedit rerum consectetur modi', category: 'Flute', price: 1025, edit: '/admin/edit-product' },
    { name: 'Rerum consectetur modi impedit', category: 'Guiter', price: 7000, edit: '/admin/edit-product' },
    { name: 'Impedit rerum consectetur modi', category: 'Flute', price: 8925, edit: '/admin/edit-product' },
    { name: 'Rerum consectetur modi impedit', category: 'Guiter', price: 3651, edit: '/admin/edit-product' },
]

function ProductView() {

    const history = useHistory();

    return (
        <MuiBox className='tableBtnHeadingLayoutWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <MuiTypography variant='h6' color='primary.dark'>Product List</MuiTypography>
                <MuiButton variant='contained' className='primaryBtnWrap'
                    onClick={() => history.push('/admin/add-product')}
                >Add Product</MuiButton>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiBox className='commonTableWrap'>
                    <MuiBox component='table'>
                        <MuiBox component='thead'>
                            <MuiBox component='tr'>
                                <MuiBox component='th'>Name</MuiBox>
                                <MuiBox component='th'>Category</MuiBox>
                                <MuiBox component='th'>Price</MuiBox>
                                <MuiBox component='th'>Action</MuiBox>
                            </MuiBox>
                        </MuiBox>

                        <MuiBox component='tbody'>
                            {productList.map((item, index) => (
                                <MuiBox component='tr' key={index}>
                                    <MuiBox component='td'>{item.name}</MuiBox>
                                    <MuiBox component='td'>{item.category}</MuiBox>
                                    <MuiBox component='td'>{item.price}</MuiBox>
                                    <MuiBox component='td'><DropMenu editLink={`${item.edit}`} /></MuiBox>
                                </MuiBox>
                            ))}
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </MuiBox>
        </MuiBox >
    );
}

export default ProductView;