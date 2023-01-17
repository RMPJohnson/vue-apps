<template>
<PageHeader page_title="About Us"></PageHeader>

<section id="main-container" class="main-container">
  <div class="container">
    <div class="row">
        <div class="col-lg-6">
          <h3 class="column-title" style="background:red; color:white; padding:10px;">Who We Are</h3>
			<p>
			MWP Iron and Steel E Commerce solution is designed and developed especially for iron and steel businesses. This solution is unique in its own kind having special features for iron and steel products selling. MWP is offering the Solution License based packages, a good opportunity for Iron and Steel Merchants and Warehouses, in order to automate and computerized their workings for ease and efficiency .
			</p>
			  <a class="btn btn-primary" href="#" style="background:black;">Post my Business</a>&nbsp; &nbsp;<a class="btn btn-primary" href="#" style="background:maroon;">Post my Project</a>

        </div><!-- Col end -->
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div id="page-slider" class="page-slider small-bg">
            <agile :nav-buttons="false"
                   :autoplay-speed="2500"
                   :speed="1500"
                   fade="fade"
                   :dots="false"
                   pause-on-hover="pause-on-hover"
                   pause-on-dots-hover="pause-on-dots-hover"
                   autoplay="autoplay">
                    <div class="slide">
                      <div class="item" style="background-image:url(images/slider-pages/slide-page1.jpg)">
                        <div class="container">
                          <div class="box-slider-content">
                            <div class="box-slider-text">
                              <h2 class="box-slide-title">Leadership</h2>
                            </div>
                          </div>
                        </div>
                      </div><!-- Item 1 end -->
                    </div>
                    <div class="slide">
                      <div class="item" style="background-image:url(images/slider-pages/slide-page2.jpg)">
                        <div class="container">
                          <div class="box-slider-content">
                            <div class="box-slider-text">
                              <h2 class="box-slide-title">Relationships</h2>
                            </div>
                          </div>
                        </div>
                      </div><!-- Item 1 end -->
                    </div>
                    <div class="slide">
                      <div class="item" style="background-image:url(images/slider-pages/slide-page3.jpg)">
                        <div class="container">
                          <div class="box-slider-content">
                            <div class="box-slider-text">
                              <h2 class="box-slide-title">Performance</h2>
                            </div>
                          </div>
                        </div>
                      </div><!-- Item 1 end -->
                    </div>
            </agile>
          </div><!-- Page slider end-->
        </div><!-- Col end -->
    </div><!-- Content row end -->

  </div><!-- Container end -->
</section><!-- Main container end -->
</template>

<script>
  import PageHeader from "@/components/PageHeader"
  import {VueAgile} from 'vue-agile'

  export default {
    name: 'AboutView',
    components: {
      agile: VueAgile,
      PageHeader:PageHeader
    }
  }
  </script>
  