<template>
  <div id="banner-area" class="banner-area" style="background-image:url(images/banner/banner1.jpg)">
    <div class="banner-text">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-heading">
              <h1 class="banner-title">{{page_title}}</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <router-link  to="/">Home</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/">Company</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">{{page_title}}</li>
                </ol>
              </nav>
            </div>
          </div><!-- Col end -->
        </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div><!-- Banner area end -->
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    page_title: String
  }
}
</script>

<style scoped>

</style>