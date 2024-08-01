import LoginForm from "../../components/login_form/LoginForm";
import cl from './loginPage.module.css'

const LoginPage: React.FC = () => {

    return (
        <div className={cl.loginPage}>
            <LoginForm/>
        </div>
    );
}

export default LoginPage;