<template>
    <div class="blogs-container blog">
        <h2 class="title">我的博客</h2>
        <p class="sub-title">脚踏实地，持之以恒</p>
        <div class="items">
            <ul>
                <li v-for="item of blogs">
                    <a :href="item.link" target="_blank">
                        <!-- <img :src="item.avatar" /> -->
                        <el-avatar :src="item.avatar" class="avatar" :size="'large'" />
                        <div class="item-txt">
                            <p class="title">{{ item.name }}</p>
                            <p class="desc">{{ item.info }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import blogs from '@/assets/blogs.json'

</script>
<style lang="scss" scoped>
/*公共头部*/
.blogs-container {
    min-width: 1440px;
    max-height: 690px;
    border-radius: 8px;
    list-style: none;
    text-decoration: none;

    h2.title {
        font-size: 30px;
        color: #333333;
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

    .avatar {
        vertical-align: middle;
        width: 20%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.blog {
    width: 100%;
    // height: auto;
    // overflow: hidden;
    padding: 90px 0 110px;
    // background-color: orange;
    background-size: 100% 100%;
    background: url('https://wszhu.oss-cn-guangzhou.aliyuncs.com/images/wallhaven-l3xk6q.jpg') center center no-repeat;

    h2.title {
        color: #FFFFFF;
    }

    p.sub-title {
        color: #FFFFFF;
    }

    .items {
        padding-top: 70px;
        width: 100%;
        height: auto;
        overflow: hidden;

        ul {
            width: 1240px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            li {
                width: 610px;
                height: 180px;
                background: rgba(255, 255, 255, .9);
                border-radius: 5px;
                margin-bottom: 20px;
                padding: 20px 50px 20px 20px;
                transition: all .3s;
                box-sizing: border-box;
            }

            li:hover {
                box-shadow: 0px 0px 10px rgba(244, 244, 244, .8);
                transition: all .3s;
            }

            li a {
                display: blogs-container;
                // width: 100%;
                // height: 100%;
                display: flex;
                align-items: center;
            }

            li .item-txt {
                padding-left: 35px;
            }

            li .item-txt .title {
                font-size: 24px;
                color: #333333;
                padding-bottom: 20px;
            }

            li .item-txt .desc {
                font-size: 16px;
                color: #333333;
                line-height: 30px;
            }
        }
    }

}
</style>
  