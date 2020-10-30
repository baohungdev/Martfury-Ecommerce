import React, { Component } from 'react';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { onSale } from '../../../../public/static/data/product';

class HomeDefaultDealOfDay extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 3,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            lazyload: true,
            responsive: [
                {
                    breakpoint: 1750,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        dots: true,
                        arrows: false,
                    },
                },
                /*{
                    breakpoint: 1680,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        dots: true,
                        arrows: false,
                    },
                },*/
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

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
                <div className="ps-container">
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
                        <Link href="/shop">
                            <a>View all</a>
                        </Link>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSetting} className="ps-carousel outside">
                            {onSale.map(product => (
                                <ProductDealOfDay
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

export default HomeDefaultDealOfDay;
