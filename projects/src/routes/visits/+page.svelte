<svelte:head>
    <title>Visits</title>
</svelte:head>

<script>
    import { browser } from "$app/environment";
    import { onDestroy } from "svelte";

    export let data;

    if (browser) {
        let interval = setInterval(async () => {
            let result = await fetch("/visits");
            let json = await result.json();
            data.globalVisits = json.globalVisits;
        }, 1000);

        onDestroy(() => {
            clearInterval(interval);
        });
    }
</script>

<main>
    <div class="mainbanner">
        <div id="navbar" class="navbar">
            <a href="/">Home</a>
            <a href="/visits">Website Visits</a>
        </div>
        <article>
            <h1>Visitor Statistics</h1>
            <span>Total Global Visits: {data.globalVisits} <br>
            <p>The amount of times the website has been visited globaly</p></span>
            <span>Your Total Visits: {data.yourVisits} <br>
            <p>The amount of times you have visited the website</p></span>
            <span>Visit Order: {data.id} <br>
            <p>Higher number, newer visitor</p></span>
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
        /* url("./visitmainbanner.jpg") */
        background-size: cover;
        background-position: center;
    }

    #navbar {
        background-color: #333; /* Black background color */
        position: fixed; /* Make it stick/fixed */
        top: 0; /* Stay on top */
        width: 100%; /* Full width */
        transition: top 0.3s; /* Transition effect when sliding down (and up) */

        box-shadow: 0px 1px 10px 6px rgba(0, 0, 0, 0.35);
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
        margin-top: 200px;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(15px);
        width: fit-content;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.367);
        font-weight: bold;

        animation: fadeInAnimation ease-in 1s;
        animation-delay: 0.8s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    article p {
        font-size: 14px;
        font-weight: 500;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
            margin-top: 220px;
        }
        100% {
            opacity: 1;
            margin-top: 200px;
        }
    }
</style>
