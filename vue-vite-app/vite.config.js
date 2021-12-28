import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
    extensions: ['.vue', '.js', '.coffee']
  },
  plugins: [
    coffee(),
    vue(),
  ]
})

// local rollup plugin 
function coffee () {
  return {
    name: 'coffee',
    transform: function(src, id) {
      var js, sourceMap;
      if (/\.coffee$/.test(id)) {
        ({js, sourceMap} = require('coffeescript').compile(src, {
          sourceMap: true,
        }));
        return {
          code: js,
          map: sourceMap
        };
      }
    }
  };
};


