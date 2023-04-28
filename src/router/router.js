import {createRouter, createWebHashHistory} from "vue-router";




import HomeMain from "@/components/home/HomeMain";
import WindowsHome from "@/components/windowshome/WindowsHome";
import DoorInsideWrapper from "@/components/door-inside/DoorInsideWrapper";

import DoorArmany00 from "@/components/door-inside/armany_00/DoorArmany00";
import DoorArmany01 from "@/components/door-inside/armany_01/DoorArmany01";
import DoorArmany02 from "@/components/door-inside/armany_02/DoorArmany02";
import DoorArmany03 from "@/components/door-inside/armany_03/DoorArmany03";
import DoorArmany04 from "@/components/door-inside/armany_04/DoorArmany04";
import DoorArmany05 from "@/components/door-inside/armany_05/DoorArmany05";
import DoorArmany06 from "@/components/door-inside/armany_06/DoorArmany06";
import DoorArmany07 from "@/components/door-inside/armany_07/DoorArmany07";
import DoorArmany09 from "@/components/door-inside/armany_09/DoorArmany09";
import DoorArmany10 from "@/components/door-inside/armany_10/DoorArmany10";
import DoorArmany11 from "@/components/door-inside/armany_11/DoorArmany11";

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
        {
            path: '/doors-inside/armany_04',
            name: 'armany_04',
            component: DoorArmany04,

        },
        {
            path: '/doors-inside/armany_05',
            name: 'armany_05',
            component: DoorArmany05,

        },
        {
            path: '/doors-inside/armany_06',
            name: 'armany_06',
            component: DoorArmany06,

        },
        {
            path: '/doors-inside/armany_07',
            name: 'armany_07',
            component: DoorArmany07,

        },
        {
            path: '/doors-inside/armany_09',
            name: 'armany_09',
            component: DoorArmany09,

        },
        {
            path: '/doors-inside/armany_10',
            name: 'armany_10',
            component: DoorArmany10,

        },
        {
            path: '/doors-inside/armany_11',
            name: 'armany_11',
            component: DoorArmany11,

        },
    ]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})


export default router