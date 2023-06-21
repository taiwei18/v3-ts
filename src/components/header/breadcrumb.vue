<template>
  <div>
    <a-breadcrumb>
      <span v-for="(item, index) in list" :key="index">
        <a-breadcrumb-item v-if="item.meta.isbread !== false" :key="index">
          <router-link :to="item.path">
            <i class="iconfont" :class="item.meta.icon"></i>
            {{ item.name }}</router-link>
        </a-breadcrumb-item>
      </span>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { watch, reactive } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationMatched } from 'vue-router';
const route = useRoute()
let list = reactive([] as RouteLocationMatched[])
watch(() => route.matched, (newVal, _oldVal) => {
  list = newVal
},
  {
    immediate: true,
    deep: true
  }
)
</script>

<style scoped></style>
  