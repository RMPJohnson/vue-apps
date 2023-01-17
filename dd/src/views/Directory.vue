<template>
<page-header page_title="Directory Listing"></page-header>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "Directory",
  props: {
    page_title: String
  },
  components: {PageHeader}
}
</script>

<style scoped>

</style>