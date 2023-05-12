import { createApp } from 'vue'
import App from './App.vue'
import VueWriter from "vue-writer";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "@/router/router";

import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const app = createApp(App)
app.use(
    router,
    VueWriter,

    )

    .mount('#app')
