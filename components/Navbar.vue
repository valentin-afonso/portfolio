<template>
    <nav class="navbar">
        <ul>
            <li v-for="link in headerData" :key="link.id">
                <NuxtLink :to="link.lien.url">{{link.navigationLabel}}</NuxtLink> 
            </li>
        </ul>  
    </nav>
</template>

<script setup>
import header_post from '@/cms/queries/header_post';
const { data: headerPost, pending: postsPending } = await useAsyncQuery(header_post)
const headerData = headerPost._rawValue.header.navigation
</script>

<style scoped>
.navbar {
    background: var(--primary-color);
}
.navbar ul  {
    display: flex;
    justify-content: center;
    margin: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.navbar ul li {
    list-style-type: none;
}
.navbar li a { 
    text-decoration: initial;
    padding: 1rem;
    display: block;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 600;
}
</style>