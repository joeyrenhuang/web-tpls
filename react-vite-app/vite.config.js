import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve('src/component'),
    src: path.resolve('src'),
    asset: path.resolve('src/asset'),
    view: path.resolve('src/view'),
    store: path.resolve('src/store'),
    tool: path.resolve('src/tool'),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.coffee', '.styl']
  },
  plugins: [
    load(),
    react({
      babel: {
        plugins: []
      }
    }),
  ]
})
// local rollup plugin 
function load() {
  return {
    name: 'load',
    load: function(id) {
      if (/(coffee|jsx|pug)$/.test(id)) {
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
    code: this
  }
};

String.prototype.pug = function pug() {
  return this.replace(/pug`([^]*?)`/g, function(a, $1) {
    return require('pug').compile($1.trim())()
  })
};
