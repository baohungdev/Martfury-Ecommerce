import React, { Component } from 'react';

import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import { producDealOfDay } from '../../../public/static/data/technology';
import Product from '../../elements/products/Product';

class ShopCarouselTopDeal extends Component {
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
            <div className="ps-block--container-hightlight">
                <div className="ps-section__header">
                    <h3>Top Deals Super Hot Today</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        {producDealOfDay.map((product, index) => {
                            if (index < 8) {
                                return (
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 "
                                        key={product.id}>
                                        <Product product={product} />
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopCarouselTopDeal;
