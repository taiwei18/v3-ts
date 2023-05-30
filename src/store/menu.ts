import { defineStore } from "pinia";

export const useMenustore = defineStore('menuStore', {
    state: () => {
        return{
            collapse: false
        }
    },
    actions: {
        handleCollapse() {
            this.collapse = !this.collapse;
        }
    }
})