<template>
  <div @click="setTags(item)">
    <a-sub-menu v-if="item.children" :title="item.name" :key="item.path">
      <template #icon v-if="item.meta.icon">
        <i class="iconfont" :class="item.meta.icon"></i>
      </template>
      <template v-for="itemchil in item.children">
        <a-menu-item v-if="!itemchil.children" :key="itemchil.path">
          <template #icon v-if="itemchil.meta.icon">
            <i class="iconfont" :class="itemchil.meta.icon"></i>
          </template>
          <router-link :to="itemchil.path">
            {{ itemchil.name }}
          </router-link>
        </a-menu-item>
        <a-sub-menu v-if="itemchil.children" :title="itemchil.name" :key="itemchil.path">
          <template #icon v-if="itemchil.meta.icon">
            <i class="iconfont" :class="itemchil.meta.icon"></i>
          </template>
          <template v-for="(Citem) in itemchil.children">
            <sidebar :item="Citem"></sidebar>
          </template>
        </a-sub-menu>
      </template>
    </a-sub-menu>
    <a-menu-item v-if="!item.children" :key="item.path">
      <template #icon v-if="item.meta.icon">
        <i class="iconfont" :class="item.meta.icon"></i>
      </template>
      <router-link :to="item.path">
        {{ item.name }}
      </router-link>
    </a-menu-item>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useMenustore } from "@/store/menu";
import { useRouter } from 'vue-router';
const router = useRouter()
const menuStore = useMenustore()
const props = defineProps({
  item: Object,
  index: Number,
})
const item = ref(JSON.parse(JSON.stringify(props.item)))
menuStore.setTagsItem(router.currentRoute.value)
const setTags = (e:any) => {
  menuStore.setTagsItem(e)
}
</script>

<style scoped></style>