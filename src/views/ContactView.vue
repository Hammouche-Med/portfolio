<template>
  <HeaderNaviVue />
  <BreadCrumb title="Contact Me" desc="Contact Info" />
  <!-- ...::: Start Contact Section :::... -->
  <div class="contact-section section-gap-tb-165">
    <div class="contact-box pos-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Start Map Area-->
            <div class="map">
              <div class="gmap-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25572.311195983275!2d3.474134525473126!3d36.75763749381717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e68dcc89e5b23%3A0x84e914279405eb13!2sBoumerdes!5e0!3m2!1sen!2sdz!4v1672320270285!5m2!1sen!2sdz"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <!-- End Map Area -->
          </div>
        </div>
        <div class="row flex-lg-row flex-column-reverse">
          <div class="col-lg-4">
            <div class="contact-sidebar-wapper">
              <div class="contact-sidebar">
                <!-- Start Project Sidebar Item -->
                <ul class="contact-sidebar-list-item">
                  <!-- Start contact Single Box -->
                  <li class="contact-sidebar-single-box">
                    <h6 class="title-text">Phone:</h6>
                    <a href="tel:+0123456789" class="link">+2130795306630</a>
                  </li>
                  <!-- End contact Single Box -->
                  <!-- Start contact Single Box -->
                  <li class="contact-sidebar-single-box">
                    <h6 class="title-text">Email:</h6>
                    <a href="mailto:mhammouche995@gmail.com" class="link"
                      >mhammouche995@gmail.com</a
                    >
                  </li>
                  <!-- End contact Single Box -->
                  <!-- Start contact Single Box -->

                  <!-- End contact Single Box -->
                  <!-- Start contact Single Box -->
                  <li class="contact-sidebar-single-box">
                    <h6 class="title-text">Address:</h6>
                    <span class="text"> Boumerdes, Algeria</span>
                  </li>
                  <!-- End contact Single Box -->
                </ul>
                <!-- End Project Sidebar Item -->
              </div>
              <!-- Start Sidebar Widget Single Item - Social Widgets -->
              <div class="sidebar-widget-single-area">
                <h3 class="title">Follow Me</h3>
                <ul class="social-link">
                  <li>
                    <a
                      href="https://web.facebook.com/hammouch.mh/"
                      target="_blank"
                      ><i class="icofont-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mohamed-hammouche-6a4779258"
                      target="_blank"
                      ><i class="icofont-linkedin"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- End Sidebar Widget Single Item - Social Widgets -->
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="contact-form-wrapper section-mt-165">
              <!-- Start Section Content -->
              <div class="content">
                <span class="section-tag">Get In Touch</span>
                <h2 class="title">
                  If you have any porject or need help. Contact me
                </h2>
              </div>
              <!-- End Section Content -->

              <!-- Start Contact Form Box -->
              <div class="contact-form-box">
                <form
                  id="contact-form"
                  class="default-form contact-form"
                  action="assets/mail/contact.php"
                  method="post"
                >
                  <div class="row mb-n6">
                    <div class="col-xl-6 mb-6">
                      <div class="default-form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 mb-6">
                      <div class="default-form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 mb-6">
                      <div class="default-form-group">
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 mb-6">
                      <div class="default-form-group">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-12 mb-6">
                      <div class="default-form-group">
                        <textarea
                          name="message"
                          placeholder="Comment"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12 mb-6">
                      <div class="default-form-group tex-center">
                        <button
                          type="submit"
                          class="btn btn-lg btn-outline-one"
                        >
                          Submit Message
                        </button>
                      </div>
                    </div>
                    <p class="form-messege"></p>
                  </div>
                </form>
              </div>
              <!-- End Contact Form Box -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Contact Section :::... -->
  <BottomFooter />
</template>
<script>
import HeaderNaviVue from "../components/HeaderNavi.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
import BottomFooter from "../components/BottomFooter.vue";
export default {
  name: "ContactView",
  components: {
    HeaderNaviVue,
    BreadCrumb,
    BottomFooter,
  },
};
</script>
