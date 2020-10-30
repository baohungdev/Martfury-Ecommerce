import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { productPopular } from '../../../../public/static/data/technology';

import Product from '../../../elements/products/Product';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';

class TechnologySmartphone extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
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
            <div className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Popular Smartphones & Tablets</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Iphone</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>IPad</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Samsung</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>View All</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSetting} className="ps-carousel outside">
                            {productPopular.map(product => (
                                <Product product={product} key={product.title} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechnologySmartphone;
