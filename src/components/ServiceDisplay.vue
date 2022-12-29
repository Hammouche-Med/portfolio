<template>
  <div class="service-display-section section-gap-tb-165 pos-relative">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Start Section Content -->
          <div class="section-content">
            <span class="section-tag">My Services</span>
            <h2 class="section-title">Service Provide For My Clients.</h2>
          </div>
          <!-- End Section Content -->
        </div>
      </div>
    </div>

    <!-- Start Service Section Wrapper -->
    <div class="service-display-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="service-display-slider">
              <!-- Slider main container -->
              <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <!-- Start Service Box Single Item -->
                  <div
                    v-for="s in services"
                    :key="s.id"
                    class="service-box-single-item swiper-slide"
                  >
                    <div class="inner-shape inner-shape-top-right"></div>
                    <div class="icon">
                      <img :src="s.icon" alt="" />
                    </div>
                    <h4 class="title">
                      <a href="#">{{ s.title }}</a>
                    </h4>
                    <ul class="list-item">
                      <li v-for="d in s.desc" :key="d">{{ d }}</li>
                    </ul>
                    <div class="inner-shape inner-shape-bottom-right"></div>
                  </div>
                  <!-- End Service Box Single Item -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="service-display-dots">
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- End Service Section Wrapper -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "UI/UX Design",
          icon: "assets/images/icon/service-icon-1.png",
          desc: ["Landing Pages", "User Flow", "Wireframing", "Prototyping"],
        },
        {
          id: 2,
          title: "Development",
          icon: "assets/images/icon/service-icon-2.png",
          desc: [
            "HTML/CSS/JS",
            "Python",
            "PHP",
            "TypeScript",
            "MERN, MEVN, DRF, LARAVEL",
          ],
        },
        {
          id: 3,
          title: "Illustration",
          icon: "assets/images/icon/service-icon-3.png",
          desc: [
            "Character Design",
            "Icon Set",
            "Illustration Guide",
            "Illustration Set",
            "Motion Graphic",
          ],
        },
        {
          id: 4,
          title: "SEO Marketing",
          icon: "assets/images/icon/service-icon-4.png",
          desc: [
            "White Hat SEO",
            "Black Hat SEO",
            "Grey Hat SEO",
            "Negative SEO",
            "On-Page SEO",
          ],
        },
        {
          id: 5,
          title: "Data Analysis",
          icon: "assets/images/icon/service-icon-5.png",
          desc: [
            "Diagnostic Analysis",
            "Predictive Analysis",
            "Prescriptive Analysis",
            "Risk Assessment",
            "Sales Forecasting",
          ],
        },
      ],
    };
  },
};
</script>
