<template>
  <a-breadcrumb>
    <transition-group name="slide-fade" appear>
            <span v-for="(item, index) in list" :key="index">
                <a-breadcrumb-item v-if="item.meta.isbread !== false" :key="index">
                    <router-link :to="item.path">
                        <i class="iconfont" :class="item.meta.icon"></i>
                        {{ item.name }}</router-link>
                </a-breadcrumb-item>
            </span>
    </transition-group>
  </a-breadcrumb>
</template>
<script lang="ts" setup>
import {watch, ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute()
let list: any = ref([] as any);
let matched = route.matched;
list.value = matched as any
watch(() => route.matched, (newVal, _oldVal) => {
  list.value = newVal as any
})

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
  