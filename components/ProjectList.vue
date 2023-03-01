<template>
    <div>
       <div v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div v-else>
            <div class="porjects___list">
                <ProjectCard v-for="project in projectData" :key="project.id" :project="project" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import project_post from '@/cms/queries/project_post';

    const { data: projectPost, pending: postsPending } = await useAsyncQuery(project_post)
    const projectData = projectPost._rawValue.allProjects
</script>

<style scoped>
.porjects___list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
</style>