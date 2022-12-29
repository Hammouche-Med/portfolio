<template>
  <HeaderNaviVue />
  <BreadCrumb title="Services" desc="Services List" />
  <div class="service-list-section section-gap-tb-165">
    <div class="container">
      <div class="row mb-n6">
        <div
          v-for="s in services"
          :key="s.id"
          class="col-xl-4 col-md-6 col-12 mb-6"
        >
          <!-- Start Service Single Item -->
          <div class="service-box-single-item">
            <div class="inner-shape inner-shape-top-right"></div>
            <div class="icon">
              <img :src="s.icon" alt="" />
            </div>
            <h4 class="title">
              <a href="service-details.html">{{ s.title }}</a>
            </h4>
            <ul class="list-item">
              <li v-for="d in s.desc" :key="d">{{ d }}</li>
            </ul>
            <div class="inner-shape inner-shape-bottom-right"></div>
          </div>
          <!-- End Service Single Item -->
        </div>
      </div>
    </div>
  </div>
  <BottomFooter />
</template>
<script>
import HeaderNaviVue from "../components/HeaderNavi.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
import BottomFooter from "../components/BottomFooter.vue";
export default {
  name: "ServiceView",
  components: {
    BreadCrumb,
    BottomFooter,
    HeaderNaviVue,
  },
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
