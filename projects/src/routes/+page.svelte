<main>
    <div class="mainbanner">
        <div id="navbar" class="navbar">
            <a href="/">Home</a>
            <a href="/visits">Website Visits</a>
        </div>
        <article>
            <h1>Home Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quibusdam est voluptas voluptatem esse, sequi, consequuntur nobis voluptates rerum impedit doloremque quas vero nesciunt consequatur! Tempora expedita nemo ab libero.
            </p>
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
        background: url("./mainbanner.jpg");
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
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: auto;
        margin-top: 400px;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(15px);
        width: fit-content;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.367);
        font-weight: bold;

        animation: fadeInAnimation ease-in 1s;
        animation-delay: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
            margin-top: 420px;
        }
        100% {
            opacity: 1;
            margin-top: 400px;
        }
    }
</style>
