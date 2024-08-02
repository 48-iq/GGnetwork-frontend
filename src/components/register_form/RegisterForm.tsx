
import BaseButton from "../base_button/BaseButton";
import BaseInput from "../base_input/BaseInput"
import cl from './registerForm.module.css'
import LinkButton from "../link_button/LinkButton";


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
                <li className={cl.li2}><LinkButton to={"/"}>Ко входу</LinkButton></li>
            </ul>
        </form>
    )
}

export default RegisterForm;