<template>
    <div class="body">
        <ul>
          <li v-for="(item,index) in lists" :key="index">{{item}}</li>
        </ul>

        <button @click="changeProps">修改props</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // lists: ['html', 'css'],
            }
        },
        // 用props接收父组件的值
        props: ['lists'],
        methods: {
            changeProps(){
                // this.lists[0] = 'HTML' 不能这样写
            }
        }
    }
</script>

<style lang="css" scoped>

</style>