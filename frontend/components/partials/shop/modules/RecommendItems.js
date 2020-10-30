import React, { Component } from 'react';
import Slider from 'react-slick';

import { products } from '../../../../public/static/data/product';
import Product from '../../../elements/products/Product';

class RecommendItems extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = e => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = e => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
            <div className="ps-block--shop-features">
                <div className="ps-block__header">
                    <h3>Recommended Items</h3>
                    <div className="ps-block__navigation">
                        <a
                            className="ps-carousel__prev"
                            onClick={this.handleCarouselPrev}>
                            <i className="icon-chevron-left"></i>
                        </a>
                        <a
                            className="ps-carousel__next"
                            onClick={this.handleCarouselNext}>
                            <i className="icon-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="ps-block__content">
                    <Slider
                        ref={slider => (this.slider = slider)}
                        {...carouselSetting}>
                        {products.map((product, index) => {
                            if (index > 15 && index < 30) {
                                return (
                                    <Product
                                        product={product}
                                        key={product.id}
                                    />
                                );
                            }
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default RecommendItems;
