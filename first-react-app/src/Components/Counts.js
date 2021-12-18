import React from 'react';
import { Link } from "react-router-dom";

const Counts = () => {
    return (
        <div>
            <section id="counts" class="counts section-bg">
                <div class="container">

                    <div class="row counters">
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter">13</span>
                            <p>Users</p>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter">22</span>
                            <p>Jobs</p>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">4</span>
                            <p>Admins</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">50</span>
                            <p>Hard Workers</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Counts;