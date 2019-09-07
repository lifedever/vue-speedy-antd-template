import Vue from "vue";
import Inject from 'vue-speedy-antd/conf/main-inject'
import pages from 'vue-speedy-antd/src/pages'
import adminLayout from "vue-speedy-antd/src/layout/admin-layout";
import modules from './modules'
import menus from './menu'

import './assets/override.less'     // 项目自定义的样式

// 调用admin layout作为整个网站框架
Vue.use(adminLayout, {
    menus       // 注入菜单
})

Vue.use(Inject, {
    config: {
        title: 'Vue Speedy Ant Design',     // 站点标题
        shortTitle: 'VD',                   // 站点标题缩写
    },
    pages: pages,                           // 页面路由
    modules                                 // vuex 模块
})