<!-- ------------- T E M P L A T E ------------- -->
<template>
  <main>
    <h1>Bienvenue</h1>
    <br>
    <p>Entrez les noms des joueurs</p>
    <input type="text" v-model="newUser" class="input_player"> 
    <button @click="addUser" class="input_player_btn">+</button>

  </main>
</template>

<!-- ------------- S C R I P T ------------- -->
<script setup>


</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">

  // - - - - - c o l o r s - - - - - 
  $color-principal: hsla(160, 100%, 37%, 1);
  $color-principal-transp: rgb(218, 251, 240);
  input {
    padding:.5rem;
    border-radius: .5rem;
    border: 1px solid grey;
  }
  button {
    margin: 1rem;
    justify-content: center;
    padding:.5rem;
    border: none;
    border-radius: .5rem;
    background:$color-principal;
    box-shadow:0px 3px 8px 3px rgba(111, 111, 111, 0.2);
  }
</style>