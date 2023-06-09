<template>
    <div class="mb-5">
        <a-tag v-for="(item, index) in  menuStore.tages" :key="index"
            :color="(router.currentRoute.value.name === item.name ? '#3b5999' : '')"
            class="inline-flex gap-10px items-center animate__animated animate__slideInRight"  @click="handleLink(item.path)" :closable="index !== 0"
            @close.prevent="handleClose(item)">
            <template #icon>
                <i class="iconfont" :class="item.meta.icon"></i>
            </template>
            <span class="cursor-pointer">{{ item.name }}</span>
        </a-tag>
    </div>
</template>

<script lang="ts" setup>
import { useMenustore } from "@/store/menu";
import { useRouter } from 'vue-router';
const router = useRouter()
const menuStore = useMenustore()
//跳转事件
const handleLink = (path: string) => {
    router.push(path)
}

const handleClose = (data: any) => {
    menuStore.tages.forEach((item: any, index: number) => {
        if (item.name === data.name && router.currentRoute.value.name === item.name) {
            console.log(index);
            console.log(menuStore.tages[index - 1]);
            handleLink(menuStore.tages[index - 1].path)
        }
    })
    menuStore.removeTagsItem(data)

}

</script>

<style  scoped ></style>