<template>
    <div>
        <div class="head">
        <!-- v-model双向数据绑定 -->
        <input type="text" v-model="message">
        <button @click="submit">确定</button>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message:'',
            }
        },
        methods:{
            submit(){
                if(!this.message) return
                // 将message传给父组件使用
                // 使用emit内置函数
                //第一个是发送的事件名称 供多个父组件订阅：@add="xxx"
                //第二个是抛出的值
                this.$emit('add',this.message)
                this.message=''
            }
        }
    }
</script>

<style lang="css" scoped>

</style>