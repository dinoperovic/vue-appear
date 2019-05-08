import ScrollMagic from 'scrollmagic'

const VueAppear = {
  options: {
    immediate: false,
    toggle: false,
    children: false,
    offset: 150,
    hook: 'onEnter',
    delay: 0,
    class: 'appear',
    selector: null,
    callback: () => {}
  },
  bind(el, binding, vnode) {
    vnode.appear = {
      controller: null,
      getConfig(binding) {
        let config = {
          ...VueAppear.options,
          ...binding.modifiers,
          ...(typeof binding.value === 'object' ? binding.value : {})
        }
        return config
      },
      getElements(el, config) {
        if (config.children) {
          if (config.selector) return el.querySelectorAll(config.selector)
          else return el.children
        } else return [el]
      },
      setup(el, config) {
        if (!config.immediate) this.controller = new ScrollMagic.Controller()

        let hook = el => {
          if (config.immediate) {
            el.classList.add(config.class)
            config.callback(true)
          } else {
            let scene = new ScrollMagic.Scene({
              triggerElement: el,
              triggerHook: config.hook,
              offset: config.offset
            })
            scene.setClassToggle(el, config.class)
            scene.addTo(this.controller)
            if (config.toggle) {
              scene.on('enter', () => config.callback(true))
              scene.on('leave', () => config.callback(false))
            } else {
              scene.on('enter', () => {
                scene.destroy()
                config.callback(true)
              })
            }
          }
        }

        setTimeout(() => {
          let elements = [...this.getElements(el, config)]
          elements.forEach(hook)
        }, config.delay)
      },
      destroy(el, config) {
        let elements = [...this.getElements(el, config)]
        elements.forEach(el => {
          el.classList.remove(config.class)
        })
        if (!config.immediate) this.controller.destroy(true)
        config.callback(false)
      }
    }
  },
  inserted(el, binding, vnode) {
    let enable = { enable: true, ...(binding.value || {}) }.enabled
    let config = vnode.appear.getConfig(binding)
    if (enable) vnode.appear.setup(el, config)
  },
  update(el, binding, vnode, oldVnode) {
    vnode.appear = oldVnode.appear
    let enabled = { enable: true, ...(binding.oldValue || {}) }.enabled
    let enable = { enable: true, ...(binding.value || {}) }.enabled
    let config = vnode.appear.getConfig(binding)
    // Setup or destroy based on `enabled` value.
    if (!enabled && enable) vnode.appear.setup(el, config)
    if (enabled && !enable) vnode.appear.destroy(el, config)
  }
}

export default VueAppear
