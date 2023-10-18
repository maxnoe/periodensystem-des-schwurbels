<script>
import data from "./schwurbel.json";

const params = new URLSearchParams(window.location.search);
const element = params.get("element");
const items = data[element];

</script>

<main>
    <h1><a href="/">Das Periodensytem des Schwurbels</a></h1>
    <h2>{ element }</h2>

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
                <a href="{item.url}" target="_blank">Schwurbel-Website</a>
            </li>
            <li>
                <a href="{item.minkorrekt_url}">
                    Besprochen in Methodisch Inkorrekt Folge {item.schwurbel_der_woche}
                </a>
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
</style>
