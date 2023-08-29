<main>
    <h1 id="welcome">Welcome</h1>
    <div class="links-container">
        <p>
            Project <span>Links</span>:
        </p>
        <div class="links">
            <a href="/visits"><button class="button"><span>Website Visits </span></button></a>
        </div>
    </div>
</main>

<style>
    #welcome {
        margin: 100px 50px;
    }

    .links-container {
        display: flex;
        flex-direction: column;
        margin: 100px 50px;
    }

    .links-container p {
        font-size: 18px;
    }

    .links-container p span {
        color: var(--main-color);
    }

    /* Button Style */
    .button {
        border-radius: 4px;
        background-color: var(--main-color);
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 200px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
    }

    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 15px;
        right: -20px;
        transition: 0.5s;
    }

    .button:hover span {
        padding-right: 25px;
    }

    .button:hover span:after {
        opacity: 1;
        right: 0;
    }

    :root {
        --main-color: #f4511e;
    }
</style>