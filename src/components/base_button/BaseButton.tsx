import React from "react";
import cl from './baseButton.module.css';

interface IBaseButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

const BaseButton: React.FC<IBaseButtonProps> = ({onClick, children}) => {
    return (
        <button onClick={onClick} className={cl.baseButton}>{children}</button>
    );
}

export default BaseButton;