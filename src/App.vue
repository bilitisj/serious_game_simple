<!-- ------------- S C R I P T ------------- -->
<script setup>
  import { ref, computed } from 'vue'
  import { RouterLink,RouterView } from 'vue-router';

  import {useGameStore} from '@/stores/game'

  const gameStore = useGameStore()
  gameStore.getDatasApi()
  
  const members = ['Pierre', 'Jean', 'Charles']
  gameStore.addMembers(members)
  
  const listMembers = computed(() => { return gameStore.allJoueurs})
  
  const newUser = ref('')
  
  const addUser = () => {
    gameStore.addAMember(newUser.value)
  }

  const parentjoueur = (value) => {
    alert('click in joueur num ' + value)
  }
</script>

  <!-- ------------- T E M P L A T E ------------- -->
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/jouer">Jouer</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<!-- ------------- S T Y L E ------------- -->

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
