<script>
    export let data;

    let globalTotalVisits = data.globalVisits;
    let yourVisitOrder = data.id;
    let yourVisitCount = data.yourVisits;
</script>

<main>
    <div class="mainbanner">
        <div id="navbar" class="navbar">
            <a href="/">Home</a>
            <a href="/visits">Website Visits</a>
        </div>
        <article>
            <h1>Visitor Statistics</h1>
            <span>Global Visits: {globalTotalVisits}</span>
            <span>Your Visits: {yourVisitCount}</span>
            <span>Visit Order: {yourVisitOrder}</span>
        </article>
    </div>
</main>

<style>
    main {
        height: 100vh;
    }

    .mainbanner {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: url("./visitmainbanner.jpg");
        background-size: cover;
        background-position: center;
    }

    #navbar {
        background-color: #333; /* Black background color */
        position: fixed; /* Make it stick/fixed */
        top: 0; /* Stay on top */
        width: 100%; /* Full width */
        transition: top 0.3s; /* Transition effect when sliding down (and up) */
    }

    /* Style the navbar links */
    #navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 15px;
        text-decoration: none;

        transition: all 0.2s ease-in-out;
    }

    #navbar a:hover {
        background-color: #ddd;
        color: black;
    }

    article {
        opacity: 0;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: auto;
        margin-top: 250px;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(15px);
        width: fit-content;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.367);
        font-weight: bold;

        animation: fadeInAnimation ease-in 1s;
        animation-delay: .8s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
            margin-top: 270px;
        }
        100% {
            opacity: 1;
            margin-top: 250px;
        }
    }
</style>
