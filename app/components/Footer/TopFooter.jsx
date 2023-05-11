import React from 'react';
import { MuiBox, MuiGrid, MuiLink, MuiTypography } from 'components';
import { Link } from 'react-router-dom';
import { LocationOnOutlinedIcon, MailOutlinedIcon, PhoneOutlinedIcon } from 'helpers/Icons';
import Logo from 'images/logoWhite.png';
import Facebook from 'images/facebook.png';
import Twitter from 'images/twitter.png';
import Linkedin from 'images/linkedin.png';
import Youtube from 'images/youtube.png';

function TopFooter() {
    return (
        <MuiBox className='topFooterMainWrap'>
            <MuiGrid container spacing={2}>
                <MuiGrid item md={4} xs={12}>
                    <MuiBox className='topHeaderLogoSection'>
                        <MuiBox className='footerLogoWrap'>
                            <img src={Logo} />
                        </MuiBox>
                        <MuiTypography variant='caption' component='p' className='text-14'>Musicians Avenuel Established in 1996, has evolved to cater for all aspects of the music industry ranging from PA Systems, Studio Products and DJ Gear to Guitars, Keyboards, Amplifiers, Drums and Percussion. Musi cians Avenue remains a family owned store and contin- ues to provide good old fashioned customer service.</MuiTypography>

                        <MuiTypography variant='h6'>
                            We also do repairs and maintenance on all musical instruments.
                        </MuiTypography>
                    </MuiBox>
                </MuiGrid>

                <MuiGrid item md={2} sm={6} xs={12}>
                    <MuiBox className='footerMenuList'>
                        <MuiTypography variant='h5'>Shop Now</MuiTypography>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Guitar/Bass</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Keyboards/Pianos</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Amps/Effects</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Live Sound</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Recording Studio</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Dj/Lighting</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Drums/Percussion</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Orchestral</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Accessories</MuiLink>
                        <MuiLink component={Link} to='#' className='ftrMenuTxt'>Shop By Brand</MuiLink>
                    </MuiBox>
                </MuiGrid>

                <MuiGrid item md={3} sm={6} xs={12}>
                    <MuiBox className='footerMenuList storeHoursList'>
                        <MuiTypography variant='h5'>Store Hours</MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            Monday <MuiBox component='span'>9:30am-5:30pm</MuiBox>
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            Tuesday <MuiBox component='span'>9:30am-5:30pm</MuiBox>
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            Wednesday <MuiBox component='span'>9:30am-5:30pm</MuiBox>
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            Thursday <MuiBox component='span'>9:30am-7:00pm</MuiBox>
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            Friday <MuiBox component='span'>9:30am-5:30pm</MuiBox>
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            Saturday <MuiBox component='span'>9:30am-4:00pm</MuiBox>
                        </MuiTypography>
                    </MuiBox>
                </MuiGrid>
                <MuiGrid item md={3} xs={12}>
                    <MuiBox className='footerMenuList contactList'>
                        <MuiTypography variant='h5'>Contact Us</MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            <LocationOnOutlinedIcon /> 63 Ware St, Fairfield NSW 2165
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt phone'>
                            <PhoneOutlinedIcon /> (02) 9755 9999
                        </MuiTypography>
                        <MuiTypography className='ftrMenuTxt'>
                            <MailOutlinedIcon /> musiciansavenue@bigpond.com
                        </MuiTypography>

                        <MuiBox display='flex' alignItems='center' className='socialListWrap'>
                            <MuiLink component={Link} to='#'>
                                <img src={Facebook} />
                            </MuiLink>
                            <MuiLink component={Link} to='#'>
                                <img src={Twitter} />
                            </MuiLink>
                            <MuiLink component={Link} to='#'>
                                <img src={Linkedin} />
                            </MuiLink>
                            <MuiLink component={Link} to='#'>
                                <img src={Youtube} />
                            </MuiLink>
                        </MuiBox>
                    </MuiBox>
                </MuiGrid>
            </MuiGrid>
        </MuiBox>
    )
}

export default TopFooter