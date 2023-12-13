<template>
  <span class="support-icon" :class="iconClass"></span>
</template>

<script>
  //父子组件的通讯
  export default {
    //接收
    props: {
      // 该组件作为子组件 接收 父组件传进来的值
      size: {
        type: String, //代表type的类型
        default: '1' //默认值为1
      },
      type: {
        type: Number,
        default: 0
      }
    },
    computed: { // 计算属性中的函数名直接当成数据源使用，不用调用
      iconClass() {
        const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        //通过父组件传的值，决定span使用谁的样式
        return `icon-${this.size} ${classMap[this.type]}`  //模板字符串，反引号
      } 
    }
  }
</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';
.support-icon{
  display: inline-block;
  background-repeat: no-repeat;
}
.icon-1{
  width: 12px;
  height: 12px;
  background-size: 100% 100%;
  &.decrease{
    .bg-image('decrease_1')
  }
  &.discount{
    .bg-image('discount_1')
  }
  &.special{
    .bg-image('special_1')
  }
  &.invoice{
    .bg-image('invoice_1')
  }
  &.guarantee{
    .bg-image('guarantee_1')
  }
}
.icon-2{
  width: 16px;
  height: 16px;
  background-size: 100% 100%;
  &.decrease{
    .bg-image('decrease_2')
  }
  &.discount{
    .bg-image('discount_2')
  }
  &.special{
    .bg-image('special_2')
  }
  &.invoice{
    .bg-image('invoice_2')
  }
  &.guarantee{
    .bg-image('guarantee_2')
  }
}

.icon-3{
  width: 12px;
  height: 12px;
  background-size: 100% 100%;
  &.decrease{
    .bg-image('decrease_3')
  }
  &.discount{
    .bg-image('discount_3')
  }
  &.special{
    .bg-image('special_3')
  }
  &.invoice{
    .bg-image('invoice_3')
  }
  &.guarantee{
    .bg-image('guarantee_3')
  }
}

.icon-4{
  width: 16px;
  height: 16px;
  background-size: 100% 100%;
  &.decrease{
    .bg-image('decrease_4')
  }
  &.discount{
    .bg-image('discount_4')
  }
  &.special{
    .bg-image('special_4')
  }
  &.invoice{
    .bg-image('invoice_4')
  }
  &.guarantee{
    .bg-image('guarantee_4')
  }
}
</style>