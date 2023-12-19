<template>
    <!-- 子父组件通信 -->
    <div>
        <!-- @add是订阅add事件 -->
        <Head @add="handle"/>
        <div class="body">
            <ul>
                <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import Head from '@/components/body2/Head.vue'
export default {
    components:{
        Head,
    },
    data() {
        return {
            lists: ['html', 'css'],
            message: '',
        }
    },
    methods:{
        // val是接收值的参数
        handle(val){
            console.log(val);
            this.lists.push(val)
        }
    }
}
</script>
  
<style lang="css" scoped></style>
  