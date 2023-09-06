
import "./About.css";
import ShowDataCard from "../../components/cards/Cards";
import {Route, Routes, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function About() {
    return <>

<h1>About</h1>
        <NavLink to="Cards" className='hover  mx-3'>Card</NavLink>
    <Routes>
<Route path="/cards" element={<ShowDataCard arr={['ahmead',"adil"]}/>}/>

    </Routes>
    

    </>
}