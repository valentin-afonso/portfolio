<template>
    <div class="formation">
        <div class="formation__info">
            <div class="formation__info-header">
                <p class="formation__info-intitule">{{ formation.intituleDeFormation }}</p>
                <p class="formation__info-date">
                    <span class="start">{{ formation.dateDebutFormation }}</span> -
                    <span class="end">{{ formation.dateFinFormation }}</span>
                </p>
            </div>
            <div class="formation__info-school">
                <p class="school-name">{{ formation.nomEtablissement }}</p>
                <div class="school-adresse">
                    <p>
                        (<span class="city">{{ formation.villeEtablissement }}</span> -
                        <span class="cp">{{ formation.codePostalEtablissament }}</span>)
                    </p>
                    
                </div>
            </div>
            <div class="formation__info-description">
                <p>{{ formation.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formation']
}
</script>

<style scoped>
.formation {
    position: relative;
}
.formation::before {
    content: "";
    width: 17px;
    height: 17px;
    background-color: var(--primary-color);
    position: absolute;
    top: 10px;
    left: -9.5px;
    border-radius: 100%;
}
.formation__info {
    padding: 2.5rem;
    background: var(--primary-color);
    color: var(--secondary-color);
    margin: 2.5rem 0 1rem 2rem;
    border-radius: 10px;
    max-width: 50rem;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}
.formation__info-header {
    display: flex;
    align-items: center;
}
.formation__info-intitule {
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 5px;
}
.formation__info-date {
    display: flex;
    position: absolute;
    top: 7px;
    color: black;
    left: 20px;
}
.formation__info-date .start {
    margin-right: 5px;
}
.formation__info-date .end {
    margin-left: 5px;
}
.formation__info-school {
    display: flex;
}
.formation__info-school .school-adresse {
    margin-left: 10px;
}
</style>