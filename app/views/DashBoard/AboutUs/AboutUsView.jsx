import { MuiBox, MuiTypography } from 'components'
import AboutUsBannerImg from 'images/aboutUsBanner.png';
import React from 'react'

function AboutUsView() {
    return (
        <MuiBox className='aboutUsMainWrap'>
            <MuiBox>
                <img style={{ width: '100%' }} src={AboutUsBannerImg} />
            </MuiBox>
            <MuiBox className='aboutUsContentWrap'>
                {/*  */}
            </MuiBox>
        </MuiBox>
    )
}

export default AboutUsView