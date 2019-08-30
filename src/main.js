import Vue from 'vue'
import App from './main.vue'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    ymdFormat: (date) => date.toJSON().slice(0, 19).replace('T', ' ')
  }
})

new Vue({ render: h => h(App) }).$mount('#checkpoints-app')
