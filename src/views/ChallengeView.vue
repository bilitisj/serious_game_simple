<!-- ------------- T E M P L A T E ------------- -->
<template>
    <h1>Jouer</h1>
    <nav class="nav_jeux nav">
        <RouterLink to="/qcmUnique">Qcm unique</RouterLink>
        <RouterLink to="/qcmMulti">Qcm multiple</RouterLink>
        <RouterLink to="/challenge">Challenge</RouterLink>
        <RouterLink to="/liaison">Liaison</RouterLink>
        <RouterLink to="/ordre">Ordre</RouterLink>
        <RouterLink to="/classement">Classement</RouterLink>
    </nav>
    <h2>Challenge</h2>
        <div class="body_game">
        <p>Question  bla bla bla... ???</p>
        <div class="buttons">
            <button>Pas ok</button>
            <button>Ok</button>
        </div>

    </div>
</template>


<!-- ------------- S C R I P T ------------- -->
<script>

</script>

<!-- ------------- S T Y L E ------------- -->
<style lang="scss">
    // - - - - - c o l o r s - - - - - 
    $color-principal: hsla(160, 100%, 37%, 1);
    $color-principal-transp: rgb(218, 251, 240);

    // - - - - - Paramètres P R I N C I P A L - - - - - 
    .nav_jeux {
        background: #f4f7f6;
    }
    h2 {
        font-size: 1.5rem;
        margin: 1rem 8rem;
    }
    // - - - - - B o d y  G a m e - - - - - 
    .body_game {
        display: grid;
        justify-content: center;
        & p {
            text-align: center;
            margin-bottom: 1rem;
            font-weight:800;
        }

    }
    
    .buttons {
        display: flex;
        justify-content: space-around;

        & button {
            display: flex;
            justify-self: center;
            border: none;
            padding:.5rem;
            border-radius: .5rem;
            background:$color-principal;
            box-shadow:0px 3px 8px 3px rgba(111, 111, 111, 0.2);
        }
    }

</style>