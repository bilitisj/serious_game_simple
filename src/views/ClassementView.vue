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
    <h2>Classement</h2>
    <div class="body_game">
        <p>Veuillez classer dans les bonnes familles</p>
        <div class="drop-targets">
            <div class="start">
                <div class="box2">
                    <div class="item" id="pommes" draggable="true">Pomme</div>
                    <div class="item" id="poires" draggable="true">Poire</div>
                    <div class="item" id="harricots" draggable="true">Haricot</div>
                    <div class="item" id="bananes" draggable="true">Banane</div>
                </div>
            </div><!-- .start -->
            <div class="end">
                <div class="box"><h3>Fruits</h3></div>
                <div class="box"><h3>Légumes</h3></div>
            </div><!-- .end -->
        </div><!-- .drop-targets -->
        <button @click="btn_click" >Valider</button>
    </div>
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
    /* Constantes et variables */
    const items = document.querySelectorAll('.item');
    const btn =  document.querySelector('button');
    const boxFruits =  document.querySelector('.box_fruits');
    const boxLegumes =  document.querySelector('.box_legumes');
    const pomme = document.querySelector('#pommes');
    const poire = document.querySelector('#poires');
    const haricot = document.querySelector('#harricots');
    const banane = document.querySelector('#bananes');

    /* draggable element */
    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
    })


    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    /* drop targets */
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter)
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
    });

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    function drop(e) {
        e.target.classList.remove('drag-over');

        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        // add it to the drop target
        e.target.appendChild(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
    }

    // Evenement au click
    const btn_click = (e) =>  {
        e.preventDefault();
        if (boxFruits.contains(pomme) && boxFruits.contains(poire) && boxFruits.contains(banane) && boxLegumes.contains(haricot)) {
            alert('Gagné !')
        } else {
            alert ('Perdu !')
        }
    }
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
    
    // - - - - - J E U X - - - - - 
    h3 {
        font-size: 1rem;
        text-align: center;
    }

    .drop-targets {
        display: flex;
        flex: 1;
        margin: 20px 0;
    }

    .start {
        border: none;
    }
    .end {
        margin-left: 2rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        background: $color-principal-transp;
    }
    .box {
        height: 300px;
        width: 200px;
        padding: 1rem;
        margin: 1rem;
        border-radius: 1rem;
        background: white;
    }


    .drag-over {
        border: dashed 3px red;
    }

    .item {
        height: 75px;
        width: 75px;
        background-color: $color-principal;
        color: white;
        margin-top: 10px;
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-shadow:0px 3px 8px 1px rgba(111, 111, 111, 0.2);
    }

    .hide {
        display: none;
    }

    button {
        display: flex;
        justify-self: center;
        border: none;
        padding:.5rem;
        border-radius: .5rem;
        background:$color-principal;
        box-shadow:0px 3px 8px 3px rgba(111, 111, 111, 0.2);
    }
</style>