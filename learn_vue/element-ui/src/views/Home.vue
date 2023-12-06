<!-- 写一个后台管理系统 -->
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span>选课系统</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <!-- 这里没用 r -->
                        <!-- hash方法会多一个井号，所以要切割 -->
                        欢迎 {{$route.hash.slice(1)}}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>个人详情</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100vh;

    .el-container {
        height: 100vh;

        .el-header {
            background-color: rgb(0, 255, 191);
            height: 80px;
            line-height: 80px;
            font-size: 30px;
            display: flex;
            justify-content: space-between;
        }

        .el-dropdown-link {
            font-size: 24px;
            cursor: pointer;
            color: var(--el-color-primary);
            display: flex;
            align-items: center;
        }
    }
}</style>