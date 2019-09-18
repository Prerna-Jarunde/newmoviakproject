<template>
  <header>
    <div class="main-header">
      <div class="container">
        <div class="row">
          <!-- VIP Sweepstakes part  -->
          <div class="text">
            <div class="float-left font-weight-bold vip">
              <!-- Apple Font Awesome Icon In VIP Sweepstakes part  -->
              <span>
                <font-awesome-icon :icon="['fab', 'apple']" class="fa-1x mx-1" />
              </span>VIP SWEEPSTAKES
            </div>
          </div>
          <!-- Shopping Spree part  -->
          <div class="text1">
            <div class="font-weight-bold shopping">$5000 SHOPPING SPREE</div>
          </div>
          <!-- Join Movies Part  -->
          <div class="text2">
            <div
              class="font-weight-normal checkout"
            >Join Movies VIP for a chance to win.Don't forget to join during checkout.</div>
          </div>
          <!-- Login Part  -->
          <div class="login">
            <div class="float-right log">
              <!-- User Font Awesome Icon in Login  -->
              <span>
                <font-awesome-icon :icon="['fas', 'user']" class="fa-1x mx-1" />
              </span>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-header {
  background: black;
  // margin-top: 10px;
}
.text {
  background: rgb(202, 160, 221);
  display: block;
  color: white;
  margin-left: 13px;
  font-size: 10px;
  text-align: center;
  .vip {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}
.text1 {
  color: orange;
  margin-left: 10px;
  font-size: 10px;
  .shopping {
    margin-top: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}
.text2 {
  color: grey;
  margin-left: 10px;
  .checkout {
    margin-top: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 10px;
  }
}
.login {
  color: grey;
  text-align: right;
  margin-left: 90px;
  .log {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 10px;
    margin-left: 23rem;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .login {
    margin-left: 15rem;
    margin-top: -3rem;
  }
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .login {
    margin-left: 30rem;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
  .login {
    margin-left: -18rem;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  //CSS
}
</style>