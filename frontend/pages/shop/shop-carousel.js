import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import ShopCarouselBanner from '../../components/partials/shop/ShopCarouselBanner';
import ShopCarouselTopDeal from '../../components/partials/shop/ShopCarouselTopDeal';
import ShopCarouselProductBox from '../../components/partials/shop/ShopCarouselProductBox';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ShopCategoriesPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Carousel',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--shop" id="shop-carousel">
                <div className="container">
                    <ShopCarouselBanner />
                    <ShopCarouselTopDeal />
                    <ShopCarouselProductBox />
                </div>
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};
export default ShopCategoriesPage;
