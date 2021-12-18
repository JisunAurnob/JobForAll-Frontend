import React, { Component, useEffect } from "react";
import About from "./About";
import Contact from './Contact';
import Counts from "./Counts";
import Jobs from "./Jobs";
const Home = () => {
    useEffect(() => {
        document.title = "Home- Job For All"
      }, [])
    return (
        <div>
            <section id="hero" class="d-flex align-items-center justify-content-center">
                <div class="container position-relative">
                    <h1>Welcome to Job For All</h1>
                    <h2>Are You Unemployed? Are You Seeking For Recruitment? This Is The Right Place For You</h2>
                    <a href="/admin/signup" class="btn-get-started scrollto">SignUp</a>
                </div>
            </section>
            <main id="main">

                <About />  {/* About The Website */}
                
                <Counts /> {/* Total Counts Of Users, Admins, Jobs, Workers */}

                <Jobs /> {/* Showing Latest Posted Jobs */}

                <Contact />  {/* For Users Who Want To Contact US */}

            </main>
        </div>
    )
}

export default Home;