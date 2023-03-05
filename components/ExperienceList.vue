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

    const { data: experiencePost, pending: postsPending } = await useAsyncQuery(experience_post)
    const experienceData = experiencePost._rawValue.allExperiencePosts
</script>

<style scoped>
.experience___list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>