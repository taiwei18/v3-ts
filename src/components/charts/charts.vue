<template>
    <div :id="containerId" :style="{
        width: width + 'px',
        height: height + 'px'
    }">

    </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import '@/utils/vintage.js';
import { watch, nextTick, ref } from "vue";

interface typeprops {
    //echarts 容器id，默认为空
    containerId: string,
    //echaets 宽度，默认为空
    width: number | null,
    //echarts 高度，默认为空
    height: number | null,
    //echarts 配置项，默认为空
    option: object,
}
const props = withDefaults(defineProps<typeprops>(), {
    containerId: '',
    width: null,
    height: null,
    option: Object,
})
let chart = ref()
const draw = (params: string, options?: any) => {
    nextTick(() => {
        chart.value = echarts.init(document.getElementById(params) as HTMLDivElement, 'westeros');
        chart.value.setOption(options)
    })
}
nextTick(() => {
    const targetNode = document.querySelector('.box-main');
    const resizeObserver = new ResizeObserver(entries => {
        for (const _entry of entries) {
            chart.value.resize();
        }
    });
    resizeObserver.observe(targetNode as Element);
})
watch(() => props.containerId, (newVal) => {
    if (chart.value) {
        chart.value?.dispose();
    }
    draw(newVal, props.option)
}, {
    immediate: true
}
)
watch(() => props.option, (newVal) => {
    draw(props.containerId, newVal)
},
    {
        deep: true
    }
)

</script>

<style  scoped></style>