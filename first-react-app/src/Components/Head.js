import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom"

const Head = () => {
  var user;
  let history = useHistory();
  var isLoggedOut = true;
  var aa = JSON.parse(localStorage.getItem('user'));
  const logout = () => {
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));

      var obj = { id: user.tokenId };
      if (axios.post("/logout", obj)) {
        localStorage.removeItem('user');
        history.push("/"); //To redirect to Homepage
        window.setTimeout(function(){window.location.reload()},200);
      }
    }
    else {
      history.push("/");
    }
    isLoggedOut = true;
  }
  
  if (localStorage.getItem('user')) {
    isLoggedOut = false;
  }

  return (
    <div>

      <header id="header" class="fixed-top header">
        <div class="container d-flex align-items-center justify-content-between">

          <h1 class="logo"><a href="/">Job For All</a></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><Link to="/" class="nav-link scrollto">Home</Link></li>
              <li><a class="nav-link scrollto" href="/about">About Us</a></li>
              <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
              {isLoggedOut && (<li class="dropdown"><a href="#"><span>SignUp</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/admin/signup">Admin</a></li>
                  <li><a href="#">Job Seeker</a></li>
                  <li><a href="#">Freelance Employer</a></li>
                  <li><a href="#">Corporate Employer</a></li>
                </ul>
              </li>)}
              
              {isLoggedOut && (<li><Link to="/login" class="nav-link scrollto">Login</Link></li>)}
              {!isLoggedOut && (<li><Link to="/admin/dashboard">Dashboard</Link></li>)}
              {!isLoggedOut && (<li class="dropdown"><a href="#"><span>Manage</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/post/list">Posts</a></li>
                  <li><a href="/femp/list">Freelance Employer</a></li>
                  <li><a href="/cemp/list">Corporate Employer</a></li>
                  <li><a href="/seeker/list">Job Seeker</a></li>
                  <li><a href="#">Queries</a></li>
                </ul>
              </li>)}
              {!isLoggedOut && (<li><Link to={"/admin/profile/"+aa.userId}>Welcome {aa.username} </Link></li>)}
              {!isLoggedOut && (<li><a class="nav-link scrollto" href="#logout" onClick={logout}>Logout</a></li>)}
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Head;