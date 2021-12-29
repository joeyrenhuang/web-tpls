<script lang="coffee" > 
import HelloWorld from '@/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
img(alt="Vue logo" src="./asset/logo.png")
HelloWorld(msg="Hello Vue 3 + Vite")
p {{ n }}
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
