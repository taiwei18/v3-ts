<template>
  <div class="header-box">
    <div class="flex gap-10px justify-between items-center">
      <div class="grid gap-5px">
        <div class="flex gap-10px items-center">
          <a-button @click="toggleCollapsed">
            <MenuFoldOutlined v-if="menuStore.collapse" />
            <MenuUnfoldOutlined v-else />
          </a-button>
          <breadcrumb />
        </div>
      </div>
      <a-popover placement="bottomRight">
        <template #content>
          <p class="cursor-pointer">Content</p>
          <p class="cursor-pointer" @click="handQuit">退出</p>
        </template>
        <a-avatar shape="square" :size="50" class="cursor-pointer avatar"
          :style="{ backgroundColor: color, verticalAlign: 'middle' }">
          嵇康
        </a-avatar>
      </a-popover>
    </div>
    <tags />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue";
import tags from "./tags.vue";
import breadcrumb from "./breadcrumb.vue";
import { useMenustore } from "@/store/menu";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import { useChartstore } from "@/store/charts";

const charts = useChartstore()
const menuStore = useMenustore()
const colorList = ['#88aea3', '#4f5355', '#2b5e7d', '#b0a4e3', '#1bd1a5'];
const random = Math.floor(Math.random() * 5);
const color = ref(colorList[random]);
const Media = window.matchMedia("(max-width: 420px)").matches;
Media ? menuStore.handleCollapse() : '';
const toggleCollapsed = () => {
  menuStore.handleCollapse()
  nextTick(() => {
    const targetNode = document.querySelector('.box-main');
    const jsonChart = JSON.parse(JSON.stringify(charts.chart))
    const resizeObserver = new ResizeObserver(() => {
      jsonChart.resize();
    });
    resizeObserver.observe(targetNode as Element);
  });
};
const handQuit = () => {
  localStorage.removeItem("my_user");
  window.location.href = "/login";
};
</script>
<style>
.header-box {
  width: auto;
  height: 100px;
  background: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.15) 0 0.5rem 1rem;
  border-bottom: 2px solid #747575;
  padding: 5px 10px 5px 10px;
  display: grid;
}

.avatar:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(.34, 0, .84, 1);
}
</style>