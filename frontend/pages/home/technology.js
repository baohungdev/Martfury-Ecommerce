import React, { useState, useEffect } from 'react';

import NavigationList from '../../components/shared/navigation/NavigationList';
import TechnologyBanner from '../../components/partials/homepage/technology/TechnologyBanner';
import TechnologyPromotions from '../../components/partials/homepage/technology/TechnologyPromotions';
import TechnologyTopCategories from '../../components/partials/homepage/technology/TechnologyTopCategories';
import TechnologySmartPhone from '../../components/partials/homepage/technology/TechnologySmartphone';
import TechnologyLaptopAndSound from '../../components/partials/homepage/technology/TechnologyLatopAndSound';
import TechnologyToys from '../../components/partials/homepage/technology/TechnologyToys';
import TechnologyGoodPrice from '../../components/partials/homepage/technology/TechnologyGoodPrice';
import TechnologyDealOfDay from '../../components/partials/homepage/technology/TechnologyDealOfDay';
import TechnologySiteFeatures from '../../components/partials/homepage/technology/TechnologySiteFeatures';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import FooterTechnology from '../../components/shared/footers/FooterTechnology';
import HeaderMobileTechnology from '../../components/shared/headers/HeaderMobileTechnology';
import SubscribePopup from '../../components/shared/SubscribePopup';
import '../../scss/technology.scss';

const HomeTechnologyPage = () => {
    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSubscribe(true);
        }, 10000);
    });

    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobileTechnology />
            <NavigationList />
            <SubscribePopup active={subscribe} />
            <main id="homepage-10">
                <TechnologyBanner />
                <TechnologySiteFeatures />
                <TechnologyDealOfDay />
                <TechnologyPromotions />
                <TechnologyTopCategories />
                <TechnologySmartPhone />
                <TechnologyLaptopAndSound />
                <TechnologyToys />
                <TechnologyGoodPrice />
                <FooterTechnology />
            </main>
        </div>
    );
};

export default HomeTechnologyPage;
