<template>
  <agile :nav-buttons="false"
         :autoplay-speed="5000"
         :speed="2500"
         fade="fade"
         pause-on-hover="pause-on-hover"
         pause-on-dots-hover="pause-on-dots-hover"
         autoplay="autoplay">
            <div class="slide">
              <div class="banner-carousel-item ">
                <div class="slider-content item1">
                  <div class="container h-75">
                    <div class="row align-items-center h-100">
                      <div class="col-md-12 text-center">
                        <h2 class="slide-title" data-animation-in="slideInLeft">17 Years of excellence in</h2>
                        <h3 class="slide-sub-title" data-animation-in="slideInRight">Construction Industry</h3>
                        <p data-animation-in="slideInLeft" data-duration-in="1.2">
                          <a href="#" class="slider btn btn-primary">Our Services</a>
                          <a href="contact.html" class="slider btn btn-primary border">Contact Now</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="banner-carousel-item ">
                <div class="slider-content text-left item2">
                  <div class="container h-75">
                    <div class="row align-items-center h-100">
                      <div class="col-md-12">
                        <h2 class="slide-title-box" data-animation-in="slideInDown">World Class Service</h2>
                        <h3 class="slide-title" data-animation-in="fadeIn">When Service Matters</h3>
                        <h3 class="slide-sub-title" data-animation-in="slideInLeft">Your Choice is Simple</h3>
                        <p data-animation-in="slideInRight">
                          <a href="#" class="slider btn btn-primary border">Our Services</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="banner-carousel-item ">
                <div class="slider-content text-right item3">
                  <div class="container h-75">
                    <div class="row align-items-center h-100">
                      <div class="col-md-12">
                        <h2 class="slide-title" data-animation-in="slideInDown">Meet Our Engineers</h2>
                        <h3 class="slide-sub-title" data-animation-in="fadeIn">We believe sustainability</h3>
                        <p class="slider-description lead" data-animation-in="slideInRight">We will deal with your failure that determines how you achieve success.</p>
                        <div data-animation-in="slideInLeft">
                          <a href="contact.html" class="slider btn btn-primary" aria-label="contact-with-us">Get Free Quote</a>
                          <a href="about.html" class="slider btn btn-primary border" aria-label="learn-more-about-us">Learn more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </agile>


</template>

<script>
import { VueAgile } from 'vue-agile'
    export default {
        name: 'Banner',
        components: {
          agile: VueAgile,
        }
    }
</script>
