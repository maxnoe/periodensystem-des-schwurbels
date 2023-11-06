<script>
import data from "./schwurbel.json";
import ElementTile from "./ElementTile.svelte"
import { elements } from "./PeriodicTable.json"

const params = new URLSearchParams(window.location.search);
const element = params.get("element");
const items = data[element];
const element_data = elements.find((e) => e.symbol == element);

</script>

<main>
    <h1><a href="/">Das Periodensytem des Schwurbels</a></h1>
    <h2>
        <ElementTile element={element_data} items={items}  />
    </h2>

    {#if items === undefined}
    <p>Noch kein Schwurbel eingetragen oder bei Minkorrekt besprochen.</p>
    <p>Gerne einen neuen Schwurbel vorschlagen.</p>
    {:else}
    {#each items as item}
    <div class="card">
        <h3>{item.title}</h3>
        <p>{item.abstract}</p>
        <ul>
            <li>
                Schwurbel-Website: <a href="{item.url}" target="_blank">{item.url}</a>
            </li>
            <li>
                Besprochen in Methodisch Inkorrekt Folge:
                <a href="{item.minkorrekt_url}" target="_blank">{item.schwurbel_der_woche} </a>
            </li>
        </ul>
    </div>
    {/each}
    {/if}
</main>

<style>
.card {
    text-align: left;
}

h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
