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
    <h2>Ordre</h2>
    <div class="body_game">
        <p>Veuillez classer les éléments par ordre</p>
        <ul class="list">
            <li draggable="true">Premier</li>
            <li draggable="true">Second</li>
            <li draggable="true">Troisième</li>
            <li draggable="true">Quatrième</li>
            <li draggable="true">Cinquième</li>
            <button class="list_btn">Valider</button>
        </ul>
    </div>
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
    function slist (target) {
    // (A) SET CSS + GET ALL LIST ITEMS
        target.classList.add("slist");
        let items = target.getElementsByTagName("li"), current = null;

        // (B) MAKE ITEMS DRAGGABLE + SORTABLE
        for (let i of items) {
            // (B1) ATTACH DRAGGABLE
            i.draggable = true;
            
            // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
            i.ondragstart = (ev) => {
                current = i;
                for (let it of items) {
                if (it != current) { it.classList.add("hint"); }
                }
            };

            // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
            i.ondragenter = (ev) => {
                if (i != current) { i.classList.add("active"); }
            };

            // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
            i.ondragleave = () => {
                i.classList.remove("active");
            };

            // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
            i.ondragend = () => { for (let it of items) {
                it.classList.remove("hint");
                it.classList.remove("active");
            }};
        
        // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
            i.ondragover = (evt) => { evt.preventDefault(); };

            // (B7) ON DROP - DO SOMETHING
            i.ondrop = (evt) => {
                evt.preventDefault();
                if (i != current) {
                    let currentpos = 0, droppedpos = 0;
                    for (let it=0; it<items.length; it++) {
                        if (current == items[it]) { currentpos = it; }
                        if (i == items[it]) { droppedpos = it; }
                    }
                    if (currentpos < droppedpos) {
                        i.parentNode.insertBefore(current, i.nextSibling);
                    } else {
                        i.parentNode.insertBefore(current, i);
                    }
                }
            };
        }
    }

    window.addEventListener("DOMContentLoaded", () => {
    slist(document.getElementsById("list"));
    });

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
    
    // - - - - - L I S T E - - - - - 
    .list {
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background: $color-principal-transp; 
        border-radius: 1rem;
        & li {
            margin: .4rem;
            padding: 1rem 5rem;
            background: white;
            color: $color-principal;
            text-align: center;
            border: 2px solid $color-principal;
            border-radius: .5rem;
            list-style-type: none;
            justify-content: center;
        }
        & button {
            margin-top: 3rem;
            width: 5rem;
            justify-content: center;
            padding:.5rem;
            border: none;
            border-radius: .5rem;
            background:$color-principal;
            box-shadow:0px 3px 8px 3px rgba(111, 111, 111, 0.2);
        }
    }
    .slist {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .slist li {
        margin: 10px;
        padding: 15px;
        border: 1px solid #dfdfdf;
        background: #f5f5f5;
    }

    /* (B) DRAG-AND-DROP HINT */
    .slist li.hint {
        border: 1px solid #ffc49a;
        background: #feffb4;
    }
    .slist li.active {
        border: 1px solid #ffa5a5;
        background: #ffe7e7;
    }

</style>