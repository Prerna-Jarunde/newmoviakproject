<template>
  <div class="container">
    <div class="d-flex movies">
      <!-- Image  -->
      <div class="photo">
        <img src="../assets/images/allegiant (1).jpg" alt="image16" />
      </div>
      <!-- Brotherhood Section  -->
      <div class="text-left">
        <div class="brotherhood card-body">
          <h5 class="card-title text-font-weight-bold text-white pt-2">BROTHERHOOD</h5>
          <!-- Notify Badge Heading In  Brotherhood Section -->
          <span class="badge badge-light rate">G</span>
          <!-- Clock Font Awesome Icon In  Brotherhood Section -->
          <span>
            <font-awesome-icon :icon="['far', 'clock']" class="time mx-3" />
            <!-- Timw Duration Text With Icon  -->
            <span class="time font-weight-bold">02hours 10 minutes</span>
          </span>

          <!-- Movie Description options In  Brotherhood Section -->
          <div class="text-white mt-3">
            <div class="d-flex">
              <div class="card-text movie-details font-weight-bold">
                Actor:
                <span class="movie-options font-weight-light">Alexander Cattly,Greta Garbo</span>
              </div>
            </div>

            <div class="card-text movie-details font-weight-bold">
              Director:
              <span class="movie-options font-weight-light">Mac West</span>
            </div>

            <div class="card-text movie-details font-weight-bold">
              Genre:
              <span class="movie-options font-weight-light">Western</span>
            </div>

            <div class="card-text movie-details font-weight-bold">
              Release:
              <span class="movie-options font-weight-light">June 12,2017</span>
            </div>

            <div class="card-text movie-details font-weight-bold">
              Language:
              <span class="movie-options font-weight-light">English</span>
            </div>

            <div class="card-text movie-details font-weight-bold">
              IMDB
              <div class="card-text movie-details font-weight-bold">
                Rating:
                <span class="movie-options font-weight-light">8.5</span>
              </div>
            </div>

            <div class="card-text movie-details font-weight-bold">
              Cinema:
              <span
                class="movie-options font-weight-light"
              >Gv Tampines Gv Plaza GV Vatond Ketty</span>
            </div>
          </div>
        </div>

        <!-- Total Number Of Votes And Social Media Share Options  -->
        <div class="row">
          <div class="col">
            <div class="voteShare mt-3">
              <div class="votesAndShare d-flex">
                <!-- Total Votes Section In Votes And SHare  -->
                <div class="total-votes">
                  <!-- Star Font Awesome Icons For Rating In Votes Section  -->
                  <span>
                    <font-awesome-icon :icon="['fas', 'star']" class="fa-1x text-warning" />
                  </span>

                  <span>
                    <font-awesome-icon :icon="['fas', 'star']" class="fa-1x text-warning" />
                  </span>

                  <span>
                    <font-awesome-icon :icon="['fas', 'star']" class="fa-1x text-warning" />
                  </span>
                  <span>
                    <font-awesome-icon :icon="['fas', 'star']" class="fa-1x text-warning" />
                  </span>
                  <span>
                    <font-awesome-icon :icon="['fas', 'star-half-alt']" class="fa-1x text-warning" />
                  </span>
                  <!-- Total Number Of Votes Text  -->
                  <div class="votes text-muted">140 votes</div>
                </div>
                <!-- Notify Badge Rating In total Number Of votes Section  -->
                <div class="notify-badge rating font-weight-bold text-white">4.4</div>
              </div>
            </div>
          </div>

          <!-- Share Options Of Social Media Links Section -->
          <!-- Social Media Links -->
          <div class="share float-right mt-3">
            <!-- Share Heading  -->
            <div class="social-share font-weight-bold">
              Share:
              <!-- Facebook Icon  -->
              <span>
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-1x mx-1" />
              </span>
              <!-- Twitter Icon  -->
              <span>
                <font-awesome-icon :icon="['fab', 'twitter']" class="fa-1x mx-1" />
              </span>
              <!-- Google PlusG Icon  -->
              <span>
                <font-awesome-icon :icon="['fab', 'google-plus-g']" class="fa-1x mx-1" />
              </span>
              <!-- Pinterest Icon  -->
              <span>
                <font-awesome-icon :icon="['fab', 'pinterest']" class="fa-1x" />
              </span>
            </div>
          </div>
        </div>

        <!-- Synopsis Section  -->
        <div class="synopsis">
          <div class="card-body">
            <!-- Synopsis Heading  -->
            <h5 class="card-title heading font-weight-bolder">Synopsis</h5>

            <!-- Content In Synopsis Section  -->
            <div class="card-text mt-2">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dolor sed viverra ipsum nunc aliquet bibendum enim.
            </div>
            <div class="card-text mb-2">
              Sagittis orci a scelerisque purus semper eget duis.Nulla pharetra diam sit amet nisl suscipit.
              Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.Fusce ut placerat orci nulla.Tristique senectus et netus et malesuada.
            </div>
            <div class="card-text mb-2">
              Tristique senectus et netus et malesuada.Nulla pharetra diam sit amet nisl suscipit.
              Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor.
            </div>
            <div class="card-text mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.Fusce ut placerat orci nulla.
              Pharetra vel.
            </div>
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
.brotherhood {
  //   background-image: linear-gradient(to right, #000000, #808080);
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 25%,
    rgb(0, 0, 0)
  );
}
.movie-options {
  color: whitesmoke;
}
.synopsis {
  font-size: 12px;

  .heading {
    color: rgb(255, 136, 0);
    font-size: 25px;
  }
}
.total-votes {
  margin-left: 17px;
  font-size: 14px;
}
.notify-badge {
  top: 22px;
  background: orange;
  text-align: center;
  font-size: 16px;
  padding: 11px;
  border-radius: 50%;
  margin-left: 17px;
}
.rate {
  padding: 5px;
  background: orange;
  color: white;
  font-size: 12px;
}
.time {
  font-size: 14px;
  margin-left: -13px;
  color: rgb(255, 136, 0);
}

.voteShare::after {
  content: "";
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: #80808026;
  display: inline-block;
  width: 100%;
  margin-left: 20px;
  align-content: center;
}
</style>