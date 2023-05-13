import React from 'react';
import { MuiBox, MuiTypography } from 'components';
import MuiButton from 'components/Buttons';
import DropMenu from 'components/DropMenu';
import { useHistory } from 'react-router-dom';

const categoryList = [
    { name: 'Guiter Category', category: 'Category 1', edit: '/admin/edit-subcategory' },
    { name: 'Flute', category: 'Category 2', edit: '/admin/edit-subcategory' },
    { name: 'Category one', category: 'Category 1', edit: '/admin/edit-subcategory' },
    { name: 'Flute Category', category: 'Category 3', edit: '/admin/edit-subcategory' },
    { name: 'Guiter Category Category', category: 'Category 9', edit: '/admin/edit-subcategory' },
]

function SubCategoryView() {

    const history = useHistory();

    return (
        <MuiBox className='tableBtnHeadingLayoutWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <MuiTypography variant='h6' color='primary.dark'>Sub Category List</MuiTypography>
                <MuiButton variant='contained' className='primaryBtnWrap'
                    onClick={() => history.push('/admin/add-subcategory')}
                >Add Sub Category</MuiButton>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiBox className='commonTableWrap'>
                    <MuiBox component='table'>
                        <MuiBox component='thead'>
                            <MuiBox component='tr'>
                                <MuiBox component='th'>Name</MuiBox>
                                <MuiBox component='th'>Category</MuiBox>
                                <MuiBox component='th' style={{ textAlign: 'right' }}>Action</MuiBox>
                            </MuiBox>
                        </MuiBox>

                        <MuiBox component='tbody'>
                            {categoryList.map((item, index) => (
                                <MuiBox component='tr' key={index}>
                                    <MuiBox component='td'>{item.name}</MuiBox>
                                    <MuiBox component='td'>{item.category}</MuiBox>
                                    <MuiBox component='td' style={{ textAlign: 'right' }}><DropMenu editLink={`${item.edit}`} /></MuiBox>
                                </MuiBox>
                            ))}
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </MuiBox>
        </MuiBox >
    );
}

export default SubCategoryView;