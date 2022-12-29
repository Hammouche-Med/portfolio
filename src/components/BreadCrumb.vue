<template>
  <div class="breadcrumb-section section-bg overflow-hidden pos-relative">
    <div class="breadcrumb-shape-top-left"></div>
    <div class="breadcrumb-shape-bottom-right"></div>
    <div class="breadcrumb-box">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="title">{{ title }}</h2>
              <ul class="breadcrumb-link">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li class="active" aria-current="page">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    desc: String,
  },
};
</script>
