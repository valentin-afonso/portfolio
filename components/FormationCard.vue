<template>
    <div class="formation">
        <div class="formation__info">
            <p class="formation__info-name">{{ formation.intituleDeFormation }}</p>
            <p class="formation__info-date-start">{{ formation.dateDebutFormation }}</p>
            <p class="formation__info-date-end">{{ formation.dateFinFormation }}</p>
            <p class="formation__info-description">{{ formation.description }}</p>
            <p class="formation__info-school-name">{{ formation.nomEtablissement }}</p>
            <p class="formation__info-school-city">{{ formation.villeEtablissement }}</p>
            <p class="formation__school-cp">{{ formation.codePostalEtablissament }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formation']
}
</script>

<style scoped>
p {
    margin: 0;
}
a {
    color: black;
    text-decoration: inherit;
}

.formation__info {
    padding: 1rem;
}
.formation__info-name {
    display: block;
    text-align: center;
}
</style>