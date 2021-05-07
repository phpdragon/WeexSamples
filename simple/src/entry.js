/*global Vue*/

import mixins from '@/mixins';
import * as filters from '@/filters';
import vConsole from '@/assets/js/vconsole.js'

/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');

// register global vue mixins
Vue.mixin(mixins);

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

