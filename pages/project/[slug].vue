<template>
    <div v-if="postsPending">
        <p>Loading project</p>
    </div>
    <div v-else>
        <h1>{{ projectPost.project.nomDuProjet }}</h1>
        {{ projectPost.project.description }}
    </div>
</template>

<script setup>
import get_project from '@/cms/queries/get_project';  
const route = useRoute()

const variable = {
    projectSlug : route.params.slug 
}

const { data: projectPost, pending: postsPending } = await useLazyAsyncQuery(get_project, variable)
console.log(projectPost)
</script>

