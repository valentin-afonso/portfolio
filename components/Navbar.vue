<template>
    <nav class="navbar">
        <ul>
            <li>
                <NuxtLink to="/">Accueil</NuxtLink> 
            </li>
            <li>
                <NuxtLink to="/project/">Mes projets</NuxtLink>  
            </li>
            <li>
                <NuxtLink to="/formation/">Formations</NuxtLink>  
            </li>
            <li>
                <NuxtLink to="/experience/">Experience professionnel</NuxtLink>  
            </li>
        </ul>  
    </nav>
</template>

<script setup>
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