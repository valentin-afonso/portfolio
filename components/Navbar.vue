<template>
    <nav class="navbar">
        <ul>
            <li>
                <NuxtLink to="/">Accueil</NuxtLink> 
            </li>
            <li>
                <NuxtLink to="/project/">Mes projets</NuxtLink>  
            </li>
        </ul>  
    </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar ul  {
    display: flex;
}
.navbar ul li {
    list-style-type: none;
}
.navbar li a { 
    text-decoration: initial;
    padding: 1rem;
}
</style>