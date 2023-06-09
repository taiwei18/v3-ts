<template>
  <div>
    <a-breadcrumb>
      <span v-for="(item, index) in list" :key="index">
        <transition-group name="breadcrumb"  :duration="{ enter: 500, leave: 300 }" mode="out-in">
          <a-breadcrumb-item v-if="item.meta.isbread !== false" :key="index">
            <router-link :to="item.path">
              <i class="iconfont" :class="item.meta.icon"></i>
              {{ item.name }}</router-link>
          </a-breadcrumb-item>
        </transition-group>
      </span>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
let list: any = ref([]);
let matched = route.matched;
list.value = matched
watch(() => route.matched, (newVal, _oldVal) => {
  list.value = newVal
})

</script>

<style scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
  