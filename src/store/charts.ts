import { defineStore } from "pinia";


export const useChartstore = defineStore('chartstore', {
    state: () => {
        return {
            chart: '',
        }
    },
    actions: {
        setChart(data: any) {
            this.chart = data;
        }
    }
})