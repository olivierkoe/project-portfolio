import React from 'react';
import ProfileSection from '../components/ProfileSection';
import ServicesSection from '../components/ServicesSection';
import ProjetsSection from '../components/ProjetsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ProfileSection />
            <ServicesSection />
            <ProjetsSection />
            <TestimonialsSection />
            <ContactBanner />
        </div>
    );
}