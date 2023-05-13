import React from 'react';
import { MuiBox, MuiTypography } from 'components';
import MuiButton from 'components/Buttons';
import DropMenu from 'components/DropMenu';
import { useHistory } from 'react-router-dom';

const categoryList = [
    { name: 'Guiter Category', edit: '/admin/edit-category' },
    { name: 'Flute', edit: '/admin/edit-category' },
    { name: 'Category one', edit: '/admin/edit-category' },
    { name: 'Flute Category', edit: '/admin/edit-category' },
    { name: 'Guiter Category Category', edit: '/admin/edit-category' },
]

function CategoryView() {

    const history = useHistory();

    return (
        <MuiBox className='tableBtnHeadingLayoutWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <MuiTypography variant='h6' color='primary.dark'>Category List</MuiTypography>
                <MuiButton variant='contained' className='primaryBtnWrap'
                    onClick={() => history.push('/admin/add-category')}
                >Add Category</MuiButton>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiBox className='commonTableWrap'>
                    <MuiBox component='table'>
                        <MuiBox component='thead'>
                            <MuiBox component='tr'>
                                <MuiBox component='th'>Name</MuiBox>
                                <MuiBox component='th' style={{ textAlign: 'right' }}>Action</MuiBox>
                            </MuiBox>
                        </MuiBox>

                        <MuiBox component='tbody'>
                            {categoryList.map((item, index) => (
                                <MuiBox component='tr' key={index}>
                                    <MuiBox component='td'>{item.name}</MuiBox>
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

export default CategoryView;