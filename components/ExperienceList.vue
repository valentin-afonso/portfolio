<template>
    <div>
       <div v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div v-else>
            <div class="experience___list">
                <ExperienceCard v-for="experience in experienceData" :key="experience.id" :experience="experience" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import experience_post from '@/cms/queries/experience_post';
    import { useExperienceStore } from '@/stores/experience';

    const store = useExperienceStore();
    let experienceData;
    let postsPending = false;
    let fromStore = false;

    if (store.experiences.length === 0) {
        const { data: experiencePost, pending } = await useAsyncQuery(experience_post)
        experienceData = experiencePost._rawValue.allExperiencePosts
        postsPending = pending;
        store.setExperiences(experienceData);
    } else {
        experienceData = store.getExperiences;
        fromStore = true;
    }
    console.log(fromStore)
</script>

<style scoped>
.experience___list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>