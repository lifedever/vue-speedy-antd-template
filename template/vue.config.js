module.exports = require('vue-speedy-antd/conf')({
    lessModifyVars: {   // 用于覆盖主题配色，所有变量如下：https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
        'primary-color': '#0774a5',
    },
    title: 'Vue Speedy Ant Design',     // 站点标题
    baseUrl: '/',                       // vue cli baseUrl
    devServer: {
        port: 6161,                     // 前端服务端口
        // 后端服务请求代理配置
        proxy: {
            '/api': {
                target: "http://localhost:18080",   // 后端服务地址
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
})
