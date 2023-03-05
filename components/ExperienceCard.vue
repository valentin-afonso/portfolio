<template>
    <div class="experience">
        <div class="experience__info">
            <div class="experience__info-date">
                <p class="date-start">{{ experience.dateDebut }}</p> 
                <p class="date-end">{{ experience.dateFin }}</p>
            </div>
            <div class="experience__info-header">
                <p class="experience__name">{{ experience.intulePoste }}</p>
                <p class="experience__type">{{ experience.typeDePoste }}</p>
            </div>
            <p class="experience__company-name">{{ experience.entreprise }}</p>
            <p class="experience__city">{{ experience.ville }}</p>
            <p class="experience__description">{{ experience.descriptionPoste }}</p>
        </div>
    </div>
</template>

<script>
export default {
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  props: ['experience']
}
</script>

<style scoped>
.experience__info {
    padding: 1rem;
}
.experience__info-date {
    display: flex;
}
.experience__info-date p {
    margin-right: 1rem;
}
.experience__info-header {
    display: flex;
}
.experience__name {
    margin-right: 1rem;
}
</style>