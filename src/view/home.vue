<template>
    <el-main class="home">
        <div class="top">
            <div class="top-text">
                魏雷设计风格
                <br />
                Weilei Design
            </div>
            <router-link to="/norm">
                <el-button>查看我们的设计准则</el-button>
            </router-link>

        </div>
        <div class="introduce">
            <el-row :gutter="30">
                <el-col :span="8" :xs="24">
                    <el-card>
                        <img src="../assets/weilei.jpg" alt="">
                        <div style="padding: 14px;">
                            <span>源自魏雷先生的独特设计</span>
                            <div class="bottom clearfix">
                                <router-link to="/story">
                                    <el-button type="text" class="button">了解魏雷先生></el-button>
                                </router-link>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-card>
                        <img src="../assets/bianshidu.png" alt="">
                        <div style="padding: 14px;">
                            <span>极具辨识度的设计风格</span>
                            <div class="bottom clearfix">
                                <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-card>
                        <img src="../assets/chaoliu.jpg" alt="">
                        <div style="padding: 14px;">
                            <span>引领时代设计潮流</span>
                            <div class="bottom clearfix">
                                <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>


    </el-main>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style scoped>
    .top {
        height: 70vh;
        /* background: #ffbc22; */
        background-image: linear-gradient(#0000ff, #ff0000 52%, #00ff00);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .top-text {
        font-size: 40px;
        color: #0000ff;
        text-shadow: 5px 5px 5px #494545;
    }

    .introduce {
        /* margin-top: 10px; */
    }

    img {
        width: 130px;
        height: 130px;
        ;
    }

    .el-card {
        background: #CE801C;
        margin-top: 10px;
        border-radius: 25px;
    }
</style>