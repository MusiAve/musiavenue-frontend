import { MuiBox } from 'components';
import { Map } from 'helpers';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'

function MuiImageSlider(props) {
    const { height = '100%', width = '100%', images } = props;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    };

    setTimeout(() => {
        nextSlide();
    }, 3000);

    const slideStyle = {
        opacity: 0,
        transitionDuration: '1s ease',
    }

    const slideActive = {
        opacity: 1,
        transitionDuration: '1s',
        transform: 'scale(1.08)',
    }

    console.log('currentSlide', currentSlide);

    return (
        <MuiBox
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height
            }}
        >
            {
                images.length > 0 && Map(images, (image, imgIndex) => (
                    <img
                        style={{ height, width }}
                        key={imgIndex}
                        src={image}
                    />
                ))
            }
        </MuiBox>
    )
}

MuiImageSlider.propTypes = {
    classes: PropTypes.any,
    width: PropTypes.oneOfType([
        PropTypes.oneOf([PropTypes.number, PropTypes.string])
    ]),
    height: PropTypes.oneOfType([
        PropTypes.oneOf([PropTypes.number, PropTypes.string])
    ]),
    images: PropTypes.array.isRequired
};

export default MuiImageSlider