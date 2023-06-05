import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
    AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
import {resolve} from 'path'
import UnoCSS from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        Components({
            dts: true, // 启用ts支持
            resolvers: [
                // https://github.com/antfu/unplugin-vue-components
                AntDesignVueResolver(), // 配置 ant design vue 按需加载支持
            ]
        }),
    ],
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import '@/styles/main.scss';`
    //     }
    //   }
    // },
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    }
})
