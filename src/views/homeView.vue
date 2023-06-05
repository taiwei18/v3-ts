<template>
  <div class="home-box">
    <div class="home-card">
    </div>
    <div class="home-card">
    </div>
    <div class="home-card">
    </div>
    <div class="home-card">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.home-box {
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
}

.home-card {
  height: 200px;
  background: #fff;
  border: 1px solid #ccc;
}
</style>