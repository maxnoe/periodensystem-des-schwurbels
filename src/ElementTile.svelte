<script>
export let element = "";
export let category = "";
</script>

<main class="{category}">
    <span id="element">{ element }</span>
</main>

<style>
    #element {
        font-size: 2rem;
    }

    main {
        display: inline-block;
        width: 4rem;
        height: 4rem;
        margin: 5pt;
    }

    .noble-gas {
        background-color: violet;
    }

    .alkali-metal {
        background-color: brown;
    }
    .alkaline-earth-metal {
        background-color: darkred;
    }

    .actinide {
        background-color: darkblue;
    }

    .lanthanide {
        background-color: darkgreen;
    }

    .diatomic-nonmetal {
        background-color: gray;
    }

</style>
