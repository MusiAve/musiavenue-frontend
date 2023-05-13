import React from 'react';
import { MuiBox, MuiTypography, MuiGrid } from 'components';
import MuiButton from 'components/Buttons';
import MuiInputField from 'components/Input';
import MuiListField from 'components/ListField';
import MuiPassowrdField from 'components/PasswordInput';
import { DEMO_LIST } from 'constant';
import ProfileAvatar from 'components/ProfileAvatar';

function CustomerProfileView() {

    return (
        <MuiBox className='addEditPageMainWrap'>
            <MuiBox display='flex' alignItems='center' justifyContent='space-between' mb={2}>
                <MuiTypography variant='h6' color='primary.dark'>Customer Profile</MuiTypography>
            </MuiBox>
            <MuiBox className='whiteBoxWrap'>
                <MuiGrid container spacing={2}>
                    <MuiGrid item xs={12} sx={{
                        '& .profileAvatarWrap': {
                            margin: '0 auto 25px auto',
                        }
                    }}>
                        <ProfileAvatar disabled={true} />
                    </MuiGrid>
                    <MuiGrid item md={6} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>First Name</MuiBox>
                            <MuiInputField name='firstName' value='Soumen' placeholder='First Name' disabled />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Last Name</MuiBox>
                            <MuiInputField name='lastName' value='Samanta' placeholder='Last Name' disabled />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={12} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Email Id</MuiBox>
                            <MuiInputField name='email' value='customer@gmail.com' placeholder='Email Id' disabled />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} sm={6} xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Mobile</MuiBox>
                            <MuiInputField name='mobile' value='8745252525' placeholder='Mobile' disabled />
                        </MuiBox>
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <MuiBox className='fieldMainWrap'>
                            <MuiBox component='label'>Address</MuiBox>
                            <MuiInputField name='address' value='Kolkata, Teghoria, 711 401' placeholder='Address' multiline rows={4} disabled />
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

export default CustomerProfileView;