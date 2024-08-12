import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export default function SkillsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allSkillsJson.sections[0]; // Update to use skills.json
    const shouldShowButton = data.button.visible !== false;
    const initiallyShownSkills = data.button.initiallyShownSkills ?? 5;
    const [shownSkills, setShownSkills] = React.useState<number>(
        shouldShowButton ? initiallyShownSkills : data.skills.length,
    );

    function loadMoreHandler() {
        setShownSkills(data.skills.length);
    }

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.Skills}>
                    {data.skills.slice(0, shownSkills).map((skill, key) => {
                        return (
                            <Animation key={key} className={classes.Skill} type="scaleIn" delay={key * 100}>
                                <span className={classes.Emoji}>{skill.emoji}</span>{' '}
                                {skill.label}
                            </Animation>
                        );
                    })}
                    {shouldShowButton && shownSkills < data.skills.length && (
                        <Animation type="scaleIn" delay={(shownSkills + 1) * 100}>
                            <Button
                                type={ButtonType.BUTTON}
                                onClickHandler={loadMoreHandler}
                                label={data.button.label}
                            />
                        </Animation>
                    )}
                </div>
            </Section>
        </Animation>
    );
}
