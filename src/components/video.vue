<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Heading for Video and Photo-->
        <div class="video text-left mt-4 font-weight-bolder">Video & Photo</div>
        <!-- Options For video and photo share-->
        <div class="d-flex format-options pb-5">
          <!-- Video-->
          <div></div>
          <!-- photo -->
          <div></div>
          <!-- videos and photo list -->
          <div class="row">
            <div
              class="col-md-3"
              v-for="cardcontent in cardcontents"
              v-bind:key="cardcontent.title"
            >
              <div class="w-100 picture mt-3">
                <div>
                  <img :src="cardcontent.image" class="card-img" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from "../assets/images/15.jpg";
import img2 from "../assets/images/16.jpg";
import img3 from "../assets/images/10.jpg";
import img4 from "../assets/images/11.jpg";
export default {
  data() {
    return {
      cardcontents: [
        {
          image: img1
        },
        {
          image: img2
        },
        {
          image: img3
        },
        {
          image: img4
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.video {
  color: rgb(255, 136, 0);
  font-size: 25px;
}
</style>