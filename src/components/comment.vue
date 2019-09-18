<template>
  <div class="container">
    <!-- Heading for Write A Comment-->
    <div class="comment text-left mt-5 text-uppercase font-weight-bolder">Write A Comment</div>

    <!-- Required Fields Compulsory Notification Text  -->
    <form>
      <div class="form-group text-left">
        <small id="emailHelp" class="form-text text-muted text-left">
          Your email address will not be published.Required Fields are marked.
          <!-- Asterisk Font Awesome Icon  -->
          <span class="asterisk">
            <font-awesome-icon :icon="['fas', 'asterisk']" class="text-danger mb-1" />
          </span>
        </small>

        <!-- Comment Text Area  -->
        <div class="form-group mt-3">
          <!-- Heading For Comment  -->
          <label for="exampleFormControlTextarea1">Comment</label>
          <!-- Asterisk Font Awesome Icon  -->
          <span class="asterisk">
            <font-awesome-icon :icon="['fas', 'asterisk']" class="mx-1 mb-1 text-danger" />
          </span>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>

      <!-- Form Details Section  -->
      <div class="form-row">
        <div class="col-md-4">
          <!-- Name Details  -->
          <!-- Name Heading  -->
          <label for="formGroupExampleInput" class="details">Name</label>
          <!-- Asterisk Font Awesome Icon  -->
          <span class="asterisk">
            <font-awesome-icon :icon="['fas', 'asterisk']" class="mx-1 mb-1 text-danger" />
          </span>

          <!-- Email Details  -->
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-4">
          <!-- Email Heading  -->
          <label for="formGroupExampleInput" class="details">Email</label>
          <!-- Asterisk Font Awesome Icon  -->
          <span class="asterisk">
            <font-awesome-icon :icon="['fas', 'asterisk']" class="mx-1 mb-1 text-danger" />
          </span>

          <!-- Website Details  -->
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-4">
          <!-- Website Heading-->
          <label for="formGroupExampleInput" class="details">Website</label>
          <input type="text" class="form-control" />
        </div>
      </div>
    </form>

    <!-- Post Comment Button  -->
    <button
      type="button"
      class="btn btn-warning float-right mt-2 font-weight-bolder post-comment"
    >Post Comment</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.comment {
  border-bottom: 5px solid rgb(255, 136, 0);
  width: 22%;
  color: rgb(255, 136, 0);
  font-size: 25px;
}
// .comment::after {
//   content: "";
//   border-bottom-style: solid;
//   border-bottom-width: thick;
//   border-bottom-color: rgb(255, 136, 0);
//   display: inline-block;
//   width: 15%;
// }
.asterisk {
  font-size: 5px;
}
// .details {
//   margin-left: -300px;
// }
.post-comment {
  background: rgb(255, 136, 0);
  color: white;
}
// .post-comment::before {
//   content: "";
//   border-bottom-style: solid;
//   border-bottom-width: medium;
//   border-bottom-color: #80808026;
//   display: inline-block;
//   width: 100%;
//   margin-left: 20px;
//   align-content: center;
// }
</style>