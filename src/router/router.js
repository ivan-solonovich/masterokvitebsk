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
import DoorArmany12 from "@/components/door-inside/armany_12/DoorArmany12";
import DoorArmany13 from "@/components/door-inside/armany_13/DoorArmany13";
import DoorArmany14 from "@/components/door-inside/armany_14/DoorArmany14";
import DoorArmany15 from "@/components/door-inside/armany_15/DoorArmany15";
import DoorArmany16 from "@/components/door-inside/armany_16/DoorArmany16";
import DoorArmany17 from "@/components/door-inside/armany_17/DoorArmany17";
import DoorArmany18 from "@/components/door-inside/armany_18/DoorArmany18";
import DoorArmany19 from "@/components/door-inside/armany_19/DoorArmany19";
import DoorArmany20 from "@/components/door-inside/armany_20/DoorArmany20";
import DoorArmany21 from "@/components/door-inside/armany_21/DoorArmany21";
import DoorArmany22 from "@/components/door-inside/armany_22/DoorArmany22";
import DoorBlanko00 from "@/components/door-inside/blanko_00/DoorBlanko00";
import DoorBlanko01 from "@/components/door-inside/blanko_01/DoorBlanko01";
import DoorBlanko03 from "@/components/door-inside/blanko_03/DoorBlanko03";
import DoorBlanko04 from "@/components/door-inside/blanko_04/DoorBlanko04";
import DoorBlanko06 from "@/components/door-inside/blanko_06/DoorBlanko06";
import DoorBlanko07 from "@/components/door-inside/blanko_07/DoorBlanko07";
import DoorBlanko12 from "@/components/door-inside/blanko_12/DoorBlanko12";
import DoorBlanko17 from "@/components/door-inside/blanko_17/DoorBlanko17";
import DoorSeriesArmany from "@/components/door-inside/DoorSeriesArmany";
import DoorSeriesBlanko from "@/components/door-inside/DoorSeriesBlanko";
import DoorSeriesStandart from "@/components/door-inside/DoorSeriesStandart";
import DoorStandart01 from "@/components/door-inside/standart_01/DoorStandart01";
import DoorStandart02 from "@/components/door-inside/standart_02/DoorStandart02";
import DoorStandart04 from "@/components/door-inside/standart_04/DoorStandart04";
import DoorStandart05 from "@/components/door-inside/standart_05/DoorStandart05";
import DoorStandart06 from "@/components/door-inside/standart_06/DoorStandart06";
import DoorStandart07 from "@/components/door-inside/standart_07/DoorStandart07";
import DoorStandart09 from "@/components/door-inside/standart_09/DoorStandart09";
import DoorStandart10 from "@/components/door-inside/standart_10/DoorStandart10";
import DoorStandart12 from "@/components/door-inside/standart_12/DoorStandart12";
import DoorStandart13 from "@/components/door-inside/standart_13/DoorStandart13";
import DoorStandart14 from "@/components/door-inside/standart_14/DoorStandart14";
import DoorStandart15 from "@/components/door-inside/standart_15/DoorStandart15";
import DoorStandart17 from "@/components/door-inside/standart_17/DoorStandart17";
import DoorStandart19 from "@/components/door-inside/standart_19/DoorStandart19";
import DoorStandart22 from "@/components/door-inside/standart_22/DoorStandart22";
import DoorStandart25 from "@/components/door-inside/standart_25/DoorStandart25";
import DoorStandart29 from "@/components/door-inside/standart_29/DoorStandart29";
import DoorStandart31 from "@/components/door-inside/standart_31/DoorStandart31";
import DoorStandart33 from "@/components/door-inside/standart_33/DoorStandart33";
import DoorStandart34 from "@/components/door-inside/standart_34/DoorStandart34";
import DoorStandart36 from "@/components/door-inside/standart_36/DoorStandart36";
import DoorStandart38 from "@/components/door-inside/standart_38/DoorStandart38";
import DoorStandart39 from "@/components/door-inside/standart_39/DoorStandart39";
import DoorStandart49 from "@/components/door-inside/standart_49/DoorStandart49";
import DoorStandartTripoly2 from "@/components/door-inside/standart_tripoly2/DoorStandartTripoly2";
import DoorArmanyM1 from "@/components/door-inside/armany_m1/DoorArmanyM1";
import DoorArmany25 from "@/components/door-inside/armany_25/DoorArmany25";
import DoorKnobWrapper from "@/components/knob/DoorKnobWrapper";
import ArcksContainer from "@/components/arcks/ArcksContainer";
import ArcksMilan from "@/components/arcks/ArcksMilan";
import ArcksPalermo from "@/components/arcks/ArcksPalermo";
import EntranceDoorWrapper from "@/components/entrance-door/EntranceDoorWrapper";
import EntranceDoorGarda from "@/components/entrance-door/EntranceDoorGarda";
import EntranceDoorStaller from "@/components/entrance-door/EntranceDoorStaller";
import EntranceDoorYochcar from "@/components/entrance-door/EntranceDoorYochcar";
import StroyGost5 from "@/components/entrance-door/garda/strygost/StroyGost5";
import StroyGost5Met from "@/components/entrance-door/garda/stroygost5-met/StroyGost5-met";
import StroyGost5Sylver from "@/components/entrance-door/garda/stroygost5sylver/StroyGost5Sylver";

import GardaDoor8 from "@/components/entrance-door/garda/garda8/GardaDoor8";
import GardaMuar8 from "@/components/entrance-door/garda/gardamuar9/GardaMuar8";
import GardaMuarCarga6 from "@/components/entrance-door/garda/gardamuarcarga6/GardaMuarCarga6";
import GardaMuar10 from "@/components/entrance-door/garda/gardamuar10/GardaMuar10";
import Garda8Inside from "@/components/entrance-door/garda/garda8inside/Garda8Inside";
import GardaMuarCargaLazer from "@/components/entrance-door/garda/muarlazer/GardaMuarCargaLazer";
import GardaChicagoNew from "@/components/entrance-door/garda/gardachicagonew/GardaChicagoNew";
import Garda9Sylver from "@/components/entrance-door/garda/garda9sylver/Garda9Sylver";
import Garda9SilverMirror from "@/components/entrance-door/garda/garda9silvermirror/Garda9SilverMirror";
import GardaBarcelona from "@/components/entrance-door/garda/gardabarcelona/GardaBarcelona";
import GardaPhenixLines from "@/components/entrance-door/garda/gardaphenix/GardaPhenixLines";
import GardaBoston from "@/components/entrance-door/garda/boston/GardaBoston";
import GardaFlorida from "@/components/entrance-door/garda/florida/GardaFlorida";
import Garda75D from "@/components/entrance-door/garda/garda75d/Garda75D";
import GardaIsoterma from "@/components/entrance-door/garda/isoterma/GardaIsoterma";

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
            path: '/doors-inside/armany',
            name: 'armany',
            component: DoorSeriesArmany,

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
        {
            path: '/doors-inside/armany_12',
            name: 'armany_12',
            component: DoorArmany12,

        },
        {
            path: '/doors-inside/armany_13',
            name: 'armany_13',
            component: DoorArmany13,

        },
        {
            path: '/doors-inside/armany_14',
            name: 'armany_14',
            component: DoorArmany14,

        },
        {
            path: '/doors-inside/armany_15',
            name: 'armany_15',
            component: DoorArmany15,

        },
        {
            path: '/doors-inside/armany_16',
            name: 'armany_16',
            component: DoorArmany16,

        },
        {
            path: '/doors-inside/armany_17',
            name: 'armany_17',
            component: DoorArmany17,

        },
        {
            path: '/doors-inside/armany_18',
            name: 'armany_18',
            component: DoorArmany18,

        },
        {
            path: '/doors-inside/armany_19',
            name: 'armany_19',
            component: DoorArmany19,

        },
        {
            path: '/doors-inside/armany_20',
            name: 'armany_20',
            component: DoorArmany20,

        },
        {
            path: '/doors-inside/armany_21',
            name: 'armany_21',
            component: DoorArmany21,

        },
        {
            path: '/doors-inside/armany_22',
            name: 'armany_22',
            component: DoorArmany22,

        },
        {
            path: '/doors-inside/armany_25',
            name: 'armany_25',
            component: DoorArmany25,

        },
        {
            path: '/doors-inside/armany_m1',
            name: 'armany_m1',
            component: DoorArmanyM1,

        },
        {
            path: '/doors-inside/blanko',
            name: 'blanko',
            component: DoorSeriesBlanko,

        },
        {
            path: '/doors-inside/blanko_00',
            name: 'blanko_00',
            component: DoorBlanko00,

        },
        {
            path: '/doors-inside/blanko_01',
            name: 'blanko_01',
            component: DoorBlanko01,

        },
        {
            path: '/doors-inside/blanko_03',
            name: 'blanko_03',
            component: DoorBlanko03,

        },
        {
            path: '/doors-inside/blanko_04',
            name: 'blanko_04',
            component: DoorBlanko04,

        },
        {
            path: '/doors-inside/blanko_06',
            name: 'blanko_06',
            component: DoorBlanko06,

        },
        {
            path: '/doors-inside/blanko_07',
            name: 'blanko_07',
            component: DoorBlanko07,

        },
        {
            path: '/doors-inside/blanko_12',
            name: 'blanko_12',
            component: DoorBlanko12,

        },
        {
            path: '/doors-inside/blanko_17',
            name: 'blanko_17',
            component: DoorBlanko17,

        },
        {
            path: '/doors-inside/standart',
            name: 'standart',
            component: DoorSeriesStandart,

        },
        {
            path: '/doors-inside/standart_01',
            name: 'standart_01',
            component: DoorStandart01,

        },
        {
            path: '/doors-inside/standart_02',
            name: 'standart_02',
            component: DoorStandart02,

        },
        {
            path: '/doors-inside/standart_04',
            name: 'standart_04',
            component: DoorStandart04,

        },
        {
            path: '/doors-inside/standart_05',
            name: 'standart_05',
            component: DoorStandart05,

        },
        {
            path: '/doors-inside/standart_06',
            name: 'standart_06',
            component: DoorStandart06,

        },
        {
            path: '/doors-inside/standart_07',
            name: 'standart_07',
            component: DoorStandart07,

        },
        {
            path: '/doors-inside/standart_09',
            name: 'standart_09',
            component: DoorStandart09,

        },
        {
            path: '/doors-inside/standart_10',
            name: 'standart_10',
            component: DoorStandart10,

        },
        {
            path: '/doors-inside/standart_12',
            name: 'standart_12',
            component: DoorStandart12,

        },
        {
            path: '/doors-inside/standart_13',
            name: 'standart_13',
            component: DoorStandart13,

        },
        {
            path: '/doors-inside/standart_14',
            name: 'standart_14',
            component: DoorStandart14,

        },
        {
            path: '/doors-inside/standart_15',
            name: 'standart_15',
            component: DoorStandart15,

        },
        {
            path: '/doors-inside/standart_17',
            name: 'standart_17',
            component: DoorStandart17,

        },
        {
            path: '/doors-inside/standart_19',
            name: 'standart_19',
            component: DoorStandart19,

        },
        {
            path: '/doors-inside/standart_22',
            name: 'standart_22',
            component: DoorStandart22,

        },
        {
            path: '/doors-inside/standart_25',
            name: 'standart_25',
            component: DoorStandart25,

        },
        {
            path: '/doors-inside/standart_29',
            name: 'standart_29',
            component: DoorStandart29,

        },
        {
            path: '/doors-inside/standart_31',
            name: 'standart_31',
            component: DoorStandart31,

        },
        {
            path: '/doors-inside/standart_33',
            name: 'standart_33',
            component: DoorStandart33,

        },
        {
            path: '/doors-inside/standart_34',
            name: 'standart_34',
            component: DoorStandart34,

        },
        {
            path: '/doors-inside/standart_36',
            name: 'standart_36',
            component: DoorStandart36,

        },
        {
            path: '/doors-inside/standart_38',
            name: 'standart_38',
            component: DoorStandart38,

        },
        {
            path: '/doors-inside/standart_39',
            name: 'standart_39',
            component: DoorStandart39,

        },
        {
            path: '/doors-inside/standart_49',
            name: 'standart_49',
            component: DoorStandart49,

        },
        {
            path: '/doors-inside/standart_tripoly2',
            name: 'standart_tripoly2',
            component: DoorStandartTripoly2,

        },
        {
            path: '/knob',
            name: 'knob',
            component: DoorKnobWrapper

        },
        {
            path: '/arcks',
            name: 'arcks',
            component: ArcksContainer

        },
        {
            path: '/arcks/arcks-milan',
            name: 'arcks-milan',
            component: ArcksMilan

        },
        {
            path: '/arcks/arcks-palermo',
            name: 'arcks-palermo',
            component: ArcksPalermo

        },
        {
            path: '/entrance-door',
            name: 'entrance-door',
            component: EntranceDoorWrapper

        },
        {
            path: '/entrance-door/garda',
            name: 'entrance-door-garda',
            component: EntranceDoorGarda

        },
        {
            path: '/entrance-door/staller',
            name: 'entrance-door-staller',
            component: EntranceDoorStaller

        },
        {
            path: '/entrance-door/staller-comfort',
            name: 'entrance-door-staller-comfort',
            component: EntranceDoorStaller

        },
        {
            path: '/entrance-door/yochcar',
            name: 'entrance-door-yochcar',
            component: EntranceDoorYochcar

        },
        {
            path: '/entrance-door/garda-stroygost5',
            name: 'entrance-door-garda-stroygost5',
            component: StroyGost5

        },
        {
            path: '/entrance-door/garda-stroygost5met',
            name: 'entrance-door-garda-stroygost5met',
            component: StroyGost5Met

        },
        {
            path: '/entrance-door/garda-stroygost5syl',
            name: 'entrance-door-garda-stroygost5syl',
            component: StroyGost5Sylver

        },
        {
            path: '/entrance-door/garda-8',
            name: 'entrance-door-garda-8',
            component: GardaDoor8

        },
        {
            path: '/entrance-door/garda-muar-8',
            name: 'entrance-door-garda-muar-8',
            component: GardaMuar8

        },
        {
            path: '/entrance-door/garda-muar-6',
            name: 'entrance-door-garda-muar-6',
            component: GardaMuarCarga6

        },
        {
            path: '/entrance-door/garda-muar-10',
            name: 'entrance-door-garda-muar-10',
            component: GardaMuar10

        },
        {
            path: '/entrance-door/garda-8-ins',
            name: 'entrance-door-garda-8-ins',
            component: Garda8Inside

        },
        {
            path: '/entrance-door/garda-muar-lazer',
            name: 'entrance-door-garda-muar-lazer',
            component: GardaMuarCargaLazer

        },
        {
            path: '/entrance-door/garda-chicago',
            name: 'entrance-door-garda-chicago',
            component: GardaChicagoNew

        },
        {
            path: '/entrance-door/garda-9-sylver',
            name: 'entrance-door-garda-9-sylver',
            component: Garda9Sylver

        },
        {
            path: '/entrance-door/garda-9-sylver-mirror',
            name: 'entrance-door-garda-9-sylver-mirror',
            component: Garda9SilverMirror

        },
        {
            path: '/entrance-door/garda-barcelona',
            name: 'entrance-door-garda-barcelona',
            component: GardaBarcelona

        },
        {
            path: '/entrance-door/garda-phenix',
            name: 'entrance-door-garda-phenix',
            component: GardaPhenixLines

        },
        {
            path: '/entrance-door/garda-boston',
            name: 'entrance-door-garda-boston',
            component: GardaBoston

        },
        {
            path: '/entrance-door/garda-florida',
            name: 'entrance-door-garda-florida',
            component: GardaFlorida

        },
        {
            path: '/entrance-door/garda-duble',
            name: 'entrance-door-garda-duble',
            component: Garda75D

        },
        {
            path: '/entrance-door/garda-isoterma',
            name: 'entrance-door-garda-isoterma',
            component: GardaIsoterma

        },
    ]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})


export default router