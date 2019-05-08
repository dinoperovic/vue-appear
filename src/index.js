import VueAppear from './vue-appear.js'

const install = (Vue, options) => {
  if (install.installed) return
  install.installed = true
  if (options) VueAppear.options = { ...VueAppear.options, ...options }
  Vue.directive('appear', VueAppear)
}

const plugin = {
  install,
  directive: VueAppear
}

// auto-install when Vue is found
if (typeof window !== 'undefined' && window.Vue) {
  let options = window.APPEAR_OPTIONS || {}
  window.Vue.use(plugin, options)
}

export default plugin
