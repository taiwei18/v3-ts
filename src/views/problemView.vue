<template>
    <div>
        <a-tabs v-model:activeKey="activeKey" centered>
            <a-tab-pane key="1" tab="Bing">
                <iframe src=" https://www.bing.com/?mkt=zh-CN" class="w-full h-180 " frameborder="0"></iframe>
            </a-tab-pane>
            <a-tab-pane key="2" tab="维基" force-render>
                <iframe src="https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5" class="w-full h-180 "
                    frameborder="0"></iframe>
            </a-tab-pane>
            <a-tab-pane key="3" tab="文心一言">
                <iframe src="https://yiyan.baidu.com/" class="w-full h-180 " frameborder="0"></iframe>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeKey = ref("1")
</script>

<style  scoped></style>