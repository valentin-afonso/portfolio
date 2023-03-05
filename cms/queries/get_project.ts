export default gql`
query GetProject($projectSlug: String) {
    project(filter: {projectSlug: {eq: $projectSlug}}) {
      description
      nomDuProjet
      image {
        url
      }
      techno {
        nom
        icon {
          url
        }
      }
    }
}`

