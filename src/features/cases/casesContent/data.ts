import rentMarket from "../../../assets/img/case/rentMarket.png";
import couchingVisit from "../../../assets/img/case/couchingVisit.png";
import partyCorporat from "../../../assets/img/case/partyCorporat.png";
import prosnowVisit from "../../../assets/img/case/prosnowVisit.png";
import elephantVizit from "../../../assets/img/case/elephantVizit.png";
import granitCatalog from "../../../assets/img/case/granitCatalog.png";
import mediaCorporat from "../../../assets/img/case/mediaCorporat.png";
import noomblistMarket from "../../../assets/img/case/noomblistMarket.png";
import sdCatalog from "../../../assets/img/case/sdCatalog.png";
import sodoxCatalog from "../../../assets/img/case/sodoxCatalog.png";
import wellCatalog from "../../../assets/img/case/wellCatalog.png";
import {routes} from "../../routes/routes";

export type casesDataType = {
    id: string
    type: string
    routes: string
    img: string
}
export type CasesDataType='market'|'visit'|'corporat'|'catalog'|'all'

export const casesData:any ={
    ['market']: [
        {id: '1', type: 'market', routes: routes.caseRentClub, img: rentMarket},
        {id: '8', type: 'market', routes: routes.caseRentClub, img: noomblistMarket}],
    ['visit']: [{id: '2', type: 'visit', routes: routes.caseRentClub, img: couchingVisit},
        {id: '4', type: 'visit', routes: routes.caseRentClub, img: prosnowVisit},
        {id: '5', type: 'visit', routes: routes.caseRentClub, img: elephantVizit},],
    ['corporat']: [   {id: '3', type: 'corporat', routes: routes.caseRentClub, img: partyCorporat},
        {id: '7', type: 'corporat', routes: routes.caseRentClub, img: mediaCorporat}],
    ['catalog']: [{id: '9', type: 'catalog', routes: routes.caseRentClub, img: sdCatalog},
        {id: '10', type: 'catalog', routes: routes.caseRentClub, img: sodoxCatalog},
        {id: '11', type: 'catalog', routes: routes.caseRentClub, img: wellCatalog},
        {id: '6', type: 'catalog', routes: routes.caseRentClub, img: granitCatalog},],
    ['all']: [{id: '1', type: 'market', routes: routes.caseRentClub, img: rentMarket},
    {id: '2', type: 'visit', routes: routes.caseRentClub, img: couchingVisit},
    {id: '3', type: 'corporat', routes: routes.caseRentClub, img: partyCorporat},
    {id: '4', type: 'visit', routes: routes.caseRentClub, img: prosnowVisit},
    {id: '5', type: 'visit', routes: routes.caseRentClub, img: elephantVizit},
    {id: '6', type: 'catalog', routes: routes.caseRentClub, img: granitCatalog},
    {id: '7', type: 'corporat', routes: routes.caseRentClub, img: mediaCorporat},
    {id: '8', type: 'market', routes: routes.caseRentClub, img: noomblistMarket},
    {id: '9', type: 'catalog', routes: routes.caseRentClub, img: sdCatalog},
    {id: '10', type: 'catalog', routes: routes.caseRentClub, img: sodoxCatalog},
    {id: '11', type: 'catalog', routes: routes.caseRentClub, img: wellCatalog},
]
}
