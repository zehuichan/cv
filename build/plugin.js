import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import uno from 'unocss/vite'

import { configHtmlPlugin } from './html'
import { configCompressPlugin } from './compress'
import { configElementPlusPlugin } from './element.js'

export function createVitePlugins(viteEnv, isBuild) {
  const {
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv

  const vitePlugins = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // have to
    uno()
  ]

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  vitePlugins.push(configElementPlusPlugin())

  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(
        VITE_BUILD_COMPRESS,
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      )
    )
  }

  return vitePlugins
}
