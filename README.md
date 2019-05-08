# Vue Appear 🙈

[![Version](https://img.shields.io/npm/v/vue-appear.svg)](https://www.npmjs.com/package/vue-appear)
[![License](https://img.shields.io/npm/l/vue-appear.svg)](https://www.npmjs.com/package/vue-appear)

Vue directive that helps you appear stuff as it comes into view.

> This is simply a helper that adds a class to your desiered elements, actual appearing should be done using CSS.


## Quickstart

### Installation

Install with your preffered package manager:

```bash
npm install --save vue-appear
# or
yarn add vue-appear
```

### Setup

Once installed register the plugin with [Vue]:

```js
import Vue from 'vue'
import VueAppear from 'vue-appear'

Vue.use(VueAppear)
```

If you wish to override default settings you can pass in the options as a second argument:

```js
Vue.use(VueAppear, {
  immediate: false,
  toggle: false,
  children: false,
  offset: 150,
  hook: 'onEnter',
  delay: 0,
  class: 'appear',
  selector: null,
  callback: () => {}
})
```

### Usage in templates

To make elements appear in your templates:

```html
<!-- Appear once element comes into view -->
<div v-appear></div>

<!-- Appear immediately -->
<div v-appear.immediate></div>

<!-- Toggle apperance as they come into view, and leave -->
<div v-appear.toggle></div>

<!-- Appear children as they come into view -->
<div v-appear.children>
  <h4>Title</h4>
  <p>Lorem ipsum dolor sin</p>
</div>

<!-- Combine modifiers as you wish -->
<div v-appear.toggle.children>
  <h4>Title</h4>
  <p>Lorem ipsum dolor sin</p>
</div>

<!-- Pass in additional options -->
<div v-appear="{
  offset: 300,
  delay: 300,
  class: 'show',
  callback: onShow,
  enabled: isAppearEnabled
}"></div>
```

## API Options

| Setting | Description | Type | Default |
| --- | --- | --- | --- |
| immediate | Set if element should appear immediately, ignoring scroll. | *boolean* | false
| toggle | Toggle element appearance when enters and leaves scroll view. | *boolean* | false
| children | Appear element children instead. | *boolean* | false
| offset | Offset amount before element appears. | *number* | 150
| hook | When should element appear in relation to the view ('onEnter', 'onCenter' or 'onLeave'). | *string* | 'onEnter'
| delay | How long should pass after page load before applying the appear class. | *number* | 0
| class | Class to add when element appears. | *string* | 'appear'
| selector | Query selector for children, if passed in children are appeared. | *string* | null
| callback | Callback function when element appears or disappears, receives a boolean argument. | *function* | null
| enabled | A boolean value that can be used to toggle the appearing. | *boolean* | true

## Release notes

To see changes view the [Changelog] file.

[Vue]: https://vuejs.org/
[Changelog]: https://github.com/dinoperovic/vue-appear/blob/master/CHANGELOG.md
