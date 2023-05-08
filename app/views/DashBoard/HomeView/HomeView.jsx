import React from 'react'
import { MuiBox, MuiButton, MuiGrid, MuiTypography } from 'components';
import MuiImageSlider from 'components/ImageSlider';
import { CARD_DATA, FEATURED_PRODUCTS, PRICING_METHODS_CARD, SLIDER_IMAGES } from 'constant';
import { Map } from 'helpers';

function HomeView(props) {

    const sliderImages = SLIDER_IMAGES;

    return (
        <MuiBox className='homeViewMainWrap'>
            {/* SLIDER */}
            <MuiBox className="sliderMainWrap">
                <MuiImageSlider images={sliderImages} />
            </MuiBox>
            {/* TYPES OF PRODUCTS */}
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
            {/* PAYMENT METHODS */}
            <MuiGrid container className='paymentOptionsWrap'>
                {PRICING_METHODS_CARD && Map(PRICING_METHODS_CARD, (cardMeth, cardMethIndex) => (
                    <MuiGrid className='pricingMethodCard' item xs={3.8} key={cardMethIndex} sx={{ background: cardMeth.background, }}>
                        <img src={cardMeth.image} style={{ height: 140 }} />
                        <MuiBox className="pricingContentBox">
                            <MuiTypography component='h2'>{cardMeth.headingText}</MuiTypography>
                            <MuiTypography component='span'>{cardMeth.subText}</MuiTypography>
                        </MuiBox>
                    </MuiGrid>
                ))}
            </MuiGrid>
            {/* TOP DEALS */}
            <>Top details</>
            {/* FEATURED PRODUCTS */}
            <MuiBox className="featuredProductMainWrap">
                <MuiBox textAlign='center'>
                    <MuiTypography
                        sx={{ fontSize: '60px !important', padding: '30px', color: 'primary.main' }}
                    >
                        Featured Products
                    </MuiTypography>
                </MuiBox>
                <MuiGrid container justifyContent='space-around'>
                    {FEATURED_PRODUCTS && Map(FEATURED_PRODUCTS, (product, productIndex) => (
                        <MuiGrid key={productIndex} item className='featureSingleProduct'>
                            <MuiBox className="productImageContainer">
                                <img src={product.image} />
                            </MuiBox>
                            <MuiBox className="productContent">
                                <MuiTypography
                                    component='span'
                                    sx={{ color: '#323131', fontWeight: 500 }}
                                >
                                    {product.name}
                                </MuiTypography>
                                <MuiTypography mt={1} component='span' color='primary.main' fontWeight={600}>
                                    ${product.price}
                                </MuiTypography>
                            </MuiBox>
                            <MuiButton variant='outlined'>ADD TO CART</MuiButton>
                        </MuiGrid>
                    ))}
                </MuiGrid>
            </MuiBox>
            {/* BIG PRODUCT BANNER */}
            <></>
            {/* ARTICLES */}
            <></>
            {/* STORE LOCATOR BANNER */}
            <></>
            {/* REVIEWS */}
            <></>
            {/* KEY FEATURES */}
            <></>
        </MuiBox>
    )
}

export default HomeView;