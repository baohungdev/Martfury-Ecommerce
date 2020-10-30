import React, { useState, useEffect } from 'react';
import NavigationList from '../../components/shared/navigation/NavigationList';
import SiteFeatures from '../../components/partials/homepage/autopart/SiteFeatures';
import AutopartPromotions from '../../components/partials/homepage/autopart/AutopartPromotions';
import AutopartCategories from '../../components/partials/homepage/autopart/AutopartCategories';
import AutopartRecommendForYou from '../../components/partials/homepage/autopart/AutopartRecommendForYou';
import AutopartBestSaleBrand from '../../components/partials/homepage/autopart/AutopartBestSaleBrand';
import ClientSay from '../../components/partials/commons/ClientSay';
import AutopartPromotions2 from '../../components/partials/homepage/autopart/AutopartPromotions2';
import AutopartDealHot from '../../components/partials/homepage/autopart/AutopartDealHot';
import AutopartBanner from '../../components/partials/homepage/autopart/AutopartBanner';
import HeaderAutoPart from '../../components/shared/headers/HeaderAutoPart';
import HeaderMobileAutopart from '../../components/shared/headers/HeaderMobileAutopart';
import SubscribePopup from '../../components/shared/SubscribePopup';
import FooterAutopart from '../../components/shared/footers/FooterAutopart';
import '../../scss/autopart.scss';

import {
    recommendProducts,
    productWidget,
} from '../../public/static/data/autopart';

const HomeAutopartPage = () => {
    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSubscribe(true);
        }, 10000);
    });

    return (
        <div className="site-content">
            <HeaderAutoPart />
            <HeaderMobileAutopart />
            <NavigationList />
            <SubscribePopup active={subscribe} />
            <main id="homepage-2">
                <AutopartBanner />
                <AutopartCategories />
                <AutopartPromotions />
                <AutopartRecommendForYou data={recommendProducts} />
                <AutopartDealHot data={productWidget} />
                <AutopartPromotions2 />
                <AutopartBestSaleBrand />
                <ClientSay />
                <SiteFeatures />
                <FooterAutopart />
            </main>
        </div>
    );
};

export default HomeAutopartPage;
