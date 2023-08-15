<template>
    <div class="stars-wrapper">
        <svg class="stars" width="100%" height="100%" preserveAspectRatio="none">
            <circle class="star" v-for="item of stars1" :cx="item.cx" :cy="item.cy" :r="item.r"></circle>
        </svg>
        <svg class="stars" width="100%" height="100%" preserveAspectRatio="none">
            <circle class="star" v-for="item of stars2" :cx="item.cx" :cy="item.cy" :r="item.r"></circle>
        </svg>
        <svg class="stars" width="100%" height="100%" preserveAspectRatio="none">
            <circle class="star" v-for="item of stars3" :cx="item.cx" :cy="item.cy" :r="item.r"></circle>
        </svg>
        <svg class="extras" width="100%" height="100%" preserveAspectRatio="none">
            <defs>
                <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
                    <stop offset="0%" stop-color="rgba(255,255,255,.8)"></stop>
                    <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                </radialGradient>
            </defs>
            <g transform="rotate(-135)">
                <ellipse class="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2"></ellipse>
            </g>
            <g transform="rotate(20)">
                <ellipse class="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2"></ellipse>
            </g>
            <g transform="rotate(300)">
                <ellipse class="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2"></ellipse>
            </g>
        </svg>
    </div>
</template>
<script setup lang="ts">
import { stars1, stars2, stars3 } from './star'

</script>
<style lang="scss" scoped>
:root {
    --twinkle-duration: 4s;
}

.stars-wrapper {
    position: relative;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    background: -webkit-gradient(linear, left top, left bottom, from(#16161d), color-stop(#1f1f3a), to(#3b2f4a));
    background: linear-gradient(#16161d, #1f1f3a, #3b2f4a);
    overflow: hidden;
}

.stars {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-animation: twinkle var(--twinkle-duration) ease-in-out infinite;
    animation: twinkle var(--twinkle-duration) ease-in-out infinite;
}

.stars:nth-child(2) {
    -webkit-animation-delay: calc(var(--twinkle-duration) * -0.33);
    animation-delay: calc(var(--twinkle-duration) * -0.33);
}

.stars:nth-child(3) {
    -webkit-animation-delay: calc(var(--twinkle-duration) * -0.66);
    animation-delay: calc(var(--twinkle-duration) * -0.66);
}

@-webkit-keyframes twinkle {
    25% {
        opacity: 0;
    }
}

@keyframes twinkle {
    25% {
        opacity: 0;
    }
}

.star {
    fill: white;
}

.star:nth-child(3n) {
    opacity: 0.8;
}

.star:nth-child(7n) {
    opacity: 0.6;
}

.star:nth-child(13n) {
    opacity: 0.4;
}

.star:nth-child(19n) {
    opacity: 0.2;
}

.comet {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation: comet 10s linear infinite;
    animation: comet 10s linear infinite;
}

@-webkit-keyframes comet {

    0%,
    40% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    60%,
    100% {
        -webkit-transform: translateX(-100vmax);
        transform: translateX(-100vmax);
        opacity: 0;
    }
}

@keyframes comet {

    0%,
    40% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    60%,
    100% {
        -webkit-transform: translateX(-100vmax);
        transform: translateX(-100vmax);
        opacity: 0;
    }
}

.comet-b {
    -webkit-animation-delay: -3.3s;
    animation-delay: -3.3s;
}

.comet-c {
    -webkit-animation-delay: -5s;
    animation-delay: -5s;
}
</style>
