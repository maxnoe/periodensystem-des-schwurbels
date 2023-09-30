<script>
    import ElementTile from "./ElementTile.svelte"
</script>

<main>
    <div class="row">
        <ElementTile element="H" color="green"/>
        {#each Array(17) as _}
        <ElementTile />
        {/each}
        <ElementTile element="He" color="violet"/>
    </div>
    <div class="row">
        <ElementTile element="Li" color="red"/>
        <ElementTile element="Be" color="pink"/>
        {#each Array(11) as _}
        <ElementTile />
        {/each}
        <ElementTile element="B" color="gray" />
        <ElementTile element="C" color="green" />
        <ElementTile element="N" color="green" />
        <ElementTile element="O" color="green" />
        <ElementTile element="F" color="yellow" />
        <ElementTile element="Ne" color="violet" />
    </div>
    <div class="row">
        <ElementTile element="Na" color="red"/>
        <ElementTile element="Mg" color="pink"/>
        {#each Array(11) as _}
        <ElementTile />
        {/each}
        <ElementTile element="Al" color="lightgray" />
        <ElementTile element="Si" color="gray" />
        <ElementTile element="P" color="green" />
        <ElementTile element="S" color="green" />
        <ElementTile element="Cl" color="yellow" />
        <ElementTile element="Ar" color="violet" />
    </div>
    <div class="row">
        <ElementTile element="K" color="red"/>
        <ElementTile element="Ca" color="pink"/>
        <ElementTile element="Sc" color="cyan"/>
        <ElementTile />
        <ElementTile element="Ti" color="cyan"/>
        <ElementTile element="V" color="cyan"/>
        <ElementTile element="Cr" color="cyan"/>
        <ElementTile element="Mn" color="cyan"/>
        <ElementTile element="Fe" color="cyan"/>
        <ElementTile element="Co" color="cyan"/>
        <ElementTile element="Ni" color="cyan"/>
        <ElementTile element="Cu" color="cyan" />
        <ElementTile element="Zn" color="cyan" />
        <ElementTile element="Ga" color="lightgray" />
        <ElementTile element="Ge" color="gray" />
        <ElementTile element="As" color="gray" />
        <ElementTile element="Se" color="gray" />
        <ElementTile element="Br" color="yellow" />
        <ElementTile element="Kr" color="violet" />
    </div>
    <div class="row">
        <ElementTile element="Rb" color="red"/>
        <ElementTile element="Sr" color="pink"/>
        <ElementTile element="Y" color="cyan"/>
        <ElementTile />
        <ElementTile element="Zr" color="cyan"/>
        <ElementTile element="Nb" color="cyan"/>
        <ElementTile element="Mo" color="cyan"/>
        <ElementTile element="Tc" color="cyan"/>
        <ElementTile element="Ru" color="cyan"/>
        <ElementTile element="Rh" color="cyan"/>
        <ElementTile element="Pd" color="cyan"/>
        <ElementTile element="Ag" color="cyan" />
        <ElementTile element="Cd" color="cyan" />
        <ElementTile element="In" color="lightgray" />
        <ElementTile element="Sn" color="gray" />
        <ElementTile element="Sb" color="gray" />
        <ElementTile element="Te" color="gray" />
        <ElementTile element="I" color="yellow" />
        <ElementTile element="Xe" color="violet" />
    </div>
    <div class="row">
        <ElementTile element="Cs" color="red"/>
        <ElementTile element="Ba" color="pink"/>
        <ElementTile element="La" color="cyan"/>
        <ElementTile color="white"/>
        <ElementTile element="Hf" color="cyan"/>
        <ElementTile element="Ta" color="cyan"/>
        <ElementTile element="W" color="cyan"/>
        <ElementTile element="Re" color="cyan"/>
        <ElementTile element="Os" color="cyan"/>
        <ElementTile element="Ir" color="cyan"/>
        <ElementTile element="Pt" color="cyan"/>
        <ElementTile element="Au" color="cyan" />
        <ElementTile element="Hg" color="cyan" />
        <ElementTile element="Tl" color="lightgray" />
        <ElementTile element="Pb" color="gray" />
        <ElementTile element="Bi" color="gray" />
        <ElementTile element="Po" color="gray" />
        <ElementTile element="At" color="yellow" />
        <ElementTile element="Rn" color="violet" />
    </div>
    <div class="row">
        <ElementTile element="Fr" color="red"/>
        <ElementTile element="Ra" color="pink"/>
        <ElementTile element="Ac" color="cyan"/>
        <ElementTile color="white"/>
        <ElementTile element="Rf" color="cyan"/>
        <ElementTile element="Db" color="cyan"/>
        <ElementTile element="Sg" color="cyan"/>
        <ElementTile element="Bh" color="cyan"/>
        <ElementTile element="Hs" color="cyan"/>
        <ElementTile element="Mt" color="cyan"/>
        <ElementTile element="Ds" color="cyan"/>
        <ElementTile element="Rg" color="cyan" />
        <ElementTile element="Cn" color="cyan" />
        <ElementTile element="Nh" color="lightgray" />
        <ElementTile element="Fl" color="gray" />
        <ElementTile element="Mc" color="gray" />
        <ElementTile element="Lv" color="gray" />
        <ElementTile element="Ts" color="yellow" />
        <ElementTile element="Og" color="violet" />
    </div>
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
