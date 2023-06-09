<template>
  <div class="header-box">
    <div class="flex gap-10px items-center">
      <a-button @click="toggleCollapsed">
        <MenuFoldOutlined v-if="menuStore.collapse" />
        <MenuUnfoldOutlined v-else />
      </a-button>
      <breadcrumb />
    </div>
    <tags />
  </div>
</template>

<script lang="ts" setup>
import { useMenustore } from "@/store/menu";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import breadcrumb from "./breadcrumb.vue";
import tags from "./tags.vue";
const menuStore = useMenustore()


const toggleCollapsed = () => {
  menuStore.handleCollapse()
};

</script>
<style scoped>
.header-box {
  width: auto;
  height: 70px;
  background: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.15) 0 0.5rem 1rem;
  border-bottom: 2px solid #747575;
  padding: 5px 10px 5px 10px;
  display: grid;
  gap: 5px;
}
</style>