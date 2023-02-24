export default gql`
query GetProject($projectSlug: String) {
    project(filter: {projectSlug: {eq: $projectSlug}}) {
        description
        id
        nomDuProjet
    }
}`

