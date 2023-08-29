

<script>

    export let data;

    let globalTotalVisits = data.globalVisits;
    let yourVisitOrder = data.id;
    let yourVisitCount = data.yourVisits;

</script>

<article>

    <span>Global Visits: {globalTotalVisits}</span>
    <span>Your Visits: {yourVisitCount}</span>
    <span>Visit Order: {yourVisitOrder}</span>

</article>

<style>

    article {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: auto;
        margin-top: 250px;
        background: white;
        width: fit-content;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.367);
        font-weight: bold;
    }
    
</style>