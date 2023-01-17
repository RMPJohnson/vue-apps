<template>
  <div class="col-md-4">
    <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i :class="icon"></i>
          </span>
      <div class="ts-service-box-content">
        <h4>{{ title }}</h4>
        <p>{{ smalltitle }}</p>
      </div>
    </div>
  </div><!-- Col 2 end -->
</template>

<script>
export default {
  name: "Location",
  props: {
    icon: String,
    title: String,
    smalltitle: String,
  }
}
</script>

<style scoped>

</style>