import Image from "next/image";
import LogoSvg from '../../../public/images/svg/Logo.svg';

const Logo = () => {
    return (
        <div>
            <Image alt="Logo" src={LogoSvg} loading="eager" width={179} />
        </div>
    )
}

export default Logo