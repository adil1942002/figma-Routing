import React from "react";
import About from "../pages/about/About";
import { BrowserRouter,Route ,Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import DashboardPage from "../pages/dashbord/DashBord";
export default function Router(){
    return<>
    
    <BrowserRouter>
    

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About/*" element={<About/>}/>
        <Route path="/DashboardPage/*" element={<DashboardPage />}/>
    </Routes>
    </BrowserRouter>
    </>
}