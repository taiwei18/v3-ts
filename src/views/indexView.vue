<template>
  <div class="box">
    <vmenu/>
    <div class="box-main" :class="menuStore.collapse?'menu-min-box-1':'menu-box-1'">
      <vheader/>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useMenustore} from "@/store/menu";
import vmenu from "@/components/menu/menu.vue";
import vheader from "@/components/header/header.vue";
import {ref} from "vue";

const menuStore = useMenustore()
let num = ref<Number | String>(5)
console.log(num.value);
const arr: Array<String>[] = []
console.log(arr);

</script>

<style scoped>
.box {
  /* display: flex; */
  /* width: 100%; */
}

.box-main {
  width: 100%;
}

.menu-min-box-1 {
  position: fixed;
  top: 0;
  margin-left: 81px;
  transition: margin-left .4s ease-in-out;
}

.menu-box-1 {
  position: fixed;
  top: 0;
  margin-left: 251px;
  transition: margin-left .3s ease-in-out;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0.3;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
}
</style>