<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: ['html', 'css'],
        }
    },
    watch: {
        msg(newVal){
            this.lists.push(newVal)
        }
    },
    
    props:{
        msg: {
            type:String,
            default: ''
        }
    },
}
</script>

<style lang="css" scoped>

</style>