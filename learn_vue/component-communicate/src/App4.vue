<template>
    <!-- 面对组件 嵌套，使用 Vuex（类似库）
        实现任意组件间数据源共享 -->
    <div>
        <Head />
        <List />
    </div>
</template>
  
<script>
import Head from '@/components/body4/Head.vue'
import List from '@/components/body4/List.vue'
export default {
    components:{
        Head,
        List
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>
  
<style lang="css" scoped></style>
  