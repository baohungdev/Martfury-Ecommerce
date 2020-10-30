import React, { Component } from 'react';
import Slider from 'react-slick';
import {
    producDealOfDay,
    productLaptopAndSound,
} from '../../../public/static/data/technology';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import Product from '../../elements/products/Product';

class ShopCarouselProductBox extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
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
            <section className="ps-shop-carousel--product-box">
                <div className="ps-product-list">
                    <div className="ps-section__header">
                        <h3>Best Seller In The Last Months</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel outside">
                            {producDealOfDay.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="ps-product-list">
                    <div className="ps-section__header">
                        <h3>New Arrivals</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel outside">
                            {productLaptopAndSound.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopCarouselProductBox;
