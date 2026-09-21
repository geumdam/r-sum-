import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { AwardsAndLanguagesSection } from './components/AwardsAndLanguagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { ResumeSummaryModal } from './components/ResumeSummaryModal';

export default function App() {
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-neutral-800 selection:bg-neutral-900 selection:text-white font-sans antialiased">
      {/* Sticky Floating Navbar */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Container (Max width matching the reference Webflow layout) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* About & Core Competencies with Calligraphy Signature */}
        <AboutSection />

        {/* Projects Grid with Mockup Display and Modal */}
        <ProjectsSection />

        {/* Activities / Experience */}
        <ExperienceSection />

        {/* Education & Academic Excellence */}
        <EducationSection />

        {/* Professional Skills Matrix */}
        <SkillsSection />

        {/* Certifications, Awards, and Language Leader-lines */}
        <AwardsAndLanguagesSection />

        {/* Contact & Inquiry Composer */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Modals */}
      <DeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      <ResumeSummaryModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
