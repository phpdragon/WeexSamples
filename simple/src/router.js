/*global Vue*/
import Router from 'vue-router'

/* 页面不能启用异步加载，原因是异步加载使用了jsonp方式，webview不支持其中的window变量 */
/* 如: const index = () => import('@/views/xxx.vue') */
/* 如: component: () => import('@/views/xxx.vue') */
import NotFound from '@/components/404.vue'
import Home from '@/views/home.vue'
import My from '@/views/my.vue'

Vue.use(Router)

//fix bug: Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/".
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/404',
            name: '404',
            title: '404',
            component: NotFound
        },
        {
            path: '/home',
            name: 'home',
            meta: {title: '首页'},
            component: Home
        },
        {
            path: '/my',
            name: 'my',
            meta: {title: '我的'},
            component: My
        },
        {
            path: '*',
            redirect: {path: '/404'}
        }
    ]
})
