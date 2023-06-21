<template>
  <div :class="menuStore.collapse ? 'menu-min-box' : 'menu-box'">
    <a-menu :selectedKeys="[$route.path]" v-model:openKeys="state.openKeys" mode="inline" theme="dark"
      :inline-collapsed="menuStore.collapse">
      <a-menu-item selectable="false">
        <template #icon>
          <i class="iconfont icon-vue-dot-js"></i>
        </template>
        <span>Watermelon</span>
      </a-menu-item>
      <template v-for="(item, index) in menuList" :key="index">
        <sidebar :item="item" :index="index"></sidebar>
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import sidebar from "./sidebar.vue";
import { reactive, watch } from "vue";
import { useRouter } from 'vue-router';
import { useMenustore } from "@/store/menu";
const router = useRouter()
const menuStore = useMenustore()
const menuList = router.options.routes[0].children
const state = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"]
});
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
</script>

<style scoped lang="scss">
.menu-box {
  width: 250px;
  transition: width .5s;
}

.menu-min-box {
  width: 80px;
  transition: width .2s ease-in-out;
}
</style>

