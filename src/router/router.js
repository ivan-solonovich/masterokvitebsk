import {createRouter, createWebHashHistory} from "vue-router";




import HomeMain from "@/components/home/HomeMain";
import WindowsHome from "@/components/windowshome/WindowsHome";


const routes =
    [

        {
            path: '/',
            name: 'home',
            component: HomeMain,

        },
        {
            path: '/windows/',
            name: 'windows',
            component: WindowsHome,

        },

    ]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})


export default router