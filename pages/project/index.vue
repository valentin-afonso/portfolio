<template>
    <h1>Mes projets</h1>    
    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else>
        <div class="porjects___list">
            <ProjectCard v-for="project in projectPost.allProjects" :key="project.id" :project="project" />
        </div>
    </div>
</template>


<script setup>
    import project_post from '@/cms/queries/project_post';

    const { data: projectPost, pending: postsPending } = await useLazyAsyncQuery(project_post)
   
    if (projectPost.value?.post) {
        console.log(projectPost)
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
</style>