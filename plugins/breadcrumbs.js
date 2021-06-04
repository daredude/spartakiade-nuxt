import Vue from 'vue'

const mixinFlag = Vue.__crumbMixin__

if (!mixinFlag) {
  Vue.mixin({
    methods: {
      setBreadcrumbs (crumbs) {
        const x = crumbs || []
        this.$store.commit('SET_BREADCRUMB_LINKS', x)
      }
    }
  })

  Vue.__crumbMixin__ = true
}
