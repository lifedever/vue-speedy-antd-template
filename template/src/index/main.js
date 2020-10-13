import Vue from "vue";
import Inject from 'vue-speedy-antd/conf/index-main-inject'
import pages from './pages'
import modules from './modules'

Vue.use(Inject, {
    config: {
        title: process.env.VUE_APP_INDEX_SITE_NAME,
    },
    pages,
    modules
})