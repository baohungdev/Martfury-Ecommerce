import React, { useState, useEffect } from 'react';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
import Clothings from '../components/partials/homepage/home-default/Clothings';
import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
import HomeAds from '../components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '../components/partials/commons/DownLoadApp';
import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
import Newletters from '../components/partials/commons/Newletters';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import SubscribePopup from '../components/shared/SubscribePopup';
import '../scss/home-default.scss';

const Index = () => {
    const [subscribe, setSubscribe] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setSubscribe(true);
        }, 10000);
    });
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <SubscribePopup active={subscribe} />
            <main id="homepage-1">
                <HomeBanner />
                <SiteFeatures />
                <HomeDefaultDealOfDay />
                <HomeAdsColumns />
                <HomeDefaultTopCategories />
                <ConumerElectronics />
                <Clothings />
                <GardenAndKitchen />
                <HomeAds />
                <DownLoadApp />
                <NewArrivals />
                <Newletters />
            </main>
            <FooterFullwidth />
        </div>
    );
};
export default Index;
