<!-- ------------- T E M P L A T E ------------- -->
<template>
  <div class="jouer">
    <h1>Jouer</h1>
    <nav class="nav_jeux">
        <RouterLink to="/qcmUnique">Qcm unique</RouterLink>
        <RouterLink to="/qcmMulti">Qcm multiple</RouterLink>
        <RouterLink to="/challenge">Challenge</RouterLink>
        <RouterLink to="/liaison">Liaison</RouterLink>
        <RouterLink to="/ordre">Ordre</RouterLink>
        <RouterLink to="/classement">Classement</RouterLink>
      </nav>
  </div>
</template>

<!-- ------------- S C R I P T ------------- -->
<script setup>

  import {useGameStore} from '@/stores/game'

  const gameStore = useGameStore()
  console.log(gameStore)


</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">
    // - - - - - Paramètres P R I N C I P A L - - - - - 
    .nav_jeux {
        background: #f4f7f6;
    }
    nav {
        width: 100%;
        font-size: 1rem;
        text-align: center;
        margin-top: 2rem;
        padding: 1rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }
    
    h2 {
        font-size: 1.5rem;
        margin: 1rem 8rem;
    }
</style>
