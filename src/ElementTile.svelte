<script>
export let element = undefined;
export let items = [];

let category = "empty-tile";
if (element !== undefined) {
    category = element.category.replace(/[, ]/g, '-');
}
</script>

<main>
    {#if element !== undefined }
    <a href="/periodensystem-des-schwurbels/element.html?element={element.symbol}">
        <div class="tile {category} { items.length == 0 ? 'empty' : 'has-content' }">
            <span id="symbol"><sup id="number">{element.number}</sup>{element.symbol}</span>
        </div>
    </a>
    {:else}
        <div id="tile" class="tile empty-tile"></div>
    {/if}
</main>

<style>
    a {
        color: white;
    }
    a:hover {
        color: darkblue;
    }

    main {
        font-size: 16pt;
    }

    .tile {
        display: flex;
        width: 48pt;
        height: 48pt;
        margin: 2pt;
        justify-content: center;
        align-items: center;
        background-color: gray;
        flex-direction: column;
    }
    .empty {
        opacity: 0.3;
    }
    .tile:hover {
        background-color: white;
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
        background-color: orange;
    }

    .polyatomic-nonmetal {
        background-color: darkorange;
    }

    .metalloid {
        background-color: deeppink;
    }

    .transition-metal {
        background-color: teal;
    }

    .post-transition-metal {
        background-color: darkviolet;
    }

    .empty-tile {
        background-color: rgba(0, 0, 0, 0);
    }
    .empty-tile:hover {
        background-color: rgba(0, 0, 0, 0);
    }

    

</style>
