做一个登录页面和首页
初始less
使用ui框架，注意ui框架和vue.js框架完全不同，两者无关系

# 路由传参（4种）
- （第二种最常用）
1. this.$router.push(`/home/${this.account}`)  
    需要在路由配置中声明该路径可以携带参数： '/home/:user'
2. this.$router.push({path:'/home',query:{user:this.account}})  
    它会将参数以？的形式拼接在url中
3. this.$router.push({name:'home',params:{user:this.account}})
    也需要在路由配置中声明该路径可以携带参数： '/home/:user'
4. this.$router.push({path:'/home',hash:`#${this.account}`})
    参数前会多一个#号，需要切割掉