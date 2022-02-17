<script lang="coffee">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  # coffee comment
  console.log '1using coffee in svelte'
</script>

<template lang="pug">

  main
    img(src="{logo}" alt="Svelte Logo")  
    h1 Hello world!
    Counter
    p Visit 
      a(href="https://svelte.dev") svelte.dev
      | to learn how to build Svelte apps.
    p Check out 
      a(href="https://github.com/sveltejs/kit#readme") SvelteKit
      | for the officially supported framework, also powered by Vite!

</template>



<style lang="stylus">
  :root 
    font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  

  main 
    font-size 16px
    text-align center
    padding 1em
    margin 0 auto 
  

  img
    height 16em
    width 16em

  h1 
    color #ff3e00 
    text-transform uppercase
    font-size 4em
    font-weight 100
    line-height 1.1
    margin 2em auto
    max-width 14em
  

  p 
    max-width 14em
    margin 1em auto
    line-height 1.35
  

  @media (min-width 480px) 
    h1 
      max-width none
    

    p 
      max-width none
    
  
</style>
