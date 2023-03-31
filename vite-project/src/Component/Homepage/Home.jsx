import React from "react"

import './Home.css'

export default function Home({handleSignIn}){

    const redirectPage = (e) => {
        handleSignIn('Login')
    }
    return(
        <>
            <nav className="nav">
                <div className="home-icon"><i className="gg-home-alt"></i></div>
                <div className="nav-links">Demo</div>
                <div className="nav-links">Blog</div>
                <div className="nav-links">Live</div>
                <div className="nav-links">Help</div>
                <div className="nav-links" onClick={redirectPage}>SignOut</div>
            </nav>
            <header className="intro">
                <div className="intro-head">
                    <p className="intro-head-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam deserunt itaque! Autem doloremque delectus nisi accusamus nam sint saepe explicabo non facere repellendus? Distinctio ea sapiente inventore enim magni.</p>
                </div>
                <div className="intro-img">
                    <img src="\public\home-bkg-images\undraw_Programming_re_kg9v.png" alt="" />
                </div>
            </header>
            <section className="sect-props">
                <div className="props-img">
                    <img src="\public\home-bkg-images\undraw_Team_up_re_84ok.png" alt="" />
                </div>
                <div className="props-head">
                    <p className="props-head-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium iste, reiciendis in sunt quaerat nemo autem neque maxime. Corporis, accusamus id sunt esse neque expedita explicabo soluta suscipit consequatur?</p>
                </div>
            </section>
            <section className="sect-props">
                <div className="props-head">
                    <p className="props-head-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem animi nisi, recusandae, ea vero minus, deleniti unde ex tempore ratione magni non fugit. Nesciunt iste dolorem atque accusantium facere quasi.</p>
                </div>
                <div className="props-img">
                    <img src="\public\home-bkg-images\undraw_Freelancer_re_irh4.png" alt="" />
                </div>
            </section>
            {/* <section className="button-links">
                <button className="home-btn">EXPLORE TUTORIALS</button>
            </section> */}
            <div className="line-layout">
                <hr  className="line-1"/>
                <hr  className="line-2"/>
                <hr  className="line-3"/>
                <hr  className="line-4"/>
            </div>
            <footer>
                {/* <hr /> */}
                <p>this is a footer</p>  
            </footer>

            
        </>
    )
}

