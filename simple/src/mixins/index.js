/* Vue 混入功能，类似与PHP的trait */
/* 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项 */

export default {
    methods: {
        jumpPage(to) {
            if (this.$router) {
                this.$router.push(to);
            }
        }
    }
}
