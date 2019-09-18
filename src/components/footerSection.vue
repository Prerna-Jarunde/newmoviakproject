<template>
  <div class="footer-look mt-5">
    <div class="container">
      <div class="row">
        <!-- Footer Top -->
        <!-- Moviak Heading  -->
        <div class="col-md-3">
          <div class="main-title text-left font-weight-bolder">Moviak.com</div>
          <!-- Content Under Moviak Heading  -->
          <div class="sub-title text-left">
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
          <div class="main-title text-left font-weight-bolder">Custom Services</div>
          <!-- Options Under Custom Services Section  -->
          <div class="sub-title text-left">
            <div>Help and Contact</div>
            <div class="mt-2">Return Policy</div>
            <div class="mt-2">Feedback</div>
            <div class="mt-2">Careers</div>
          </div>
        </div>
        <!-- Recent Posts Section  -->
        <div class="col-md-3">
          <!-- Recent Posts Heading  -->
          <div class="main-title text-left font-weight-bolder">Recent Posts</div>
          <!-- Content Under Recent Posts Section  -->
          <div class="sub-title text-left">Doctor Strange assemble with the Avengers</div>
          <div class="date text-muted text-left">December 20,2016</div>
          <div class="sub-title text-left">5 movies to watch this week(29 Sep 2016)</div>
          <div class="date text-muted text-left">December 20,2016</div>
        </div>

        <!-- Contact Us Section  -->
        <div class="col-md-3">
          <!-- Contact Us Heading  -->
          <div class="main-title text-left font-weight-bolder">Contact Us</div>
          <!-- Address  -->
          <div class="sub-title text-left">
            <!-- Font Awesome Location Arrow  -->
            <span>
              <font-awesome-icon :icon="['fas', 'location-arrow']" class="fa-1x" />
            </span>
            9067 Zurich, Switzerland 87
          </div>

          <!-- Email  -->
          <div class="sub-title text-left">
            <!-- Font Awesome Envelope Icon  -->
            <span>
              <font-awesome-icon :icon="['far', 'envelope']" class="fa-1x" />
            </span>
            abc@gmail.com
          </div>

          <!-- Phone Number  -->
          <div class="sub-title text-left phone">
            <!-- Font Awesome Phone-Alt Icon  -->
            <span>
              <font-awesome-icon :icon="['fas', 'phone-alt']" class="fa-1x" />
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
  margin-top: 50px;
  padding: 101px;
  background-repeat: no-repeat;
  background-size: cover;
  .main-title {
    font-size: 23px;
    color: white;
  }
  .sub-title {
    padding-top: 10px;
    font-size: 16px;
    color: white;
  }
  .phone {
    color: rgb(255, 136, 0);
  }
  .date {
    font-size: 12px;
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
}
</style>