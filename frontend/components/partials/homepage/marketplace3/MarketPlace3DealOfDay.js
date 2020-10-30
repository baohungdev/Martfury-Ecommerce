import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import CountDownSimple from '../../../elements/CountDownSimple';
import { producDealOfDay } from '../../../../public/static/data/technology';
import Product from '../../../elements/products/Product';
class MarketPlaceDealOfDay extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };

        return (
            <div className="ps-deal-of-day">
                <div className="container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Deal of the day</h3>
                            </div>
                            <div className="ps-block__right">
                                <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2020, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                    />
                                </figure>
                            </div>
                        </div>
                        <a href="shop-default.html">View all</a>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel outside">
                            {producDealOfDay.map(product => (
                                <Product
                                    product={product}
                                    key={product.title}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default MarketPlaceDealOfDay;
