<template>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="$route.path" router>
                <el-Menu-Item index="/norm/principle">
                    <template slot="title">
                        <span>原则</span>
                    </template>
                </el-Menu-Item>
                <el-Menu-Item index="/norm/1">
                    <template slot="title">
                        <span>风格</span>
                    </template>
                </el-Menu-Item>
                <el-Menu-Item index="/norm/2">
                    <template slot="title">
                        <span>颜色</span>
                    </template>
                </el-Menu-Item>
                <el-Menu-Item index="/norm/3">
                    <template slot="title">
                        <span>图标</span>
                    </template>
                </el-Menu-Item>
                <el-Menu-Item index="/norm/4">
                    <template slot="title">
                        <span>字体</span>
                    </template>
                </el-Menu-Item>

            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>



</template>

<script>

</script>

<style scoped>

</style>