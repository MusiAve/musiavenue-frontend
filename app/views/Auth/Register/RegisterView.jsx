import React from 'react';
import { Link } from 'react-router-dom';
import { MuiBox, MuiGrid, MuiLink, MuiTypography } from 'components';
import MuiInputField from 'components/Input';
import MuiPassowrdField from 'components/PasswordInput';
import MuiButton from 'components/Buttons';
import MuiListField from 'components/ListField';
import MuiCheckBox from 'components/CheckBox';
import { COUNTRY } from 'constant';

function RegisterView() {
    return (
        <MuiBox className='authPageMainWrap registerPageMainWrap'>
            <MuiBox className='authPageCntntWrap'>
                <MuiGrid container spacing={2}>
                    <MuiGrid item xs={12} style={{ paddingTop: 0 }}>
                        <MuiTypography variant='h5' className='formTitle' align='center'>Create a new account</MuiTypography>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>First Name</MuiBox>
                            <MuiInputField name='firstName' placeholder='First Name' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Last Name</MuiBox>
                            <MuiInputField name='lastName' placeholder='Last Name' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={12} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Email Id</MuiBox>
                            <MuiInputField name='email' placeholder='Email Id' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Telephone</MuiBox>
                            <MuiInputField name='telephone' placeholder='Telephone' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Fax</MuiBox>
                            <MuiInputField name='fax' placeholder='Fax' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Company</MuiBox>
                            <MuiInputField name='company' placeholder='Company' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Company Id</MuiBox>
                            <MuiInputField name='companyId' placeholder='Company Id' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Address</MuiBox>
                            <MuiInputField name='address' placeholder='Address' multiline rows={3} />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>City</MuiBox>
                            <MuiInputField name='city' placeholder='City' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Post Code</MuiBox>
                            <MuiInputField name='postCode' placeholder='Post Code' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Country</MuiBox>
                            <MuiListField name='city' placeholder='City' displayEmpty items={COUNTRY} />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Region/State</MuiBox>
                            <MuiListField name='regionState' placeholder='Region/State' displayEmpty items={COUNTRY} />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Password</MuiBox>
                            <MuiPassowrdField name='password' placeholder='Password' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={4} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Confirm Password</MuiBox>
                            <MuiPassowrdField name='confirmPassword' placeholder='Confirm Password' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mt={1}>
                        <MuiBox display='flex'>
                            <MuiCheckBox />
                            <MuiTypography className='formTextLinkWrap smallGreyTxt'>
                                I have read and agree to the <MuiLink to='/' component={Link}>Privacy Policy</MuiLink>
                            </MuiTypography>
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1} mt={1}>
                        <MuiButton className='primaryBtnWrap' fullWidth>SUBMIT</MuiButton>
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <MuiTypography className='formTextLinkWrap' align='center'>
                            Already have an account? <MuiLink to='/login' component={Link}>Log in</MuiLink>
                        </MuiTypography>
                    </MuiGrid>
                </MuiGrid>
            </MuiBox>
        </MuiBox>
    )
}

export default RegisterView