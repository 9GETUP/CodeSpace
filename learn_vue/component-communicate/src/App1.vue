<template>
    <div>
        <div class="head">
            <!-- v-model双向数据绑定 -->
            <input type="text" v-model="message">
            <button @click="submit">确定</button>
        </div>
        <!-- 父给子传值 -->
        <List :lists="lists"/>
        <!-- <List :msg="message"/> -->
    </div>
</template>
  
<script>
import List from '@/components/body1/List.vue'
export default {
    components:{
        List
    },
    data() {
        return {
            lists: ['html', 'css'],
            message: '',
        }
    },
    watch:{
        lists(newVal){
            console.log(newVal);
        }
    },
    methods: {
        submit() {
            // console.log(this.message);
            if (!this.message) return
            this.lists.push(this.message)
            this.message = ''
        }
    }
}
</script>
  
<style lang="css" scoped></style>
  