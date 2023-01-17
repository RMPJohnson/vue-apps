<template>
  <PageHeader page_title="Contact Us"></PageHeader>
  <section id="main-container" class="main-container">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h2 class="section-title">Reaching our Office</h2>
          <h3 class="section-sub-title">Find Our Location</h3>
        </div>
      </div>
      <div class="row">
        <location
            title="Visit Our Office"
            icon="fa fa-map-marker-alt mr-0"
            smalltitle="25, Mumtaz Market, City Saddar Road, Rawalpindi, Pakistan">
        </location>
        <location
            title="Email Us"
            icon="fa fa-envelope mr-0"
            smalltitle="info@mwp.com.pk">
        </location>

        <location
            title="Call Us"
            icon="fa fa-phone-square mr-0"
            smalltitle="+92 333 44 85 888">
        </location>
      </div><!-- 1st row end -->

      <div class="gap-60"></div>

      <Googlemap></Googlemap>

      <div class="gap-40"></div>

      <div class="row">
        <div class="col-md-12">
          <h3 class="column-title">We love to hear</h3>
          <!-- contact form works with formspree.io  -->
          <!-- contact form activation doc: https://docs.#.com/MWP/contact-form/ -->
          <form id="contact-form" action="#" method="post" role="form">
            <div class="error-container"></div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Name</label>
                  <input class="form-control form-control-name" name="name" id="name" placeholder="" type="text" required="">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control form-control-email" name="email" id="email" placeholder="" type="email" required="">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Subject</label>
                  <input class="form-control form-control-subject" name="subject" id="subject" placeholder="" required="">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control form-control-message" name="message" id="message" placeholder="" rows="10" required=""></textarea>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <img src="images/cap.jpg" class="img-responsive">
              </div>
            </div>
            <div class="text-right"><br>
              <button class="btn btn-primary solid blank" type="submit">Send Message</button>
            </div>
          </form>
        </div>

      </div><!-- Content row -->
    </div><!-- Conatiner end -->
  </section>

  <section class="subscribe no-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="subscribe-call-to-acton">
            <h3>Can We Help?</h3>
            <h4>+92 333 44 85 888</h4>
          </div>
        </div><!-- Col end -->

        <div class="col-md-8">
          <div class="ts-newsletter row align-items-center">
            <div class="col-md-5 newsletter-introtext">
              <h4 class="text-white mb-0">Newsletter Sign-up</h4>
              <p class="text-white">Latest updates and news</p>
            </div>

            <div class="col-md-7 newsletter-form">
              <form action="#" method="post">
                <div class="form-group">
                  <label for="newsletter-email" class="content-hidden">Newsletter Email</label>
                  <input type="email" name="email" id="newsletter-email" class="form-control form-control-lg" placeholder="Your your email and hit enter" autocomplete="off">
                </div>
              </form>
            </div>
          </div><!-- Newsletter end -->
        </div><!-- Col end -->

      </div><!-- Content row end -->
    </div>
    <!--/ Container end -->
  </section>
</template>

<script>
  import PageHeader from "@/components/PageHeader";
  import Googlemap from "@/components/contact/Googlemap";
  import Location from "@/components/contact/Location";
  export default {
      name: "Contact",
      components: {
        PageHeader,
        Googlemap,
        Location

      },
  }
</script>