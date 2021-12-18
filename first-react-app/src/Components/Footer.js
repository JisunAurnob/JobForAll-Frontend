import React from 'react';

const Footer = () => {
    return(
        <div>
        
        <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Job For All</h3>
            <p>
              House 276 <br/>
              Block B, Road 1<br/>
              Bashundhara R/A, Dhaka <br/><br/>
              <strong>Phone:</strong> +8801767222411<br/>
              <strong>Email:</strong> info@jobforall.com<br/>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Corporate Jobs</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Freelance Jobs</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Give Your Email For Further Updates</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Job For All</span></strong>. All Rights Reserved
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://twitter.com/AurnobKhan1" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/Jisun.Abedin/" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/jisunaurnob/" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/jisun-aurnob-55642619b/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
    </footer>

    </div>
    )
}

export default Footer;