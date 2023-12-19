<template>
    <div class="head">
        <!-- v-model双向数据绑定 -->
        <input type="text" v-model="message">
        <button @click="submit">确定</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            message: ''
        }
    },
    methods:{
        // 把数据放入stores
        submit(){
            if(!this.message) return
            // 传入实参
            this.listsAdd(this.message)
            
            this.message=''
        },
        //解构出 listsAdd函数
        ...mapMutations(['listsAdd'])
    }
}
</script>

<style lang="css" scoped>

</style>