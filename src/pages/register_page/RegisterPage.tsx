
import RegisterForm from "../../components/register_form/RegisterForm";
import cl from './registerPage.module.css'

const RegisterPage: React.FC = () => {
    return (
        <div className={cl.registerPage}>
            <RegisterForm/>
        </div>
    )
}

export default RegisterPage;