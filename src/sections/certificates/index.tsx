import React from "react";

import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Certificate } from '../../components/certificate';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export default function CertificatesSection({ sectionId, heading }) {
  const response = useLocalDataSource();
  const data = response.allCertificatesJson.sections[0];
  
  return (
    <Animation type="fadeIn">
      <Section anchor={sectionId} heading={heading}>
        <Slider additionalClasses={[classes.Certificates]}>
          {data.certificates.map((certificate, key) => {
              return certificate.visible ? <Certificate key={key} index={key} data={certificate} /> : null;
          })}
        </Slider>
      </Section>
    </Animation>
  );
}