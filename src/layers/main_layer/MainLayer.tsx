import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import cl from './mainLayer.module.css'
import Nav from "../../components/nav/Nav";
import NotificationsPanel from "../../components/notifications_panel/NotificationsPanel";

const MainLayer: React.FC = () => {

    return (
        <div className={cl.mainLayer}>
            <Header/>
            <main className={cl.main}>
                <Nav/>
                <div className={cl.content}>
                    <Outlet/>
                </div>
                <NotificationsPanel/>
            </main>
            
        </div>
    )
}

export default MainLayer;