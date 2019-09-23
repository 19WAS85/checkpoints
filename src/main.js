import { install, uninstall } from '@github/hotkey'
import Vue from 'vue'
import App from './main.vue'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    ymdFormat: (date) => date.toJSON().slice(0, 19).replace('T', ' '),
    reloadHotkeys () {
      const hotkeysElements = document.querySelectorAll('[data-hotkey]')
      for (const el of hotkeysElements) {
        uninstall(el)
        install(el)
      }
    }
  },
  mounted () { this.reloadHotkeys() }
})

new Vue({ render: h => h(App) }).$mount('#checkpoints-app')
