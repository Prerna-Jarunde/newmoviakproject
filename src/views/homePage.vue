<template>
  <div class="home">
    <mainHeader />
    <headerSection />
    <subSection />
    <div class="cardsection">
      <cardSection />
    </div>
    <videoSection />
    <showtime />
    <comment />
    <footerSection />
    <footerEnd />
  </div>
</template>

<script>
import mainHeader from "@/components/mainHeader.vue";
import headerSection from "@/components/headerSection.vue";
import subSection from "@/components/subSection.vue";
import cardSection from "@/components/cardSection.vue";
import videoSection from "@/components/video.vue";
import showtime from "@/components/showtime.vue";
import comment from "@/components/comment.vue";
import footerSection from "@/components/footerSection.vue";
import footerEnd from "@/components/footerEnd.vue";

export default {
  name: "homePage",
  components: {
    mainHeader,
    headerSection,
    subSection,
    cardSection,
    videoSection,
    showtime,
    comment,
    footerSection,
    footerEnd
  }
};
</script>
<style lang="scss" scoped>
.cardsection {
  margin: -200px 30px 0 30px;
}
</style>