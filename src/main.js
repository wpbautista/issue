import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueTheStorages from 'vue-the-storages'
import VueAxios from 'vue-axios'
import axios from 'axios'


const app = createApp(App)
app.use(router).use(vueTheStorages)
app.use(VueAxios, axios)
app.use(store)
app.mount('#app')