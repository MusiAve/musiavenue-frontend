import React from 'react'
import { MuiBox, MuiGrid, MuiTypography } from 'components';
import MuiImageSlider from 'components/ImageSlider';
import { CARD_DATA, PRICING_METHODS_CARD, SLIDER_IMAGES } from 'constant';
import { Map } from 'helpers';

function HomeView(props) {

    const sliderImages = SLIDER_IMAGES;

    return (
        <MuiBox className='homeViewMainWrap'>
            <MuiBox className="sliderMainWrap">
                <MuiImageSlider images={sliderImages} />
            </MuiBox>
            <MuiGrid container className="userCardSectionWrap">
                {CARD_DATA && Map(CARD_DATA, (card, cardIndex) => (
                    <MuiGrid
                        item key={cardIndex}
                        sx={{
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: 'cover',
                            backgroundColor: '#a6a6a6',
                            backgroundBlendMode: 'multiply',
                            backgroundPosition: 'center'
                        }}
                    >
                        <MuiTypography
                            mb={3} fontSize='26px !important'
                            color='#fff' component='span'
                            fontWeight={400}
                        >
                            {card.label}
                        </MuiTypography>
                    </MuiGrid>
                ))}
            </MuiGrid>
            <MuiGrid container className='paymentOptionsWrap'>
                {PRICING_METHODS_CARD && Map(PRICING_METHODS_CARD, (cardMeth, cardMethIndex) => (
                    <MuiGrid item xs={3.8} key={cardMethIndex} sx={{ background: cardMeth.background, }}>
                        <img src={cardMeth.image} style={{ height: 140 }} />
                        <MuiBox>
                            <MuiTypography>{cardMeth.headingText}</MuiTypography>
                            <MuiTypography>{cardMeth.subText}</MuiTypography>
                        </MuiBox>
                    </MuiGrid>
                ))}
            </MuiGrid>
        </MuiBox>
    )
}

export default HomeView;