import {createRouter, createWebHashHistory} from "vue-router";




import HomeMain from "@/components/home/HomeMain";
import WindowsHome from "@/components/windowshome/WindowsHome";
import DoorInsideWrapper from "@/components/door-inside/DoorInsideWrapper";

import DoorArmany00 from "@/components/door-inside/armany_00/DoorArmany00";
import DoorArmany01 from "@/components/door-inside/armany_01/DoorArmany01";
import DoorArmany02 from "@/components/door-inside/armany_02/DoorArmany02";
import DoorArmany03 from "@/components/door-inside/armany_03/DoorArmany03";

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
        {
            path: '/doors-inside/',
            name: 'doorsInside',
            component: DoorInsideWrapper,

        },
        {
            path: '/doors-inside/armany_00',
            name: 'armany_00',
            component: DoorArmany00,

        },
        {
            path: '/doors-inside/armany_01',
            name: 'armany_01',
            component: DoorArmany01,

        },
        {
            path: '/doors-inside/armany_02',
            name: 'armany_02',
            component: DoorArmany02,

        },
        {
            path: '/doors-inside/armany_03',
            name: 'armany_03',
            component: DoorArmany03,

        },
    ]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})


export default router