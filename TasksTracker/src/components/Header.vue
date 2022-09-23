<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            v-show="homePage"
            @btn-click="$emit('toggle-add-task')"
            :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'"
        />
    </header>
    <hr />
</template>
<script>
    import Button from './Button'

    export default{
        name: 'Header',

        props: {
            title:String,
            showAddTask: Boolean,
        },
        components: {
            Button,
        },
        
        computed: {
            homePage() {
                if (this.$route.path === '/') {
                    return true
                } else {
                    return false
                }
            },
        },
    }
</script>

<style scoped>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #c4c4c4;
      padding: 10px;
    }
</style>