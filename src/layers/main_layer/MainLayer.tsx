import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import cl from './mainLayer.module.css'
import Nav from "../../components/nav/Nav";

const MainLayer: React.FC = () => {

    return (
        <div className={cl.mainLayer}>
            <Header/>
            <main className={cl.main}>
                <Nav/>
                <div>
                    <Outlet/>
                </div>
            </main>
            
        </div>
    )
}

export default MainLayer;