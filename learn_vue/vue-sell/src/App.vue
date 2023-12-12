<template>
  <v-header :seller="sellerData"/>
  
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { getSeller } from '@/api'
export default {
  components: {
    'v-header': Header
  },
  data (){
      return {
        // 存储商家信息,给子组件传值
        sellerData: {}
      }
  },
  created() {
    getSeller().then(res => {
      console.log(res);
      this.sellerData = res
    })
  }
}

</script>

<style lang="less">

</style>
