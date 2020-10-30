import React, { useState, useEffect } from 'react';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import NavigationList from '../../components/shared/navigation/NavigationList';
import OrganicBanner from '../../components/partials/homepage/organic/OrganicBanner';
import OrganicSiteFeatures from '../../components/partials/homepage/organic/OrganicSiteFeatures';
import OrganicTopCategories from '../../components/partials/homepage/organic/OrganicTopCategories';
import OrganicPromotions from '../../components/partials/homepage/organic/OrganicPromotions';
import OrganicNewArrivals from '../../components/partials/homepage/organic/OrganicNewArrivals';
import OrganicBlog from '../../components/partials/homepage/organic/OrganicBlog';
import HeaderOrganic from '../../components/shared/headers/HeaderOrganic';
import FooterOrganic from '../../components/shared/footers/FooterOrganic';
import OrganicDealHot from '../../components/partials/homepage/organic/OrganicDealHot';
import OrganicClientSay from '../../components/partials/homepage/organic/OrganicClientSay';
import HeaderMobileOrganic from '../../components/shared/headers/HeaderMobileOrganic';
import { organicWidget } from '../../public/static/data/organic';
import SubscribePopup from '../../components/shared/SubscribePopup';
import '../../scss/organic.scss';

const HomeOrganicPage = () => {
    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSubscribe(true);
        }, 10000);
    });

    return (
        <div className="site-content">
            <HeaderOrganic />
            <HeaderMobileOrganic />
            <NavigationList />
            <SubscribePopup active={subscribe} />
            <main id="homepage-9">
                <OrganicBanner />
                <OrganicSiteFeatures />
                <OrganicTopCategories />
                <OrganicPromotions />
                <OrganicDealHot data={organicWidget} />
                <OrganicNewArrivals />
                <OrganicClientSay />
                <OrganicBlog />
                <FooterOrganic />
            </main>
        </div>
    );
};

HomeOrganicPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;
export default HomeOrganicPage;
