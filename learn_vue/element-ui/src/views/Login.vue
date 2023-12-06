<template>
    <div class="login">
        <div class="login-wrap">
            <div class="item">
                <span>账号：</span>
                <!-- v-model获取用户值,双向绑定-->
                <input type="text" v-model="account">
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="text" v-model="password">
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                account:'admin',
                password:'123'
            }
        },
        methods:{
            login(){
                //console.log(123);

                //获取用户输入的账号密码，再发起请求传给后端
                // 再校验一下
                if(this.account ==='' ||this.password===''){
                    alert('账号或密码不能为空')
                    return 
                }

                //用js控制路由跳转
                //router的push方法,并向目标页面传参（路由带参）四种方式
                //云括号转化变量，方便传参,注意这里路由带了 r
                //this.$router.push(`/home/${this.account}`)
                // this.$router.push({path:'/home',query:{user:this.account}})
                // this.$router.push({name:'home',params:{user:this.account}})
                this.$router.push({path:'/home',hash:`#${this.account}`})
            }
        }
    }
</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaa;
    .login-wrap{
        width: 400px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px #fff;
        padding: 20px;
        //box-sizing: border-box;
        font-size: 30px;
        .item{
            display: flex;
            margin-top: 20px;
            input {
                flex:1;
                padding: 0 10px;
                font-size: 20px;
            }
            button {
                font-size: 26px;
                flex: 1;
                border-radius: 100px;
                border: none;
                background-color: rgb(42, 95, 164);
                color: #fff;
                padding: 5px 0;
                //放在按钮上鼠标变成小手
                cursor: pointer;
            }
        }
    }
}
</style>