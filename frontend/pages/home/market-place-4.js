import React, { useState, useEffect } from 'react';

import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MartketPlace4Banner from '../../components/partials/homepage/marketplace4/MartketPlace4Banner';
import MartketPlace4SiteFeatures from '../../components/partials/homepage/marketplace4/MartketPlace4SiteFeatures';
import MartketPlace4Promotions from '../../components/partials/homepage/marketplace4/MartketPlace4Promotions';
import MartketPlace4Dealhot from '../../components/partials/homepage/marketplace4/MartketPlace4Dealhot';
import MartketPlace4TopCategories from '../../components/partials/homepage/marketplace4/MartketPlace4TopCategories';
import MartketPlace4CategoriesBox from '../../components/partials/homepage/marketplace4/MartketPlace4CategoriesBox';
import HeaderMarketPlace4 from '../../components/shared/headers/HeaderMarketPlace4';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import SubscribePopup from '../../components/shared/SubscribePopup';
import { productWidget } from '../../public/static/data/martketplace';

import '../../scss/market-place-4.scss';

const HomeMarketPlace4Page = () => {
    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSubscribe(true);
        }, 10000);
    });

    return (
        <div className="site-content">
            <HeaderMarketPlace4 />
            <HeaderMobile />
            <NavigationList />
            <SubscribePopup active={subscribe} />
            <main id="homepage-6">
                <MartketPlace4Banner />
                <MartketPlace4SiteFeatures />
                <MartketPlace4Promotions />
                <MartketPlace4Dealhot data={productWidget} />
                <MartketPlace4TopCategories />
                <MartketPlace4CategoriesBox />
            </main>
            <FooterMarketPlace2 />
        </div>
    );
};

export default HomeMarketPlace4Page;
