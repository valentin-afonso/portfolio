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

<script scoped>
export default {
    props: ['project']
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
ul {
    padding: 0;
}
li {
    list-style-type: none;
}
img {
    max-width: 100%;
}
.porjects___list {
    display: flex;
    flex-wrap: wrap;
}
.porjects___list li {
    width: 25%;
}
.porjects___list .project {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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