import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import Link from 'next/link';

class ShopSidebarBanner extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-shop-banner">
                <Slider {...carouselSetting} className="ps-carousel blur">
                    <div className="item">
                        <Link href="/shop">
                            <img
                                src="/static/img/slider/shop-sidebar/1.jpg"
                                alt="martfury"
                            />
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/shop">
                            <img
                                src="/static/img/slider/shop-sidebar/2.jpg"
                                alt="martfury"
                            />
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ShopSidebarBanner;
