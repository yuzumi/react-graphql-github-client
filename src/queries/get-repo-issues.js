import gql from 'graphql-tag';

const getRepoIssues = gql`
  query($name: String!, $owner: String!) {
      repository(name: $name, owner: $owner) {
        issues(first: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            title,
            bodyHTML,
            createdAt
          }
        }
      }
    }
`;

export default getRepoIssues;
