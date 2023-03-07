<template>
    <div>
       <div v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div v-else>
            <div class="formations___list">
                <FormationCard v-for="formation in formationData" :key="formation.id" :formation="formation" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import formation_post from '@/cms/queries/formation_post';
    import { useFormationStore } from '@/stores/formation';
    const store = useFormationStore();
    let formationData;
    let postsPending = false;
    let fromStore = false;

    if (store.formations.length === 0) {
        const { data: formationPost, pending } = await useAsyncQuery(formation_post)
        formationData = formationPost._rawValue.allFormationPosts
        postsPending = pending;
        store.setFormations(formationData);
    } else {
        formationData = store.getFormations;
        fromStore = true;
    }
    console.log(fromStore)
</script>

<style scoped>
.formations___list {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-left: 2px solid var(--primary-color);
}
</style>