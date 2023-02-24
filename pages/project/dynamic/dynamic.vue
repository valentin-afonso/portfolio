<template>
    <h1>Dynamic Project</h1>
    <p>titre: {{ $route.params.slug }}</p>
</template>

<script setup>
    definePageMeta({
        name: 'dynamic-router-page',
        title: 'About dynamic router',
        path: '/dynamic-project/:slug',
    })
</script>