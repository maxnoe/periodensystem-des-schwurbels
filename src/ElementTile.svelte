<script>
export let element = "";
export let color = "";
</script>

<main style="--color: {color}">
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
        background-color: var(--color);
        margin: 5pt;
    }
</style>
