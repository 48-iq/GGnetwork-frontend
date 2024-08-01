import { Link } from "react-router-dom";
import BaseButton from "../base_button/BaseButton";
import BaseInput from "../base_input/BaseInput"
import cl from './registerForm.module.css'


const RegisterForm: React.FC = () => {
    
    return (
        <form className={cl.registerForm}>
            <BaseInput placeholder="Имя"/>
            <BaseInput placeholder="Фамилия"/>
            <BaseInput placeholder="Отчество"/>
            <BaseInput placeholder="Никнейм"/>
            <BaseInput placeholder="Пароль"/>
            <BaseInput placeholder="Повторите пароль"/>
            <ul> 
                <li className={cl.li1}><BaseButton>Зарегистрироваться</BaseButton></li>
                <li className={cl.li2}><Link to={"/"}><BaseButton>Ко входу</BaseButton></Link></li>
            </ul>
        </form>
    )
}

export default RegisterForm;