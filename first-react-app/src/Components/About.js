import React from 'react';

const About = () => {
    return (
        <div><br/><br/>
            <section id="about" class="about">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-6">
                            <img src='assets/img/about.jpg' class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0">
                            <h3>Hello</h3>
                            <p>
                                Here we create an opportunity for employee and job seekers   
                            </p>
                            <p>
                                Here anyone can offer jobs as well as can get jobs  
                            </p>
                            <div class="row">
                                <div class="col-md-6">
                                    <i class="bx bx-receipt"></i>
                                    <h4>Corporate Jobs</h4>
                                    <p>Corporates can post jobs here</p>
                                    <p>People can easily get corporate jobs from here</p>
                                </div>
                                <div class="col-md-6">
                                    <i class="bx bx-cube-alt"></i>
                                    <h4>Freelance Jobs</h4>
                                    <p>This jobs can be posted by anyone</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About;