export default gql`
query HeaderPost {
  header {
    navigation {
      navigationLabel
      id
      lien {
        url
        id
        titrePage
      }
    }
  }
}`


