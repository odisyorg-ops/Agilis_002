import React from 'react';
import HistorySection from '../Components/About/HistorySection';
import ERPSection from '../Components/About/ERPSection';
import TeamTechArm from '../Components/About/TeamTechArm';
import FoundationSection from '../Components/About/FoundationSection';
import Footer from '../Components/Home/Footer';
import PartnershipImpact from '../Components/About/PartnershipImpact';
import HeroAbout from '../Components/About/HeroAbout';
import TechPartnerSection from '../Components/About/TechPartnerSection';

const About = () => {
    return (
        <main className="min-h-screen">
            <HeroAbout></HeroAbout>
            <PartnershipImpact></PartnershipImpact>
            <HistorySection />
            <TechPartnerSection></TechPartnerSection>
            <ERPSection />
            <TeamTechArm />
            <FoundationSection />
            <Footer />
        </main>
    );
};

export default About;