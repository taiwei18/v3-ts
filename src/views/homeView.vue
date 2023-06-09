<template>
  <div class="home-box">
    <a-card hoverable v-for="item in [1,2,3,4]" :key="item">
      <template #cover>
        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      </template>
      <template #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
        <template #avatar>
          <a-avatar  class="iconfont icon-touxiang" >
          </a-avatar>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

</script>

<style scoped>
.home-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
}

</style>