<template>
    <h1>Jouer</h1>
    <nav class="nav_jeux">
        <RouterLink to="/qcmUnique">Qcm unique</RouterLink>
        <RouterLink to="/qcmMulti">Qcm multiple</RouterLink>
        <RouterLink to="/challenge">Challenge</RouterLink>
        <RouterLink to="/liaison">Liaison</RouterLink>
        <RouterLink to="/ordre">Ordre</RouterLink>
        <RouterLink to="/classement">Classement</RouterLink>
    </nav>
    <h2>Qcm Multiple</h2>
    <div class="body_game">
        <form action="" class="form" @submit="form_click">
            <p class="form_question">Sélectionner les légumes dans la liste ci-dessous ?</p>
            <p>(plusieurs réponses possibles)</p>
            <div class="form_inputs">
                <input class="form_inputs-one" type="checkbox" value="poivron" name="name"/>
                <label for="poivron">Poivron</label>
                
                <input class="form_inputs-one" type="checkbox" value="courgette" name="name"/>
                <label for="courgette">Courgette</label>
                
                <input class="form_inputs-one" type="checkbox" value="mangue" name="name" />
                <label for="mangue">Mangue</label>
                
                <input class="form_inputs-one" type="checkbox" value="haricot" name="name"/>
                <label for="haricot">Haricot</label>
            </div>

            <button class="form_btn">Valider</button>
        </form>
    </div>
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
    const form = document.querySelector('.form');
    //let goodAnswer = ['poivron', 'courgette', 'haricot']
    let tableau = [];

    const form_click = (e) =>  {
        e.preventDefault(); 
        const checkboxes = document.getElementsByName('name');
        for(let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
            tableau.push(checkboxes[i].value)
            console.log(tableau)
            }
        }
        if (tableau.includes('poivron') && tableau.includes('courgette') && tableau.includes('haricot') ) {
            alert('Gagné !')
        } else {
            alert ('Perdu !')
        }
    }

</script>

<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">

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
        display: flex;
        justify-content: center;
    }

    // - - - - - f o r m - - - - - 
    .form {
    display: grid;
    margin: 2rem;
    padding: 1rem;
    background: $color-principal-transp; 
    border-radius: 1rem;
    max-width:90%;
    &_question {
        font-weight:800;
    }
    &_inputs {
        margin:1rem 0;
        &-one {
            margin-left:1rem;
            margin-right: .2rem;
        }
    }
    &_btn {
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