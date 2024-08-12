import React from "react";
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';

import * as classes from './style.module.css';

export interface Certificate {
  title: string;
  institution: string,
  tags?: string[];
  date?: string;
  visible: boolean;
}

interface CertificateProps {
  data: Certificate;
  index: number;
}

export function Certificate(props: CertificateProps) {

  return (
    <Animation
      type="fadeUp"
      className={classes.Certificate}
    >
      <div className={classes.Details}>
        <div className={classes.Header}>
          <h4 className={classes.Title}><b>{props.data.title}</b> by {props.data.institution}</h4>
          {props.data.date && (
            <span className={classes.Date}>{props.data.date}</span>
          )}
        </div>
        <div className={classes.Tags}>
          {props.data.tags &&
            props.data.tags.length !== 0 &&
            props.data.tags.map((tag, key) => {
              return (
                <span key={key}>
                  <u>{tag}</u>
                </span>
              );
              })}
        </div>
            
      </div>
        
    </Animation>
);
  }