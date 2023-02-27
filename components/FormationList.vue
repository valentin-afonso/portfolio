<template>
    <div>
       <div v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div v-else>
            <div class="formations___list">
                <FormationCard v-for="formation in formationtData" :key="formation.id" :formation="formation" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import formation_post from '@/cms/queries/formation_post';

    const { data: formationPost, pending: postsPending } = await useAsyncQuery(formation_post)
    const formationtData = formationPost._rawValue.allFormationPosts
</script>

<style scoped>
.formations___list {
    display: flex;
    flex-wrap: wrap;
}
</style>