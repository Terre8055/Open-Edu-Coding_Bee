import React from "react"

import './Home.css'

export default function Home({handleSignIn}){

    const redirectPage = (e) => {
        handleSignIn('Login')
    }
    return(
        <div>
            <main class="main">
            <div class="nav">
                <div class="home-icon"><i class="gg-home-alt"></i></div>
                <div class="nav-links">Search</div>
                <div class="nav-links">Blog</div>
                <div class="nav-links">Help</div>
                <div class="nav-links" onClick={redirectPage}>LogOut</div>
            </div>
            <header>
                <h1 class="intro">
                the #1 software engineering platform for young and aspiring engineers
                like you to develop industry practice
                </h1>
                <br />
                <h3 class="intro-list"><i class="gg-check-o"></i>self-paced</h3>
                <br />
                <h3 class="intro-list"><i class="gg-check-o"></i>dynamic</h3>
                <br />
                <h3 class="intro-list"><i class="gg-check-o"></i>informative</h3>
                <br />
                <h3 class="intro-list">
                <i class="gg-check-o"></i>24/7 mentoring support
                </h3>
                {/* <div class="iconify">
                <i class="gg-push-chevron-down-o"></i>
                </div> */}
            </header>
            </main>
            <article class="portfolio">
            <h1 class="p-intro">
                we prioritise hardwork and guarantee a wide range of tech stack
            </h1>
            <div class="p-serv">
                <div class="com-01">
                <i class="gg-code"></i>
                <img
                    id="img"
                    src="/icons8-javascript-logo-512.png"
                    alt="JS icon"
                />

                <img id="img" src="/html.png" alt="html icon" />

                <img id="img" src="/icons8-css3-100.png" alt="css icon" />
                </div>
                <div>
                <div class="com-01">
                    <i class="gg-code"></i>
                    <img src="/icons8-react-200.png" alt="React icon" />

                    <img src="/icons8-angularjs-144.png" alt="angular icon" />

                    <img src="/icons8-vue.js48.png" alt="vue icon" />
                </div>
                </div>
                <div>
                <div class="com-01"><i class="gg-code"></i></div>
                <img src="/icons8-node-js-144.png" alt="nodejs icon" />

                <img src="/icons8-express-js-100.png" alt="express icon" />

                <img src="/icons8-postgresql-144.png" alt="postgres icon" />
                </div>
            </div>
            <footer>
                <h3>openEdu-Ghana <i class="gg-copyright"></i> 2023</h3>
                {/* <a href="https://github.com/Terre8055" target="_blank"
                ><i class="fa-brands fa-github"></i
                ></a> */}
            </footer>
            </article>
        </div>
    )
}

