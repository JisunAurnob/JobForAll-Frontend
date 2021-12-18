import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';

// import './assets/vendor/purecounter/purecounter.js';
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import './assets/vendor/glightbox/js/glightbox.min.js';
// import './assets/vendor/isotope-layout/isotope.pkgd.min.js';
// import './assets/vendor/swiper/swiper-bundle.min.js';
// import './assets/vendor/php-email-form/validate.js';
// import  './assets/js/main.js';


import Home from './Components/Home';
import Head from './Components/Head';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import StudentList from './Components/StudentList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StudentDetails from './Components/StudentDetails';
import AdminSignup from './Components/AdminSignup.js';
import Login from './Components/Login.js';
import AdminDashboard from './Components/AdminDashboard.js';
import Posts from './Components/Posts.js';
import PostDetails from './Components/PostDetails.js';
import UpdatePost from './Components/UpdatePost.js';
import AdminProfile from './Components/AdminProfile.js';
import AdminProfileUpdate from './Components/AdminProfileUpdate.js';
import PostDelete from './Components/PostDelete.js';
import Seekers from './Components/Seekers.js';
import Femps from './Components/Femps.js';
import Cemps from './Components/Cemps.js';

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;
// axios.defaults.headers.post["Accept"] = "application/json";
// axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin/signup">
          <AdminSignup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/admin/dashboard">
          <AdminDashboard />
        </Route>

        <Route exact path="/post/list">
          <Posts />
        </Route>

        <Route exact path="/posts/details/:id">
          <PostDetails />
        </Route>

        <Route exact path="/posts/update/:id">
          <UpdatePost />
        </Route>

        <Route exact path="/admin/profile/:id">
          <AdminProfile />
        </Route>

        <Route exact path="/admin/profile/update/:id">
          <AdminProfileUpdate />
        </Route>

        <Route exact path="/post/delete/:id">
          <PostDelete />
        </Route>

        <Route exact path="/seeker/list">
          <Seekers />
        </Route>

        <Route exact path="/femp/list">
          <Femps />
        </Route>

        <Route exact path="/cemp/list">
          <Cemps />
        </Route>
        
        <Route exact path="/students">
          <StudentList />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/student/:name">
          <StudentDetails />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
