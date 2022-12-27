<template>
  <header class="header-section sticky-header d-none d-lg-block">
    <div class="header-wrapper">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col">
            <!-- Start Header Logo -->
            <a href="#" class="header-logo">
              <img src="assets/images/mh.png" alt="" height="80px" />
            </a>
            <!-- End Header Logo -->
          </div>
          <div class="col-auto">
            <!-- Start Header Menu -->
            <ul class="header-nav">
              <li><a href="#">Home</a></li>
              <li class="has-dropdown">
                <a href="#">Service</a>
              </li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <!-- End Header Menu -->
          </div>
          <div class="col">
            <div class="header-btn-link text-end">
              <a href="#" class="btn btn-sm btn-outline-one icon-space-left"
                >Hire Me <i class="icofont-double-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- .....:::::: End Header Section :::::.... -->

  <!-- .....:::::: Start Mobile Header Section :::::.... -->
  <div class="mobile-header d-block d-lg-none">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col">
          <div class="mobile-logo">
            <a href="#"
              ><img src="assets/images/mh.png" height="80px" alt=""
            /></a>
          </div>
        </div>
        <div class="col">
          <div class="mobile-action-link text-end">
            <a
              href="mobile-menu-offcanvas"
              class="offcanvas-toggle offside-menu"
              ><i class="icofont-navigation-menu"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- .....:::::: Start MobileHeader Section :::::.... -->
</template>
