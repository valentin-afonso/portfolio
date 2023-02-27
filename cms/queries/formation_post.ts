export default gql`
query FormationPost {
    allFormationPosts {
      id
      intituleDeFormation
      nomEtablissement
      villeEtablissement
      description
      dateDebutFormation
      dateFinFormation
      codePostalEtablissament
    }
  }`


