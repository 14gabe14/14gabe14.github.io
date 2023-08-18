import { graphql, useStaticQuery } from 'gatsby';
import { Experience } from '../../components/experience';

interface ExperienceSectionQueryResult {
    allExperienceJson: {
        sections: {
            experience: Experience[];
        }[];
    };
}

export const useLocalDataSource = (): ExperienceSectionQueryResult => {
    return useStaticQuery(graphql`
        query ExperienceSectionQuery {
            allExperienceJson {
                sections: nodes {
                    experience {
                        category
                        bulletPoints
                        tags
                        title
                        date
                        visible
                    }
                }
            }
        }
    `);
};
