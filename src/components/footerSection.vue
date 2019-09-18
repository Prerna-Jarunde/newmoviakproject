<template>
  <div class="footer-look mt-5">
    <div class="container">
      <div class="row">
        <!-- Footer Top -->
        <!-- Moviak Heading  -->
        <div class="col-md-3">
          <div class="txt text-left blog font-weight-bold">Moviak.com</div>
          <!-- Content Under Moviak Heading  -->
          <div class="txt text-left">
            Moviak is an online platform that allows users to book tickets for movies,
            sporting events and concerts.
            <br />Moviak was founded in 2007.
          </div>
          <!-- Social Media Links And Icons  -->
          <ul class="social-media-links d-flex mt-4">
            <!-- FaceBook Icon  -->
            <li class="social-media-icon facebook-icon">
              <a href="https://facebook.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-1x text-white mx-2" />
              </a>
            </li>

            <!-- Twitter Icon  -->
            <li class="social-media-icon twitter-icon">
              <a href="https://twitter.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" class="fa-1x text-white mx-2" />
              </a>
            </li>

            <!-- GooglePlus Icon  -->
            <li class="social-media-icon googleplusg-icon">
              <a href="https://googleplus.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'google-plus-g']" class="fa-1x text-white mx-2" />
              </a>
            </li>

            <!-- Pinterest Icon  -->
            <li class="social-media-icon pinterest-icon">
              <a href="https://pinterest.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'pinterest']" class="fa-1x text-white mx-2" />
              </a>
            </li>
          </ul>
        </div>
        <!-- Custom Services Section -->
        <div class="col-md-3">
          <!-- Custom Services Heading  -->
          <div class="txt text-left blog font-weight-bold">Custom Services</div>
          <!-- Options Under Custom Services Section  -->
          <div class="txt text-left">Help and Contact</div>
          <div class="txt text-left">Return Policy</div>
          <div class="txt text-left">Feedback</div>
          <div class="txt text-left">Careers</div>
        </div>

        <!-- Recent Posts Section  -->
        <div class="col-md-3">
          <!-- Recent Posts Heading  -->
          <div class="txt text-left blog font-weight-bold">Recent Posts</div>
          <!-- Content Under Recent Posts Section  -->
          <div class="txt text-left">Doctor Strange assemble with the Avengers</div>
          <div class="date text-muted text-left">December 20,2016</div>
          <div class="txt text-left">5 movies to watch this week(29 Sep 2016)</div>
          <div class="date text-muted text-left">December 20,2016</div>
        </div>

        <!-- Contact Us Section  -->
        <div class="col-md-3">
          <!-- Contact Us Heading  -->
          <div class="txt text-left blog font-weight-bold">Contact Us</div>
          <!-- Address  -->
          <div class="txt text-left">
            <!-- Font Awesome Location Arrow  -->
            <span>
              <font-awesome-icon :icon="['fas', 'location-arrow']" class="fa-1x text-white" />
            </span>
            9067 Zurich, Switzerland 87
          </div>

          <!-- Email  -->
          <div class="txt text-left">
            <!-- Font Awesome Envelope Icon  -->
            <span>
              <font-awesome-icon :icon="['far', 'envelope']" class="fa-1x text-white" />
            </span>
            abc@gmail.com
          </div>

          <!-- Phone Number  -->
          <div class="txt text-left phone">
            <!-- Font Awesome Phone-Alt Icon  -->
            <span>
              <font-awesome-icon :icon="['fas', 'phone-alt']" class="fa-1x text-white" />
            </span>
            + 01 234 567 8
          </div>

          <!-- Your Email Address Block  -->
          <div class="mt-2 message-bar">
            <nav class="navbar navbar-light bg-dark">
              <span class="navbar-brand mb-0 h1 text-muted your-email">Your email address</span>
              <!-- Font Awesome Icon For Envelope  -->
              <span>
                <font-awesome-icon :icon="['far', 'envelope']" class="fa-1x text-white" />
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-look {
  background-image: url("../assets/images/footer.png");
  // margin-top: 50px;
  padding: 101px;
  background-repeat: no-repeat;
  background-size: cover;

  .txt {
    color: white;
    padding-top: 10px;
    font-size: 14px;
  }
  .phone {
    color: rgb(255, 136, 0);
  }
  .date {
    font-size: 12px;
  }
  .blog {
    font-size: 18px;
  }
}
.social-media-links {
  padding: 0px;
  list-style: none;
  height: 2rem;
  width: 2rem;

  .social-media-icon {
    border-radius: 24px;
    background-color: grey;
    margin: 2px;
    padding-left: 0px;
    width: 2rem;
    padding-top: 3px;
  }
  .svg:not(:root).svg-inline--fa {
    overflow: visible;
    margin-top: 7px;
  }
}
.your-email {
  font-size: 10px;
}
@media (min-width: 481px) and (max-width: 767px) {
  .bg-look {
    background-image: url("../assets/images/footer.png");
    margin-top: 15px;
    padding: 13px;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .bg-look {
    background-image: url("../assets/images/footer.png");
    margin-top: 21px;
    padding: 10px;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>