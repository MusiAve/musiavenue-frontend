import React, { Fragment } from 'react'
import { MuiBox, MuiGrid, MuiTypography } from 'components';
import MuiImageSlider from 'components/ImageSlider';
import { CARD_DATA, FEATURED_PRODUCTS, PRICING_METHODS_CARD, SLIDER_IMAGES, TOP_DEALS, ARTICLE_RESOURCES, REVIEWS, KEY_FEATURES } from 'constant';
import { Map } from 'helpers';
import MenFluteImg from '../../../images/menFlute.jpg';
import GuiterBoxBg from '../../../images/guiterBoxBg.jpg';
import InstrumentsShopBg from '../../../images/instrumentsShop.jpg';
import MuiButton from 'components/Buttons';

function HomeView(props) {

    const sliderImages = SLIDER_IMAGES;

    return (
        <MuiBox className='homeViewMainWrap'>
            {/* SLIDER */}
            <MuiBox className="sliderMainWrap">
                <MuiImageSlider images={sliderImages} />
            </MuiBox>

            {/* TYPES OF PRODUCTS */}
            <MuiGrid container spacing={2} className="userCardSectionWrap p20">
                {CARD_DATA && Map(CARD_DATA, (card, cardIndex) => (
                    <MuiGrid item sm={3} xs={6} key={cardIndex}>
                        <MuiBox className="userCardBoxesWrap"
                            sx={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundColor: '#a6a6a6',
                                backgroundBlendMode: 'multiply',
                                backgroundPosition: 'center'
                            }}
                        >
                            <MuiTypography>
                                {card.label}
                            </MuiTypography>
                        </MuiBox>
                    </MuiGrid>
                ))}
            </MuiGrid>

            {/* PAYMENT METHODS */}
            <MuiGrid container spacing={2} className='paymentOptionsWrap p20'>
                {PRICING_METHODS_CARD && Map(PRICING_METHODS_CARD, (cardMeth, cardMethIndex) => (
                    <MuiGrid item sm={4} xs={12} key={cardMethIndex}>
                        <MuiBox className='pricingMethodCard'
                            sx={{ backgroundColor: cardMeth.background }}
                        >
                            <img src={cardMeth.image} />
                            <MuiBox className='pricingOptionCntnt'>
                                <MuiTypography component='h2'>{cardMeth.headingText}</MuiTypography>
                                <MuiTypography>{cardMeth.subText}</MuiTypography>
                            </MuiBox>
                        </MuiBox>
                    </MuiGrid>
                ))}
            </MuiGrid>

            {/* TOP DEALS */}
            <MuiBox className="topDealsMainWrap sectionGap">
                <MuiTypography className='commonBigSctnHdng' align='center'>
                    Top deals & new arrivals
                </MuiTypography>

                <MuiGrid container spacing={3} className='topDealsCntntMainWrap p20'>
                    <MuiGrid item md={6} xs={12} className='topDealsLeftSide'>
                        <MuiGrid container spacing={3}>
                            {TOP_DEALS && Map(TOP_DEALS, (product, productIndex) => (
                                <MuiGrid item sm={6} xs={12} key={productIndex}>
                                    <MuiBox className="productListBoxesWrap">
                                        <MuiBox className="productImageContainer">
                                            <img src={product.image} />
                                        </MuiBox>
                                        <MuiBox className="productBoxContent">
                                            <MuiTypography variant='h4'>
                                                {product.name}
                                            </MuiTypography>
                                            <MuiTypography>
                                                ${product.price}
                                            </MuiTypography>
                                        </MuiBox>
                                    </MuiBox>
                                </MuiGrid>
                            ))}
                        </MuiGrid>
                    </MuiGrid>
                    <MuiGrid item md={6} xs={12} className='topDealsRightSide'>
                        <MuiBox className='topDealsRightSideBgImg' sx={{
                            background: `url(${MenFluteImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}></MuiBox>
                    </MuiGrid>

                    <MuiGrid item md={6} xs={12} className='topDealsRightSide'>
                        <MuiBox className='topDealsRightSideBgImg' sx={{
                            background: `url(${MenFluteImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}></MuiBox>
                    </MuiGrid>
                    <MuiGrid item md={6} xs={12} className='topDealsLeftSide'>
                        <MuiGrid container spacing={3}>
                            {TOP_DEALS && Map(TOP_DEALS, (product, productIndex) => (
                                <MuiGrid item sm={6} xs={12} key={productIndex}>
                                    <MuiBox className="productListBoxesWrap">
                                        <MuiBox className="productImageContainer">
                                            <img src={product.image} />
                                        </MuiBox>
                                        <MuiBox className="productBoxContent">
                                            <MuiTypography variant='h4'>
                                                {product.name}
                                            </MuiTypography>
                                            <MuiTypography>
                                                ${product.price}
                                            </MuiTypography>
                                        </MuiBox>
                                    </MuiBox>
                                </MuiGrid>
                            ))}
                        </MuiGrid>
                    </MuiGrid>

                    <MuiGrid item md={6} xs={12} className='topDealsLeftSide'>
                        <MuiGrid container spacing={3}>
                            {TOP_DEALS && Map(TOP_DEALS, (product, productIndex) => (
                                <MuiGrid item sm={6} xs={12} key={productIndex}>
                                    <MuiBox className="productListBoxesWrap">
                                        <MuiBox className="productImageContainer">
                                            <img src={product.image} />
                                        </MuiBox>
                                        <MuiBox className="productBoxContent">
                                            <MuiTypography variant='h4'>
                                                {product.name}
                                            </MuiTypography>
                                            <MuiTypography>
                                                ${product.price}
                                            </MuiTypography>
                                        </MuiBox>
                                    </MuiBox>
                                </MuiGrid>
                            ))}
                        </MuiGrid>
                    </MuiGrid>
                    <MuiGrid item md={6} xs={12} className='topDealsRightSide'>
                        <MuiBox className='topDealsRightSideBgImg' sx={{
                            background: `url(${MenFluteImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}></MuiBox>
                    </MuiGrid>
                </MuiGrid>
            </MuiBox>

            {/* FEATURED PRODUCTS */}
            <MuiBox className="featuredProductMainWrap sectionGap">
                <MuiTypography className='commonBigSctnHdng' align='center'>
                    Featured Products
                </MuiTypography>

                <MuiGrid container spacing={2} className='p20'>
                    {FEATURED_PRODUCTS && Map(FEATURED_PRODUCTS, (product, productIndex) => (
                        <MuiGrid item md={3} sm={6} xs={12} key={productIndex}>
                            <MuiBox className="productListBoxesWrap">
                                <MuiBox className="productImageContainer">
                                    <img src={product.image} />
                                </MuiBox>
                                <MuiBox className="productBoxContent">
                                    <MuiTypography variant='h4'>
                                        {product.name}
                                    </MuiTypography>
                                    <MuiTypography>
                                        ${product.price}
                                    </MuiTypography>
                                    <MuiButton variant='outlined' className='outlineBtnWrap'>ADD TO CART</MuiButton>
                                </MuiBox>
                            </MuiBox>
                        </MuiGrid>
                    ))}
                </MuiGrid>
            </MuiBox>

            {/* BIG PRODUCT BANNER */}
            <MuiBox className="bigProductBannerMainWrap sectionGap" sx={{
                background: `url(${GuiterBoxBg})`
            }}>
                <MuiBox className="bigProductBannerCntntWrap">
                    <MuiTypography className='commonBigSctnHdng'>
                        ORANGE CRUSH <br /> 20RT COMBO <br /> GUITAR AMPLIFIER
                    </MuiTypography>
                    <MuiBox component='ul'>
                        <MuiBox component='li'>Brand: Orange</MuiBox>
                        <MuiBox component='li'>Product Code: Crush 20RT</MuiBox>
                        <MuiBox component='li'>Availability: In Stock</MuiBox>
                    </MuiBox>
                    <MuiTypography variant='h5'>$339.00</MuiTypography>
                    <MuiButton className='primaryBtnWrap'>ADD TO CART</MuiButton>
                </MuiBox>
            </MuiBox>

            {/* ARTICLES */}
            <MuiBox className="articleSectionMainWrap sectionGap">
                <MuiTypography className='commonBigSctnHdng' align='center'>
                    Article & Resources
                </MuiTypography>

                <MuiGrid container spacing={2} className='p20'>
                    {ARTICLE_RESOURCES && Map(ARTICLE_RESOURCES, (item, index) => (
                        <MuiGrid item md={3} sm={6} xs={12} key={index}>
                            <MuiBox className="articeBoxesWrap">
                                <MuiBox className="articleImageContainer">
                                    <img src={item.image} />
                                </MuiBox>
                                <MuiBox className="articleBoxContent">
                                    <MuiTypography>
                                        {item.title}
                                    </MuiTypography>
                                </MuiBox>
                            </MuiBox>
                        </MuiGrid>
                    ))}
                </MuiGrid>
            </MuiBox>

            {/* STORE LOCATOR BANNER */}
            <MuiBox className="storeLocatorBannerMainWrap sectionGap">
                <img src={InstrumentsShopBg} className='bgImgWrap' />
                <MuiBox className="storeLocatorBannerCntntWrap">
                    <MuiTypography className='commonBigSctnHdng'>
                        Musicians Avenue remains a family owned <br /> store and continues to provide good old <br /> fashioned customer service
                    </MuiTypography>
                    <MuiButton variant='outlined' className='outlineBtnWrap whiteBtn'>STORE LOCATOR</MuiButton>
                </MuiBox>
            </MuiBox>

            {/* REVIEWS */}
            <MuiBox className="sectionGap reviewMainWrap">
                <MuiGrid container spacing={2}>
                    {REVIEWS && Map(REVIEWS, (review, reviewIndex) => (
                        <MuiGrid item md={3} sm={6} xs={12} key={reviewIndex}>
                            <MuiBox className="reviewBoxMain">
                                <MuiBox component='span'>
                                    {new Array(review.stars).fill('').map((_, i) => (
                                        <Fragment key={i}>⭐</Fragment>
                                    ))}
                                    <MuiBox mx={1.5} component='span'>✪ Verified</MuiBox>
                                </MuiBox>
                                <MuiBox my={2} className='reviewContent'>
                                    <MuiTypography fontSize='18px !important' fontWeight={400}>{review.headText}</MuiTypography>
                                    <MuiTypography my={2} fontSize='16px !important' fontWeight={300}>{review.longText}</MuiTypography>
                                    <MuiTypography color="#6c6a6a !important" fontSize='16px !important' fontWeight={400}>
                                        {review.userName + ', ' + review.timeSince}
                                    </MuiTypography>
                                </MuiBox>
                            </MuiBox>
                        </MuiGrid>
                    ))}
                </MuiGrid>
            </MuiBox>
            {/* KEY FEATURES */}
            <MuiBox className="sectionGap keyFeaturesMainWrap">
                <MuiGrid container spacing={2}>
                    {KEY_FEATURES && Map(KEY_FEATURES, (feature, featureIndex) => (
                        <MuiGrid textAlign='center' item md={3} sm={6} xs={12} key={featureIndex}>
                            <MuiBox className="featureBoxMain">
                                <img style={{
                                    width: 'auto', height: 70, marginBottom: 20
                                }} src={feature.icon} />
                                <MuiTypography
                                    color='primary.main'
                                    fontFamily={`Roboto Slab, serif`}
                                    my={2} fontWeight={500}
                                >
                                    {feature.featureHead}
                                </MuiTypography>
                                <MuiTypography fontSize='18px !important' fontWeight={400} color='primary.dark'>
                                    {feature.featureDesc}
                                </MuiTypography>
                            </MuiBox>
                        </MuiGrid>
                    ))}
                </MuiGrid>
            </MuiBox>
        </MuiBox>
    )
}

export default HomeView;