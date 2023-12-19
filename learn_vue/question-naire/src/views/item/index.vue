<template>
  <div>
    <ItemContainer parent-component="item" />
  </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    ItemContainer
  },
  created() {
    this.getQuestionListAction()
  },
  methods:{
    //引入仓库的方法
    ...mapActions(['getQuestionListAction'])
  }
}
</script>

<style lang="less" scoped>

</style>