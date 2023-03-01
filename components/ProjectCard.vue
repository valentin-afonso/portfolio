<template>
    <div class="project">
        <nuxt-link :to="{name: 'project-slug', params: {slug: project.projectSlug}}">
            <div class="project__image">
                <img :src= "project.image.url" alt="image projet">
            </div>
            <div class="project__info">
                <p class="project__info-name">{{ project.nomDuProjet }}</p>
                            
                <ul class="list__techno">
                    <li v-for="(techno, key) in project.techno" :key="key">
                        <img :src= "techno.icon.url" alt="icon techno" class="list__techno-image">
                        <p class="list__techno-name">{{ techno.nom }}</p>
                    </li>        
                </ul>
            </div>
        </nuxt-link>
    </div>

</template>

<script>
export default {
    props: ['project']
}
</script>

<style scoped>
.project {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 15px;
    overflow: hidden;
}
.project__image img {
    height: 9rem;
    width: 100%;
    object-fit: cover;
}
.project__info {
    padding: 1rem;
}
.project__info-name {
    display: block;
    text-align: center;
}
.list__techno {
    display: flex;
    flex-wrap: wrap;
}
.list__techno li {
    display: flex;
    align-items: center;
    width: auto;
    margin: 7px;
}
.list__techno li p {
    font-size: .8rem;
}
.list__techno-image {
    widows: 2rem;
    height: 2rem;
    margin-right: 10px;
}
.list__techno-name {
    background-color: #4f4f4f;
    color: #fff;
    padding: 5px 10px;
    border-radius: 50px;
}
</style>