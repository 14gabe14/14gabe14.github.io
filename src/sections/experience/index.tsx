import React from "react";

import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Experience } from '../../components/experience';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export default function ExperienceSection({ sectionId, heading }) {
  const response = useLocalDataSource();
  const data = response.allExperienceJson.sections[0];
  
  return (
    <Animation type="fadeIn">
      <Section anchor={sectionId} heading={heading}>
        <Slider additionalClasses={[classes.Projects]}>
          {data.experience.map((experience, key) => {
              return experience.visible ? <Experience key={key} index={key} data={experience} /> : null;
          })}
        </Slider>
      </Section>
    </Animation>
  );
}