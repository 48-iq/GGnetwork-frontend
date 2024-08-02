import cl from './header.module.css';


const Header: React.FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.logo}></div>
            <div className={cl.title}>GGnetwork</div>
            <div className={cl.icon}></div>
        </header>
    );
}

export default Header;