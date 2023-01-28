import React from 'react';
import s from './App.module.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Main} from "./features/main/Main";
import {routes} from "./features/routes/routes";
import {AboutUs} from "./features/aboutUs/AboutUs";
import {CurrentCase} from "./features/cases/currentCase/CurrentCase";
import {Services} from "./features/services/Services";
import {Bonuses} from "./features/bonuses/Bonuses";

import {Cases} from "./features/cases/Cases";
import {GetInTorch} from "./common/components/getInTorch/GetInTorch";
import {ScrollToTop} from "./common/components/ScrollToTop/ScrollToTop";
import {Contacts} from "./features/contacts/Contacts";

function App() {
  return (
    <div id={'home'} className={s.App} >
        <ScrollToTop/>
        <Header />
        <GetInTorch/>
               <Routes>
                   <Route path={'/'} element={<Main/>}/>
                   <Route path={routes.main} element={<Main/>}/>
                   <Route path={routes.aboutUs} element={<AboutUs/>}/>
                   <Route path={routes.caseRentClub} element={<CurrentCase/>}/>
                   <Route path={routes.cases} element={<Cases/>}/>
                   <Route path={routes.services} element={<Services/>}/>
                   <Route path={routes.bonuses} element={<Bonuses/>}/>
                   <Route path={routes.contacts} element={<Contacts/>}/>
               </Routes>
        <Footer/>
    </div>
  );
}

export default App;
