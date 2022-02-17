import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.vue', '.js', '.coffee', '.styl'],
    alias: {
      '@': path.resolve('src/component'),
      src: path.resolve('src'),
      asset: path.resolve('src/asset'),
      view: path.resolve('src/view'),
      store: path.resolve('src/store'),
      tool: path.resolve('src/tool'),
    },
  },
  plugins: [
    load(),
    svelte(),
  ]
})

// local rollup plugin 
function load() {
  return {
    name: 'load',
    load: function(id) {
      if (/(coffee|svelte)$/.test(id)) {
        return require('fs').readFileSync(id.split('?')[0]).toString().pug().coffee(id)
      }
    }
  }
}
String.prototype.coffee = function coffee(id) {
  var js, sourceMap;
  if (/coffee$/.test(id)) {
    ({js, sourceMap} = require('coffeescript').compile(this, {
      sourceMap: true,
    }));
    return {
      code: js,
      map: sourceMap
    };
  }
  return {
    // partial coffee defined by script lang="coffee"
    code: this.replace(/<script\s+lang="coffee"\s*>([^]*?)<\/script>/, function(a, $1) {
      return '<script>' + require('coffeescript').compile($1) + '</script>'
    })
  }
};

String.prototype.pug = function pug() {
  return this.replace(/<pug>([^]*?)<\/pug>/g, function(a, $1) {
    var str = $1.replace(/^[\n\r]*|[\s\n\r]*$/g, '')
    // resolve indent error for pug
    // remove empty space for each line, the spaces count is first line.
    var n = str.match(/^(\s*)/)[1].length
    str = str.replace(new RegExp(`^[\\s]{${n}}`, 'gm'), '')
    return require('pug').compile(str)()
  })
}
