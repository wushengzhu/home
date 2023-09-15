<template>
    <div class="blogs-container blog">
        <h2 class="title">我的博客</h2>
        <p class="sub-title">脚踏实地，持之以恒</p>
        <div class="items">
            <el-carousel trigger="click" arrow="never">
                <el-carousel-item v-for="i in Math.ceil(blogs.length / 4)" :key="i">
                    <template v-for="j in 4">
                        <a v-if="blogItem(i, j)" :href="blogItem(i, j).link" target="_blank" class="blog-item">
                            <circle-item :src="blogItem(i, j).avatar" :is-show-too-tip="false" />
                            <div class="item-txt">
                                <p class="title">{{ blogItem(i, j).name }}</p>
                                <p class="desc">{{ blogItem(i, j).info }}</p>
                            </div>
                        </a>
                    </template>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script setup lang="ts">
import blogs from '@/assets/json/blogs.json'
import CircleItem from "@/components/CircleItem/index.vue"

const blogItem = (i: number, j: number) => blogs[j - 1 + (i - 1) * 4]
</script>
<style lang="scss" scoped>
/*公共头部*/
.blogs-container {
    min-width: 100%;
    height: 100%;
    border-radius: 8px;
    list-style: none;
    text-decoration: none;
    background-size: 100% 100%;
    background: url('https://wszhu.oss-cn-guangzhou.aliyuncs.com/images/wallhaven-l3xk6q.jpg') center center no-repeat;

    h2.title {
        font-size: 30px;
        color: #333333;
        padding-top: 30px;
        padding-bottom: 8px;
        position: relative;
        text-align: center;
    }

    p.sub-title {
        font-size: 14px;
        color: #999999;
        text-align: center;
    }

    h2.title:after {
        display: blogs-container;
        content: "";
        position: absolute;
        width: 70px;
        height: 3px;
        background: #4c80e7;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
    }

    h2.title {
        color: #FFFFFF;
    }

    p.sub-title {
        color: #FFFFFF;
    }

    .items {
        width: 80%;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        padding: 5px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        :deep(.el-carousel) {
            width: 100%;
            height: 60vh;
            margin-top: 70px;
        }

        :deep(.el-carousel__container) {
            height: 100%;
        }

        .el-carousel__item {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            height: auto;
            max-height: 100%;
        }


        .blog-item {
            width: 48%;
            height: 242px;
            background: rgba(255, 255, 255, .9);
            border-radius: 5px;
            margin: 0 10px;
            margin-bottom: 20px;
            padding: 0 20px;
            transition: all .3s;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #000;

            a {
                color: #000;
            }

            &:hover {
                box-shadow: 0px 0px 10px rgba(244, 244, 244, .8);
                transition: all .3s;
            }

            .item-txt {
                padding-left: 35px;

                .title {
                    font-size: 24px;
                    color: #333333;
                    padding-bottom: 20px;
                }

            }

            .desc {
                font-size: 16px;
                color: #333333;
                line-height: 30px;
            }
        }
    }
}
</style>
  