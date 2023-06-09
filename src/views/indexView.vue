<template>
  <div class="box">
    <vmenu />
    <div class="box-main">
      <vheader />
      <main>
        <router-view v-slot="{ Component }">
          <transition :duration="{ enter: 500, leave: 300 }" mode="out-in" name="slide-fade">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import vmenu from "@/components/menu/menu.vue";
import vheader from "@/components/header/header.vue";

</script>

<style scoped>
.box {
  display: flex;
  width: 100%;
}

.box-main {
  flex: auto;
}

main {
  width: 100%;
  height: calc(100% - 70px);
  padding: 20px;
  background: #f0f2f5;
  border: 1px solid #ccc;
}

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