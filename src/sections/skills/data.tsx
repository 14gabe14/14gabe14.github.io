import { graphql, useStaticQuery } from 'gatsby';

interface Skill {
    emoji: string;
    label: string;
}

interface SkillsSectionQueryResult {
    allSkillsJson: {
        sections: {
            button: {
                initiallyShownSkills: number;
                label: string;
                visible: boolean;
            };
            skills: Skill[];
        }[];
    };
}

export const useLocalDataSource = (): SkillsSectionQueryResult => {
    return useStaticQuery(graphql`
        query SkillsSectionQuery {
            allSkillsJson {
                sections: nodes {
                    button {
                        initiallyShownSkills
                        label
                        visible
                    }
                    skills {
                        emoji
                        label
                    }
                }
            }
        }
    `);
};
