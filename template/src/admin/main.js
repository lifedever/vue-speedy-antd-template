import Vue from "vue";
import Inject from 'vue-speedy-antd/conf/admin-main-inject'
import pages from 'vue-speedy-antd/src/admin/pages'
import adminLayout from "vue-speedy-antd/src/layout/admin-layout";
import modules from './modules'

import '../assets/override.less'


Vue.use(adminLayout, {
})

Vue.use(Inject, {
    config: {
        title: process.env.VUE_APP_ADMIN_SITE_NAME,
        shortTitle: process.env.VUE_APP_ADMIN_SITE_SHORT_NAME,
    },
    pages: pages,
    modules
})