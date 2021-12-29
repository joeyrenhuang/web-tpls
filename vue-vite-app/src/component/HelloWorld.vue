<script lang="coffee">
import { ref } from 'vue'

export default {
  props: ['msg']
  setup: =>
    {
      count: ref(0)
      coffee: ref(' + coffee') 
    }
}
</script>

<template lang="pug">
h1 {{ msg }} {{coffee}}
p
  | Recommended IDE setup:
  <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
  | +
  <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>

p
  <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
  | |
  <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>

button(type="button" @click="count++") count is: {{ count }}
p
  | Edit
  <code>components/HelloWorld.vue</code> to test hot module replacement.
</template>

<style scoped lang="stylus">
a
  color #42b983
</style>
