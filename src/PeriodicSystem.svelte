<script>
    import ElementTile from "./ElementTile.svelte"
    import { elements } from "./PeriodicTable.json"
    import data from "./schwurbel.json"

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
        <ElementTile element={element} items={data[element.symbol] !== undefined ? data[element.symbol] : []}  />
        {/if}
        {/each}
    </div>
    {/each}
</main>

<style>
    .row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        align-items: center;
    }
</style>
