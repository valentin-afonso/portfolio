<template>
    <div class="experience">
        <div class="experience__info">
            <p class="experience__name">{{ experience.intulePoste }}</p>
            <p class="experience__type">{{ experience.typeDePoste }}</p>
            <p class="experience__city">{{ experience.ville }}</p>
            <p class="experience__description">{{ experience.descriptionPoste }}</p>
            <p class="experience__company-name">{{ experience.entreprise }}</p>
            <p class="experience__date-start">{{ experience.dateDebut }}</p>
            <p class="experience__date-end">{{ experience.dateFin }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['experience']
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

.experience__info {
    padding: 1rem;
}
</style>