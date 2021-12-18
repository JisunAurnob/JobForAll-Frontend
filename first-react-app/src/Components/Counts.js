import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Counts = () => {
      const[countData, setMessages] = useState([]);
      useEffect(()=>{
        axios.get("home/counts")
        .then(resp=>{
        console.log(resp.data);
        setMessages(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    return (
        <div>
            <section id="counts" class="counts section-bg">
                <div class="container">

                    <div class="row counters">
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end={countData.userCount} data-purecounter-duration="1" class="purecounter">{countData.userCount}</span>
                            <p>Total Users</p>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end={countData.posts} data-purecounter-duration="1" class="purecounter">{countData.posts}</span>
                            <p>Jobs</p>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end={countData.cemps} data-purecounter-duration="1" class="purecounter">{countData.cemps}</span>
                            <p>Corporates</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end={countData.femps} data-purecounter-duration="1" class="purecounter">{countData.femps}</span>
                            <p>Freelance Employers</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Counts;