
import LinkButton from '../link_button/LinkButton';
import cl from './nav.module.css'

const Nav: React.FC = () => {

    return (
        <nav className={cl.nav}>
            <LinkButton to='/main'>Главная</LinkButton>
            <LinkButton to='/profile'>Профиль</LinkButton>
            <LinkButton to='/messages'>Сообщения</LinkButton>
            <LinkButton to='/forum'>Форум</LinkButton>
            <LinkButton to='/friends'>Друзья</LinkButton>
            <LinkButton to='/groups'>Группы</LinkButton>
            <LinkButton to='/games'>Игры</LinkButton>
            <LinkButton to='/tutorials'>Гайды</LinkButton>
            <LinkButton to='/settings'>Настройки</LinkButton>
            <LinkButton to='/logout'>Выход</LinkButton>
        </nav>
    )
    
}

export default Nav;