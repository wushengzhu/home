<template>
    <div class="btn-container">
        <div class="wrapper">
            <div class="text">{{ btnText }}</div>
            <template v-if="btnType === 'input'">
                <input id="checkbox" type="checkbox" :checked="(systemValue as any)"
                    @input="emit('update:systemValue', ($event.target as HTMLInputElement).value)" />
                <label class="button" for="checkbox">
                    <div class="dot"></div>
                </label>
            </template>
            <template v-else-if="btnType === 'radio'">
                <slot></slot>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';


const props = defineProps({
    btnText: {
        type: String,
        default: '点击'
    },
    systemValue: {}, // 值未确定
    btnType: {
        type: String,
        default: 'input'
    },
})
const emit = defineEmits(['update:systemValue'])
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

.btn-container {
    font-size: 1rem;
    width: 100%;
    color: #333;
    // background-color: #eee;
    font-size: 1rem;
    font-family: "Space Grotesk", sans-serif;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
}

@media (max-width: 992px) {
    .btn-container {
        font-size: 16px;
    }
}


.wrapper {
    // width: 100%;
    border-radius: 12px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    // box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3), -3px -3px 6px rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
    margin-bottom: 0.2rem;
}

.wrapper:hover {
    transform: scale(1.01);
}

.wrapper:active {
    transform: scale(0.98);
}

input#checkbox {
    display: none;
}

input#checkbox:checked+.button {
    filter: none;
}

input#checkbox:checked+.button .dot {
    left: calc(100% - 1rem - 0.2rem);
    background-color: #4a6dc6;
}

.button {
    position: relative;
    width: 3.6rem;
    height: 2rem;
    border-radius: 1rem;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.8);
    cursor: pointer;
}

.button .dot {
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3), -3px -3px 6px rgba(255, 255, 255, 0.8);
    transition: all 0.3s;
    background-color: #aab7d9;
    will-change: left, background-color;
}

@keyframes deco-move {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>
  