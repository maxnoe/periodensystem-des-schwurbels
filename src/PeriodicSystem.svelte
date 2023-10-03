<script>
    import ElementTile from "./ElementTile.svelte"
    import { elements } from "./PeriodicTable.json"

    let grid = {};
    elements.forEach((element) => {
        if (grid[element.ypos - 1] === undefined) {
            grid[element.ypos - 1] = {};
        }
        grid[element.ypos - 1][element.xpos - 1] = element;
    });

    console.log(grid);
</script>

<main>
    {#each Array(10) as _, ypos}
    <div class="row">
        {#each Array(18) as _, xpos}
        {#if grid[ypos][xpos] === undefined}
        <ElementTile />
        {:else}
        {@const element = grid[ypos][xpos]}
        <ElementTile element="{element.symbol}" category="{element.category.replace(/ /g, '-')}" />
        {/if}
        {/each}
    </div>
    {/each}
</main>

<style>
    main {
        width: 100rem;
    }
    .row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        align-items: center;
    }
</style>
