import { createApp } from 'vue'
import App from './App.vue'
import VueWriter from "vue-writer";

const app = createApp(App)
app.use(

    VueWriter
    )

    .mount('#app')
