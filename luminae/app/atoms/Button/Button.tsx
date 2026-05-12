import Image, { StaticImageData } from "next/image";

type ButtonProps = {
    text?: string;
    className?: string;
    icon?: StaticImageData;
    onClick?: () => void;
};

const Button = ({ text, className = "", icon, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${className}`}>{icon && <Image alt={text || "icon"} src={icon} />} {text}</button>
    );
};

export default Button;