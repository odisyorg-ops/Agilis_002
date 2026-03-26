import React from 'react';
import ServicesSection from '../Components/Solution/ServicesSection';
import TrustSection from '../Components/Solution/TrustSection';
import FAQSection from '../GlobalComponent/FAQSection';
import PrismERPSection from '../Components/Solution/PrismERPSection';
import OperatingSystemSection from '../Components/Solution/OperatingSystemSection';
import ReadySection from '../Components/Solution/ReadySection';

const Solution = () => {
    return (
        <div className='min-h-screen'>
            <TrustSection></TrustSection>
            <ServicesSection></ServicesSection>
            <ReadySection></ReadySection>
            <PrismERPSection></PrismERPSection>
            <OperatingSystemSection></OperatingSystemSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Solution;