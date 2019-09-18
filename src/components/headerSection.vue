<template>
  <div class="movie-search">
    <div class="container">
      <div class="search row">
        <!--Logo -->
        <!-- <img src="@/assets/images/logo.jpeg" alt="logo" class="txt" > -->

        <!-- Search Bar -->
        <div class="d-flex col-md-6">
          <b-form-input size="sm" class="col-md-6 movie" placeholder="Movie Search..."></b-form-input>
          <button class="button button border-0 font-weight-bold">Go</button>
        </div>

        <!-- Right aligned items -->
        <div class="col-md-6">
          <b-nav class="font-weight-bold">
            <b-nav-item active>HOME</b-nav-item>
            <b-nav-item>MOVIE LAYOUT</b-nav-item>
            <b-nav-item>PAGE SINGLE</b-nav-item>
            <b-nav-item>SHOW TIME</b-nav-item>
            <b-nav-item>TOP-RATED</b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-item {
  a {
    font-size: 14px;
  }
}
.nav-link {
  display: block;
  padding: 0.5rem 0.9rem;
  color: black;
  margin-bottom: -22px;
  margin-right: -5px;
}
.movie {
  border-radius: 3rem;
  padding-left: -7px;
  width: 50rem;
  margin-left: 121px;
}
.search {
  margin: 15px 0px;
  border-radius: 50%;
  .form-inline .form-control {
    display: inline-block;
    width: 375px;
    margin-left: 135px;
    vertical-align: middle;
  }
  .button {
    border-radius: 50%;
    background: rgb(255, 136, 0);
    color: white;
    margin-left: 10px;
  }
}
</style>