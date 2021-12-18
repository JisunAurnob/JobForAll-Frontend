import React from 'react';

const Jobs = () => {
    return (
        <div>
            <section id="pricing" class="pricing">
                <div class="container">
                    <div class="section-title">
                        <h2>Featured Jobs</h2>
                        </div>
                    <div class="row">

                        <div class="col-lg-3 col-md-6">
                            <div class="box">
                                <span class="freelance"> Freelance</span>
                                <h3>Assistant Network Engineer</h3>
                                <h4><sup>৳</sup>25,000<span> / month</span></h4>
                                <ul>
                                    <li>Knowledge about ISP</li>
                                    <li> Have sound knowledge of all kinds of</li>
                                    <li> Serve as a technical resource for staff on</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Apply!</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div class="box">
                                <span class="advanced">Corporate</span>
                                <h3>C# Developer Needed</h3>
                                <h4><sup>৳</sup>45,000<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Apply!</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div class="box">
                                <span class="freelance">Freelance</span>
                                <h3>Developer Needed (Frontend)</h3>
                                <h4><sup>৳</sup>19,999<span> / month</span></h4>
                                <ul>
                                    <li>Have to develop in 2 months</li>
                                    <li>Needs To Know React</li>
                                    <li>Good At Color Choice</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Apply!</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div class="box">
                                <span class="advanced">Corporate</span>
                                <h3>Customer Executive Needed</h3>
                                <h4><sup>৳</sup>22,000<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Apply!</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="cta" class="cta">
                <div class="container">
                    <div class="text-center">
                        <a class="cta-btn" href="/post/list">Show All Jobs</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Jobs;