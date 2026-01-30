import React from 'react';
import ServicesSection from '../Components/Solution/ServicesSection';
import TrustSection from '../Components/Solution/TrustSection';
import FAQSection from '../GlobalComponent/FAQSection';
import PrismERPSection from '../Components/Solution/PrismERPSection';
import OperatingSystemSection from '../Components/Solution/OperatingSystemSection';

const Solution = () => {
    return (
        <div className='min-h-screen'>
            <TrustSection></TrustSection>
            <ServicesSection></ServicesSection>
            <PrismERPSection></PrismERPSection>
            <OperatingSystemSection></OperatingSystemSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Solution;