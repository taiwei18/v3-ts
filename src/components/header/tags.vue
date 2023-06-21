<template>
    <div>
        <a-tag v-for="(item, index) in  menuStore.tages" :key="index"
            :color="(router.currentRoute.value.name === item.name ? '#3b5999' : '')"
            class="tags inline-flex gap-10px items-center animate__animated animate__slideInRight"
            @click="handleLink(item.path)" :closable="menuStore.tages.length !== 1" @close.prevent="handleClose(item)">
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
interface ListItem {
    meta: {
        title: string;
        icon: string;
    };
    name: string;
    path: string;
}
const router = useRouter()
const menuStore = useMenustore()
const handleLink = (path: string) => {
    router.push(path)
}
const handleClose = (data: ListItem) => {
    menuStore.tages.forEach((item: ListItem, index: number) => {
        if (item.name === data.name && router.currentRoute.value.name === item.name) {
            if (index + 1 === menuStore.tages.length) {
                handleLink(menuStore.tages[index - 1].path)
            } else {
                handleLink(menuStore.tages[index + 1].path)
            }
        }
    })
    menuStore.removeTagsItem(data)
}
</script>

<style  scoped >
.tags {
    padding: 3px 5px !important;
}
</style>