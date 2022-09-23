<template>
    <div class="footer">
        <p>&copy; 2022 copyright protected. </p>
        <router-link to="/">Home</router-link> &nbsp;
        <router-link to="/about">About Us</router-link>
    </div>
</template>
<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    a{
        color: #333;
    }
    .footer {
       
        text-align: center;
        background-color: #c4c4c4;
        padding: 20px 20px
    }
</style>