import React from "react";
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';

import * as classes from './style.module.css';

export interface Experience {
  category?: string;
  title: string;
  bulletPoints?: string[];
  tags?: string[];
  date?: string;
  visible: boolean;
}

interface ExperienceProps {
  data: Experience;
  index: number;
}

export function Experience(props: ExperienceProps) {

  return (
    <Animation
      type="fadeUp"
      className={classes.Project}
    >
      <div className={classes.Details}>
        <div className={classes.Header}>
          <span className={classes.Category}>{props.data.category}</span>
          {props.data.date && (
            <span className={classes.Date}>{props.data.date}</span>
          )}
        </div>
        <h4 className={classes.Title}>{props.data.title}</h4>
        <ul className={classes.BulletPoints}>
          {props.data.bulletPoints &&
            props.data.bulletPoints.length !== 0 &&
            props.data.bulletPoints.map((bulletPoint, key) => {
              return (
                <li key={key}>{bulletPoint}</li>
              );
              })}
        </ul>
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