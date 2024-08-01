import { Outlet } from "react-router-dom"
import cl from './backgroundLayer.module.css'

const BackgroundLayer: React.FC = () => {
    return (
    <>
        <div className={cl.backgroundImage}></div>
        <div className={cl.backgroundLayer}>
            <Outlet />

        </div>
    </>
    )
}

export default BackgroundLayer;