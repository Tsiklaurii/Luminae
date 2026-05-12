import Image from "next/image";
import Ig from '../../../public/images/svg/Ig.svg';
import Fb from '../../../public/images/svg/Fb.svg';
import Telegram from '../../../public/images/svg/Telegram.svg';

const Networks = () => {
    return (
        <div className="flex gap-3">
            <Image alt="Instagram" src={Ig} className="cursor-pointer" />
            <Image alt="Facebook" src={Fb} className="cursor-pointer" />
            <Image alt="Telegram" src={Telegram} className="cursor-pointer" />
        </div>
    )
}

export default Networks