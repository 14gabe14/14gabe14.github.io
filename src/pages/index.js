import React from "react";
import {
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import AboutSection from "../sections/About";
import ExperienceSection from "../sections/experience";
import CertificatesSection from "../sections/certificates";
import SkillsSection from "../sections/skills";

export default function IndexPage() {
  return (
    <>
      <Seo title="Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <SkillsSection sectionId="skills" heading="Skills" />
        <ExperienceSection sectionId="experience" heading="Experience" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <CertificatesSection sectionId="certificates" heading="Courses and Certificates"/>
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}
