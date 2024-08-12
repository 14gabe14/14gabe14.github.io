import { graphql, useStaticQuery } from 'gatsby';
import { Certificate } from '../../components/certificate';

interface CertificatesSectionQueryResult {
    allCertificatesJson: {
        sections: {
            certificates: Certificate[];
        }[];
    };
}

export const useLocalDataSource = (): CertificatesSectionQueryResult => {
    return useStaticQuery(graphql`
        query CertificatesSectionQuery {
            allCertificatesJson {
                sections: nodes {
                    certificates {
                        tags
                        title
                        institution
                        date
                        visible
                    }
                }
            }
        }
    `);
};
