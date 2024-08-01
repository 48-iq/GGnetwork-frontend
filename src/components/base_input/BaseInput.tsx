import cl from './baseInput.module.css'

interface IBaseInputProps {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
}

const BaseInput: React.FC<IBaseInputProps> = (props) => {
    
    return <input {...props} className={cl.baseInput}/>
}

export default BaseInput;