import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faStarHalfAlt,
  faUser,
  faFilm,
  faAsterisk,
  faLocationArrow,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons"; // fas
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons"; // far
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faPinterest,
  faApple
} from "@fortawesome/free-brands-svg-icons"; // fab
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(
  faStar,
  faStarHalfAlt,
  faUser,
  faFilm,
  faAsterisk,
  faLocationArrow,
  faPhoneAlt
); // fas
library.add(faClock, faEnvelope); // far
library.add(faTwitter, faFacebookF, faGooglePlusG, faPinterest, faApple); // fab

Vue.use(BootstrapVue);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
