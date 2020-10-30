import React from 'react';
import {
    home_3_clothing,
    home_3_technology,
    home_3_electronic,
    home_3_garden_kitchen,
    home_3_healthy,
} from '../../../../public/static/data/martketplace';
import Market2ConsumerElectronics from './modules/Market2ConsumerElectronics';
import Market2Clothing from './modules/Market2Clothing';
import Market2ComputerAndTechnology from './modules/Market2ComputerAndTechnology';
import Market2GardenAndKitchen from './modules/Market2GardenAndKitchen';
import Market2HealthyAndBeauty from './modules/Market2HealthyAndBeauty';

const MarketPlace2ProductBox = () => (
    <div>
        <Market2ConsumerElectronics data={home_3_electronic} />
        <Market2Clothing data={home_3_clothing} />
        <Market2ComputerAndTechnology data={home_3_technology} />
        <Market2GardenAndKitchen data={home_3_garden_kitchen} />
        <Market2HealthyAndBeauty data={home_3_healthy} />
    </div>
);

export default MarketPlace2ProductBox;
