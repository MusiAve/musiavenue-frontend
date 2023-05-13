import React from 'react';
import { MuiBox, MuiTypography, MuiGrid } from 'components';
import MuiButton from 'components/Buttons';
import MuiInputField from 'components/Input';
import MuiListField from 'components/ListField';
import { DEMO_LIST } from 'constant';

function EditProductView() {

    return (
        <MuiBox className='addEditPageMainWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={2}>
                <MuiTypography variant='h6' color='primary.dark'>Edit Product</MuiTypography>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiGrid container spacing={2}>
                    <MuiGrid item xs={12} mb={1}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Product Name</MuiBox>
                            <MuiInputField name='productName' placeholder='Product Name' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Price</MuiBox>
                            <MuiInputField name='price' placeholder='Price' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Category</MuiBox>
                            <MuiListField name='category' placeholder='Category' displayEmpty items={DEMO_LIST} />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <MuiButton variant='contained' className='primaryBtnWrap'>Submit</MuiButton>
                    </MuiGrid>
                </MuiGrid>
            </MuiBox>
        </MuiBox>
    );
}

export default EditProductView;