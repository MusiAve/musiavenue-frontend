import React from 'react'
import { MuiBox } from 'components';
import MuiImageSlider from 'components/ImageSlider';
import images from 'api/images/photos';

function HomeView(props) {

    const sliderImages = images.splice(0, 10);

    return (
        <MuiBox className='homeViewMainWrap'>
            <MuiBox className="sliderMainWrap">
                <MuiImageSlider images={sliderImages} />
            </MuiBox>
        </MuiBox>
    )
}

export default HomeView;