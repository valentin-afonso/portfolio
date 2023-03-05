<template>
    <div v-if="postsPending">
        <p>Loading project</p>
    </div>
    <div v-else>
        <div class="content-header">
            <NuxtLink to="/project/" class="button-back">Retour</NuxtLink>  
            <h1>{{ projectPost.project.nomDuProjet }}</h1>
        </div>
        <div class="content-inside">
            <div class="main-content">
                {{ projectPost.project.description }}
            </div>
            <aside>
                <div class="container_image">
                    <img :src= "projectPost.project.image.url" alt="image projet">
                </div>
                <div>
                    <ul class="list__techno">
                        <li v-for="(techno, key) in projectPost.project.techno" :key="key">
                            <img :src= "techno.icon.url" :alt="techno.nom" class="list__techno-image">
                            <p class="list__techno-name">{{ techno.nom }}</p>
                        </li>        
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
import get_project from '@/cms/queries/get_project';  

const route = useRoute()

const variable = {
    projectSlug : route.params.slug 
}

const { data: projectPost, pending: postsPending } = await useLazyAsyncQuery(get_project, variable)
</script>


<style scoped>
.content-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
}
.button-back {
    position: absolute;
    left: 0rem;
    top: 5px;
}
.content-inside {
    display: flex;
}
.content-inside .main-content {
    flex-grow: 1;
}
aside {
    max-width: 21rem;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.list__techno {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}
.list__techno li {
    display: flex;
    align-items: center;
    width: auto;
    padding: 7px;
    border-radius: 7px;
}
.list__techno li:nth-child(odd) {
    background-color: #f2f2f2;
}
.list__techno-image {
    widows: 2rem;
    height: 2rem;
    margin-right: 10px;
}
.list__techno-name {
    color: var(--primary-color);
    padding: 5px 10px;
    border-radius: 50px;
    font-size: .8rem;
    flex-grow: 1;
}
</style>