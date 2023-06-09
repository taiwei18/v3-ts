import { defineStore } from "pinia";

interface ListItem {
    meta: {
        title: string;
        icon: string;
    };
    name: string;
    path: string;
}
export const useMenustore = defineStore('menuStore', {
    state: () => {
        return {
            collapse: false,
            tages: <ListItem[]>[]
        }
    },
    actions: {
        handleCollapse() {
            this.collapse = !this.collapse;
        },
        setTagsItem(data: any) {
            //判断是否已经存在
            const index = this.tages.findIndex(item => item.path === data.path);
            if (index !== -1) {
                this.tages.splice(index, 1, data);
                return;
            } else {
                this.tages.push(data);
            }
        },
        removeTagsItem(data: any) {
            //根据传进来的值删除
            this.tages.forEach((item, index) => {
                if (item.path === data.path) {
                   this.tages.splice(index, 1);
                   data.$router.push(this.tages[index - 1].path);
                    console.log(this.tages.splice(index, 1));
                }
            }
            )
        }
    }
})