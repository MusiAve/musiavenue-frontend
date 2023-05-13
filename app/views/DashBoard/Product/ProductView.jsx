import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from 'global-styles';
import { MuiBox, MuiTypography } from 'components';
import MuiButton from 'components/Buttons';
import DropMenu from 'components/DropMenu';

function ProductView() {

    return (
        <MuiBox className='tableBtnHeadingLayoutWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <MuiTypography variant='h6' color='primary.dark'>Product List</MuiTypography>
                <MuiButton variant='contained' className='primaryBtnWrap'>Add Product</MuiButton>
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
                            <MuiBox component='tr'>
                                <MuiBox component='td'>Rerum consectetur modi impedit</MuiBox>
                                <MuiBox component='td'>Guiter</MuiBox>
                                <MuiBox component='td'>267</MuiBox>
                                <MuiBox component='td'><DropMenu /></MuiBox>
                            </MuiBox>
                            <MuiBox component='tr'>
                                <MuiBox component='td'>Rerum consectetur modi impedit</MuiBox>
                                <MuiBox component='td'>Flute</MuiBox>
                                <MuiBox component='td'>267</MuiBox>
                                <MuiBox component='td'><DropMenu /></MuiBox>
                            </MuiBox>
                            <MuiBox component='tr'>
                                <MuiBox component='td'>Rerum consectetur modi impedit</MuiBox>
                                <MuiBox component='td'>Guiter</MuiBox>
                                <MuiBox component='td'>267</MuiBox>
                                <MuiBox component='td'><DropMenu /></MuiBox>
                            </MuiBox>
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </MuiBox>
        </MuiBox>
    );
}

export default ProductView;