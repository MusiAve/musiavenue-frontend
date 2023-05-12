import React from 'react';
import { MuiBox, MuiLink, MuiGrid, MuiTypography } from 'components';
import { Link } from 'react-router-dom';
import MuiInputField from 'components/Input';
import MuiButton from 'components/Buttons';
import PaymentOptions from 'images/paymentOptions.png';

function BottomFooter() {
    return (
        <MuiBox className='bottomFooterMainWrap'>
            <MuiBox className='bottomFooterTopWrap'>
                <MuiGrid container spacing={2}>
                    <MuiGrid item lg={2} md={4} sm={6} xs={12}>
                        <MuiBox className='footerMenuList'>
                            <MuiTypography variant='h5'>Information</MuiTypography>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Zip-Own it now,pay later</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>About Us</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Delivery Information</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Privacy Policy</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Terms & Conditions</MuiLink>
                        </MuiBox>
                    </MuiGrid>

                    <MuiGrid item lg={2} md={4} sm={6} xs={12}>
                        <MuiBox className='footerMenuList'>
                            <MuiTypography variant='h5'>Customer Services</MuiTypography>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Contact Us</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Returns</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Site Map</MuiLink>
                        </MuiBox>
                    </MuiGrid>

                    <MuiGrid item lg={2} md={4} sm={6} xs={12}>
                        <MuiBox className='footerMenuList'>
                            <MuiTypography variant='h5'>Extras</MuiTypography>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Brands</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Gift Vouchers</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Affiliates</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Specials</MuiLink>
                        </MuiBox>
                    </MuiGrid>

                    <MuiGrid item lg={2} md={4} sm={6} xs={12}>
                        <MuiBox className='footerMenuList'>
                            <MuiTypography variant='h5'>My Account</MuiTypography>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>My Account</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Order History</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Wish List</MuiLink>
                            <MuiLink component={Link} to='#' className='ftrMenuTxt'>Newsletter</MuiLink>
                        </MuiBox>
                    </MuiGrid>

                    <MuiGrid item lg={4} md={4} sm={6} xs={12}>
                        <MuiBox className='footerMenuList footerNewsletterMain'>
                            <MuiTypography variant='h5'>Sign up to our monthly newsletter</MuiTypography>

                            <MuiBox className='fieldMainWrap'>
                                <MuiInputField name='email' placeholder='Enter Your Email ID here...' />
                            </MuiBox>
                            <MuiButton className='primaryBtnWrap' fullWidth>SUBSCRIBE</MuiButton>
                        </MuiBox>
                    </MuiGrid>
                </MuiGrid>
            </MuiBox>

            <MuiBox className='copyrightSectionWrap'>
                <MuiTypography className='ftrMenuTxt'>
                    Musicians Avenue @ 2023. All Rights Reserved.
                </MuiTypography>
                <img src={PaymentOptions} />
            </MuiBox>
        </MuiBox>
    )
}

export default BottomFooter