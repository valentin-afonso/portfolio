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
    import { useProjectStore } from '@/stores/project';

    const store = useProjectStore();
    let projectData;
    let postsPending = false;
    let fromStore = false;

    if (store.projects.length === 0) {
        const { data: projectPost, pending } = await useAsyncQuery(project_post)
        projectData = projectPost._rawValue.allProjects
        postsPending = pending;
        store.setProjects(projectData);
    } else {
        projectData = store.getProjects;
        fromStore = true;
    }
    console.log(fromStore)
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