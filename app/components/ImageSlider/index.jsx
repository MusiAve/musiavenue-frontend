import { MuiBox } from 'components';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'

function MuiImageSlider(props) {
    const { height = '650px', width = '100%', images } = props;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        const increaseSlide = setTimeout(() => {
            nextSlide();
        }, 2000);

        return () => clearTimeout(increaseSlide)

    }, [currentSlide])


    return (
        <MuiBox
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height,
                backgroundImage: `url(${images[currentSlide]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: '400ms ease-in-out',
            }}
        />
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