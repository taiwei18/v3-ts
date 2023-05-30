<template>
    <a-breadcrumb>
        <transition-group name="slide-fade"  appear>
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
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
let list: any = ref([] as any);
let matched = route.matched;
list.value = matched as any
watch(() => route.matched, (newVal, _oldVal) => {
    list.value = newVal as any
})

</script>
  
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(150px);
}

.slide-fade-move {
    transition: transform 0.8s ease;
}

.slide-fade-leave-active {
    position: absolute;
}
</style>
  