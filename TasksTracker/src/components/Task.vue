<template>
    <div @dblclick="$emit('toggle-reminder',task.id)"
     :class="[task.reminder ? 'reminder':'']">
        <h3>{{task.text}} 
            <i @click="$emit('deleteTask',task.id)" class="fa fa-times"></i>
        </h3>
        <p>{{task.day}}</p>
    </div>
</template>
<script>
    export default {
        name : 'Task',
        props: {
            task : Object
        }
    }
</script>

<style scoped>
    i{
        float: right;
    }
    .fa{
        color: red;
        align-items: right;
    }
    div {
        background-color: #f4f4f4;
        margin: 5px 0px;
        padding: 10px 20px;
        cursor: pointer;
    }
    .reminder {
        border-left: 5px solid green;
    }
    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>