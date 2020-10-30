import React, { useState, useEffect } from 'react';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MarketPlace3ProductBox from '../../components/partials/homepage/marketplace3/MarketPlace3ProductBox';
import MartketPlace3Banner from '../../components/partials/homepage/marketplace3/MartketPlace3Banner';
import MarketPlace3DealOfDay from '../../components/partials/homepage/marketplace3/MarketPlace3DealOfDay';
import MarketPlace3SearchTrending from '../../components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
import HeaderMarketPlace3 from '../../components/shared/headers/HeaderMarketPlace3';
import SubscribePopup from '../../components/shared/SubscribePopup';
import '../../scss/market-place-3.scss';

const HomeMarketPlace3Page = () => {
    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSubscribe(true);
        }, 10000);
    });

    return (
        <div className="site-content">
            <HeaderMarketPlace3 />
            <HeaderMobile />
            <NavigationList />
            <SubscribePopup active={subscribe} />
            <main id="homepage-5">
                <MartketPlace3Banner />
                <MarketPlace3SearchTrending />
                <MarketPlace3DealOfDay />
                <MarketPlace3ProductBox />
            </main>
            <FooterMarketPlace2 />
        </div>
    );
};

export default HomeMarketPlace3Page;
