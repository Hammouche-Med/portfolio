<template>
  <main class="main-wrapper">
    <HeaderNaviVue />
    <!--  Start Offcanvas Mobile Menu Section -->
    <div
      id="mobile-menu-offcanvas"
      class="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
    >
      <!-- Start Offcanvas Header -->
      <div class="offcanvas-header text-end">
        <button class="offcanvas-close">
          <i class="icofont-close-line"></i>
        </button>
      </div>
      <!-- End Offcanvas Header -->
      <!-- Start Offcanvas Mobile Menu Wrapper -->
      <MobileMenu />
      <!-- End Offcanvas Mobile Menu Wrapper -->
    </div>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Offcanvas Overlay -->
    <div class="offcanvas-overlay"></div>

    <!-- ...::: Start Hero Section :::... -->
    <HeroSection />
    <!-- ...::: End Hero Section :::... -->

    <!-- ...::: Start Service Display Section :::... -->
    <ServiceDisplay />
    <!-- ...::: End Service Display Section :::... -->

    <!-- ...::: Start Skill Display Section :::... -->
    <SkillService />
    <!-- ...::: End Skill Display Section :::... -->

    <!-- ...::: Start Counter Display Section :::... -->

    <!-- ...::: End Counter Display Section :::... -->

    <!-- ...::: Start Project Display Section :::... -->
    <ProjectDisplay />
    <!-- ...::: End Project Display Section :::... -->

    <!-- ...::: Start Testimonial Display Section :::... -->

    <!-- ...::: End Testimonial Display Section :::... -->

    <!-- ...::: Start Company Logo Display Section :::... -->

    <!-- ...::: End Company Logo Display Section :::... -->

    <!-- ...::: Start Blog Feed Display Section :::... -->

    <!-- ...::: End Blog Feed Display Section :::... -->

    <!-- ...::: Start Footer Section :::... -->
    <BottomFooter />
    <!-- ...::: End Footer Section :::... -->

    <!-- material-scrolltop button -->
    <button class="material-scrolltop" type="button"></button>
  </main>
</template>

<script>
import HeaderNaviVue from "../components/HeaderNavi.vue";
import MobileMenu from "../components/MobileMenu.vue";
import HeroSection from "../components/HeroSection.vue";
import ServiceDisplay from "../components/ServiceDisplay.vue";
import SkillService from "../components/SkillSection.vue";
// import CounterDisplay from "../components/CounterDisplay.vue";
import ProjectDisplay from "../components/ProjectDisplay.vue";
// import TestimonialDisplay from "../components/TestimonialDisplay.vue";
// import LogoDisplay from "../components/LogoDisplay.vue";
// import BlogFeed from "../components/BlogFeed.vue";
import BottomFooter from "../components/BottomFooter.vue";

export default {
  name: "HomeView",
  components: {
    HeaderNaviVue,
    MobileMenu,
    HeroSection,
    ServiceDisplay,
    SkillService,
    // CounterDisplay,
    ProjectDisplay,
    // TestimonialDisplay,
    // LogoDisplay,
    // BlogFeed,
    BottomFooter,
  },
  mounted() {
    const init = document.createElement("script");
    init.setAttribute("src", "/assets/js/main.js");
    init.async = true;
    document.head.appendChild(init);
  },
};
</script>
