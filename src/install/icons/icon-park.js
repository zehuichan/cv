import { IconPark } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'

export function setupIconPark(app) {
  console.log(IconPark)
  app.component(IconPark.name, IconPark)
}
