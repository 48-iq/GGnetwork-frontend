import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../base_button/BaseButton";
import cl from './linkButton.module.css'

interface ILinkButtonProps {
    to: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}


const LinkButton: React.FC<ILinkButtonProps> = ({to, children, onClick}) => {
    return (
        <Link className={cl.link} to={to}><BaseButton onClick={onClick}>{children}</BaseButton></Link>
    )
}

export default LinkButton;