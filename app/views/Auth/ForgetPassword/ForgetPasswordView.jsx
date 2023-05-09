import React from 'react';
import { Link } from 'react-router-dom';
import { MuiBox, MuiGrid, MuiLink, MuiTypography } from 'components';
import MuiInputField from 'components/Input';
import MuiPassowrdField from 'components/PasswordInput';
import MuiButton from 'components/Buttons';

function ForgetPasswordView() {
    return (
        <MuiBox className='authPageMainWrap'>
            <MuiBox className='authPageCntntWrap'>
                <MuiGrid container spacing={2}>
                    <MuiGrid item xs={12} style={{ paddingTop: 0 }}>
                        <MuiTypography variant='h5' className='formTitle' align='center'>Reset Your Password</MuiTypography>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Email Id</MuiBox>
                            <MuiInputField name='email' placeholder='Email Id' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Password</MuiBox>
                            <MuiPassowrdField name='password' placeholder='Password' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Confirm Password</MuiBox>
                            <MuiPassowrdField name='confirmpPassword' placeholder='Confirm Password' />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12} mb={1}>
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

export default ForgetPasswordView