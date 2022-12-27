import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import "@//assets/css/vendor/bootstrap.min.css";
// import "@//assets/css/vendor/icofont.min.css";
// import "@//assets/css/plugins/animate.css";
// import "@//assets/css/plugins/swiper-bundle.min.css";
// import "@//assets/css/plugins/nice-select.css";
// import "@//assets/css/plugins/venobox.min.css";
// import "@//assets/css/vendor/vendor.min.css";
// import "@//assets/css/plugins/plugins.min.css";
// import "@//assets/css/style.css";

// import "@//assets/js/vendor/bootstrap.bundle.min.js";
// import "@//assets/js/vendor/jquery-3.5.1.min.js";
// import "@//assets/js/vendor/jquery-migrate-3.3.0.min.js";
// import "@//assets/js/vendor/modernizr-3.11.2.min.js";
// import "@//assets/js/plugins/swiper-bundle.min.js";
// import "@//assets/js/plugins/jquery.appear.min.js";
// import "@//assets/js/plugins/jquery.nice-select.js";
// import "@//assets/js/plugins/venobox.min.js";
// import "@//assets/js/plugins/jquery.waypoints.js";
// import "@//assets/js/plugins/images-loaded.min.js";
// import "@//assets/js/plugins/isotope.pkgd.min.js";
// import "@//assets/js/plugins/counter.js";
// import "@//assets/js/plugins/ajax-mail.js";
// import "@//assets/js/plugins/material-scrolltop.js";
// import "@//assets/js/main.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
