<template>
    <!-- 页面过渡动画 -->
    <transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">店铺名称</h1>
                </div>

            </div>
            <!-- .stop是阻止点击detail时也会点击到header -->
            <div class="detail-close" @click.stop="hideDetail">
                X
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            hideDetail(){ 
                // 子父组件通讯
                //第一个参数是事件名
                this.$emit('hide',false) //emit就是 创建了一个hide事件
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.header-detail{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);
    //添加动画
    //from-to是状态，active是过程
    &.fade-enter-from,&.fade-leave-to{
        opacity: 0;
        background-color: @color-background;
    }
    &.fade-enter-active,&.fade-leave-active{
        transition: all 0.5s ease;
    }
    .detail-wrapper{

    }
    .detail-close{
        position: fixed;
        width: 30px;
        height: 30px;
        bottom: 30px;
        left: 50%;
        margin-left: -15px;
        text-align: center;
        line-height: 30px;
    }
}
</style>