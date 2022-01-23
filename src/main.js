import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './style/index.scss'
import components from '@/components/ui'

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app
  .use(store)
  .mount('#app')
