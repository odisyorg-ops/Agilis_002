import React from 'react';
import AboutHero from '../Components/About/AboutHero.JSX';
import HistorySection from '../Components/About/HistorySection';
import ERPSection from '../Components/About/ERPSection';
import TeamTechArm from '../Components/About/TeamTechArm';
import FoundationSection from '../Components/About/FoundationSection';
import Footer from '../Components/Home/Footer';
import PartnershipImpact from '../Components/About/PartnershipImpact';

const About = () => {
    return (
        <main className="min-h-screen">
            <AboutHero/>
            <PartnershipImpact></PartnershipImpact>
            <HistorySection />
            <ERPSection />
            <TeamTechArm />
            <FoundationSection />
            <Footer />
        </main>
    );
};

export default About;