import gql from 'graphql-tag';

const searchForRepos = gql`
  query($search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 20) {
      repositoryCount,
      edges {
        node {
          ... on Repository {
            name,
            owner {
              login  
            },
            stargazers {
                totalCount
            },
            descriptionHTML,
          }
        }
      }
    }
  }
`;

export default searchForRepos;
