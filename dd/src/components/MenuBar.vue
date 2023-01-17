<template>
    <div class="site-navigation">
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-dark p-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div id="navbar-collapse" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about">About Us</router-link> 
                            </li>
                        
                        <li class="nav-item">
                          <router-link class="nav-link" to="/directory">Directory</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/marketplace">Marketplace</router-link>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="reg.html">Registration</a></li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact Us</router-link>
                          </li>
                        <li class="nav-item"><a class="nav-link" href="dom.html">Directory on Map</a></li>	
                        <li class="nav-item"><a class="nav-link" href="revr.html">Reviews & Ratings</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!--/ Col end -->
            </div>
            <!--/ Row end -->

            <div class="nav-search">
            <span id="search"><i class="fa fa-search"></i></span>
            </div><!-- Search end -->

            <div class="search-block" style="display: none;">
            <label for="search-field" class="w-100 mb-0">
                <input type="text" class="form-control" id="search-field" placeholder="Type what you want and enter">
            </label>
            <span class="search-close">&times;</span>
            </div><!-- Site search end -->
        </div>
    <!--/ Container end -->

  </div>
</template>

<script>
    export default {
        name: 'MenuBar'
    }
</script>