import { Link } from "react-router-dom";
import BaseButton from "../base_button/BaseButton";
import BaseInput from "../base_input/BaseInput";
import cl from './loginForm.module.css'

const LoginForm: React.FC = () => {
    return (
        <form className={cl.loginForm}>
            <BaseInput placeholder="Никнейм"/>
            <BaseInput placeholder="Пароль"/>
            <ul>
                <li><BaseButton>Войти</BaseButton></li>
                <li><Link to={"/register"}><BaseButton>К регистрации</BaseButton></Link></li>
            </ul>
        </form>
    );
}

export default LoginForm;