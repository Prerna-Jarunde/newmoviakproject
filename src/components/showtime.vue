<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Heading for Showtime-->
        <div class="showtime text-left mt-4 font-weight-bolder">Showtime</div>
        <div class="d-flex">
          <div class="mt-2">
            <!-- Heading Of Select A Cinema  -->
            <div class="card-header cinema border-0 text-left font-weight-bolder text-uppercase">
              <!-- Cinema Font Awesome Icon In Select a Cinema Section  -->
              <span>
                <font-awesome-icon :icon="['fas', 'film']" class="fa-1x select-cinema" />
              </span>
              Select A Cinema
            </div>

            <!-- Cinema Options  -->
            <div class>
              <nav class="nav flex-column text-left border-0 mt-1 text-white bg-light">
                <a class="nav-link mt-2" href="#">GV Tampines</a>
                <a class="nav-link mt-2" href="#">GV Plaza</a>
                <a class="nav-link mt-2" href="#">GV Vatond Ketty</a>
              </nav>
            </div>
          </div>

          <!-- Comment Or Description Text Area  -->
          <form>
            <div class="form-group px-2 mt-2">
              <input
                class="form-control form-control-lg bg-light border-0 data"
                type="text"
                placeholder=" "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.showtime {
  color: rgb(255, 136, 0);
  font-size: 25px;
}
.cinema {
  padding-right: 151px;
}
.select-cinema {
  color: rgb(255, 136, 0);
}
.data {
  padding-right: 450px;
  padding-top: 68px;
  margin-left: 7px;
}
.nav-link {
  color: grey;
}
</style>