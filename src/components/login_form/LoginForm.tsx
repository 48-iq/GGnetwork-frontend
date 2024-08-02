import BaseButton from "../base_button/BaseButton";
import BaseInput from "../base_input/BaseInput";
import cl from './loginForm.module.css'
import LinkButton from "../link_button/LinkButton";

const LoginForm: React.FC = () => {
    return (
        <form className={cl.loginForm}>
            <BaseInput placeholder="Никнейм"/>
            <BaseInput placeholder="Пароль"/>
            <ul>
                <li><BaseButton>Войти</BaseButton></li>
                <li><LinkButton to={"/register"}>К регистрации</LinkButton></li>
            </ul>
        </form>
    );
}

export default LoginForm;