<template>
  <TopBar></TopBar>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>



<script>
import TopBar from './components/TopBar';
import Header from './components/Header';
import Banner from './components/Banner.vue';
import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      TopBar,
      Header,
      Footer,
      Banner
    },
}
</script>

