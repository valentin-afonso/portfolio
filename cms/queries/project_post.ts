export default gql`
query ProjectPost {
    allProjects {
      id
      description
      nomDuProjet
      projectSlug
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


