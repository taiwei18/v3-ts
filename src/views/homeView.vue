<template>
  <div class="home">
    <div class="home-box">
      <a-card title="This" v-for="item in numList" :key="item">
        <a-statistic title="Active Users" :value="item" />
      </a-card>
    </div>
    <charts containerId="homeCategory" :height="300" :option="Option" />
    <!-- <charts containerId="homeCategory" :height="300" :option="optionT" /> -->
  </div>
</template>

<script lang="ts" setup>
// import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import charts from "@/components/charts/charts.vue";
import '@/utils/vintage.js';
import { ref } from 'vue';
const numList = ref<Array<number>>([])
const Option = ref({
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: makeRandomData()
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: makeRandomData()
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: makeRandomData()
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: makeRandomData()
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: makeRandomData()
    }
  ]
})
// const optionT = ref({
//   title: {
//     text: 'Stacked Line'
//   },
//   backgroundColor: "#0f375f",
//   grid: {
//     left: '10%',
//     top: '5%',
//     bottom: '10%',
//     right: '5%',
//   },
//   tooltip: {
//     trigger: 'axis',
//     show: true,
//     textStyle: {
//       fontSize: 14,
//       color: "#fff",
//     },
//     backgroundColor: "rgba(50,50,50,0.7)",
//     borderWidth: 0,
//   },
//   dataZoom: [{
//     show: true,
//     height: 10,
//     xAxisIndex: [0],
//     bottom: 10,
//     start: 0,
//     end: 80,
//     handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
//     handleSize: '110%',
//     handleStyle: {
//       color: "rgba(255, 255, 255,0.5)",
//     },
//     textStyle: {
//       color: "#fff",
//       fontSize: 10,
//     },
//     fillerColor: "rgba(42, 131, 223,1)",
//     borderColor: "rgba(66, 130, 197,1)",
//     backgroundColor: 'rgba(12, 67, 124,0.5)',
//     showDataShadow: false,
//     brushSelect: false,
//   }, {
//     type: "inside",
//   }],
//   yAxis: {
//     show: true,
//     min: 90,
//     max: 100,
//     type: 'value',
//     nameTextStyle: {
//       color: 'rgba(255,255,255,0.7)',
//       fontSize: 12,
//     },
//     axisLine: {
//       show: true,
//       lineStyle: {
//         color: 'rgba(28, 158, 222, 1)',
//         type: 'solid'
//       }
//     },
//     axisTick: {
//       show: true,
//       lineStyle: {
//         color: 'rgba(28, 158, 222, 1)',
//       }
//     },
//     axisLabel: {
//       formatter: '{value}%',
//       color: 'rgba(28, 158, 222, 1)',
//     },
//     splitLine: {
//       show: true,
//       lineStyle: {
//         type: 'solid',
//         color: 'rgba(0, 206, 209, 0.3)',
//         width: 0.5,
//       }
//     }
//   },
//   xAxis: {
//     show: false,
//     type: 'category',
//     boundaryGap: false,
//     nameTextStyle: {
//       fontSize: 14
//     },
//     axisLine: {
//       lineStyle: {
//         color: 'rgba(28, 158, 222, 1)',
//       }
//     },
//     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
//   },
//   series: [{
//     name: '小灯光',
//     type: "line",
//     smooth: false,
//     symbolSize: 5,
//     symbol: 'circle',//数据交叉点样式 (实心点)
//     data: [97, 97, 91, 98, 92, 91, 91],
//     // markLine: {
//     //   symbol: 'none',
//     //   data: [{
//     //     name: '竖线1',
//     //     yAxis: 'min'
//     //   }, {
//     //     name: '竖线2',
//     //     yAxis: 'max'
//     //   }]
//     // },
//     itemStyle: {
//       normal: {
//         width: 5,
//         color: 'rgb(0, 255, 255)',
//       }
//     },
//     lineStyle: {
//       normal: {
//         color: 'rgb(0, 255, 255)',
//         width: 0.5,
//       },
//     },
//     // areaStyle: {
//     //   normal: {
//     //     color: 'rgba(241,148,138,0.500)'
//     //   }
//     // },
//     markLine: {
//       symbol: 'none',
//       silent: true,
//       lineStyle: { normal: { type: 'dashed' } },
//       label: { position: 'end' },
//       data: [
//         {
//           yAxis: 91,
//           lineStyle: { width: 1, color: '#32D3EB' },
//           label: {
//             textStyle: { color: '#32D3EB' },
//           }
//         },
//         {
//           yAxis: 98,
//           lineStyle: { width: 1, color: '#32D3EB' },
//           label: {
//             textStyle: { color: '#32D3EB' },
//           }
//         },
//         {
//           xAxis: '周二',
//           lineStyle: { width: 1, color: '#32D3EB' },
//           label: {
//             textStyle: { color: '#32D3EB' },
//           }
//         },
//         {
//           xAxis: '周四',
//           lineStyle: { width: 1, color: '#32D3EB' },
//           label: {
//             textStyle: { color: '#32D3EB' },
//           }
//         },
//       ]
//     },
//   },
//   ],
// })

function makeRandomData() {
  return [Math.floor(Math.random() * 3000), Math.floor(Math.random() * 3000), Math.floor(Math.random() * 3000), Math.floor(Math.random() * 3000)]
}
numList.value = makeRandomData()
setInterval(() => {
  numList.value = makeRandomData()
  Option.value.series.forEach((item) => {
    item.data = makeRandomData()
  })
}, 2000)
</script>

<style scoped>
.home-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
}
</style>