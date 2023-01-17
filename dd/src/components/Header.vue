<template>
    <header id="header" class="header-one">
  <div class="bg-white">
    <div class="container">
      <div class="logo-area">
          <div class="row align-items-center">
            <div class="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a class="d-block" href="index.html">
                  <img loading="lazy"  class="img-responsive" src="images/orign-logo.png" alt="MWp">
                </a>
            </div><!-- logo end -->
  
            <div class="col-lg-9 header-right">
                <ul class="top-info-box">
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Call Us</p>
                          <p class="info-box-subtitle"><a href="tel:(+9) 847-291-4353">+92 333 44 85 888</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Email Us</p>
                          <p class="info-box-subtitle"><a href="mailto:office@MWP.com">info@mwp.com.pk</a></p>
                      </div>
                    </div>
                  </li>
                  <li class="last">
                    <div class="info-box last">
                      <div class="info-box-content">
                          <p class="info-box-title">Global Certificate</p>
                          <p class="info-box-subtitle">ISO 9001:2015</p>
                      </div>
                    </div>
                  </li>
                  <li class="header-get-a-quote">
					  <a class="btn btn-primary" href="contact.html">Get A Quote</a>
                  </li>
				   
				   
                </ul><!-- Ul end -->
            </div><!-- header right end -->
          </div><!-- logo area end -->
  
      </div><!-- Row end -->
    </div><!-- Container end -->
  </div>
  <!-- Navigation Start-->
  <MenuBar></MenuBar>
  <!--/ Navigation end -->
</header>
</template>

<script>
import MenuBar from './MenuBar'; 
    export default {
    name: "Header",
    components: { MenuBar }
}
</script>