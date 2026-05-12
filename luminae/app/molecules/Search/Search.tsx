import Logo from "@/app/atoms/Logo/Logo"
import HeaderMenu from "@/app/atoms/HeaderMenu/HeaderMenu"
import Networks from "@/app/atoms/Networks/Networks"
import SearchInput from "@/app/atoms/Search/SearchInput"

import Image from "next/image";
import MenuIcon from '../../../public/images/svg/MenueIcon.svg';
import Cart from '../../../public/images/svg/Cart.svg';

const Search = () => {
    return (
        <div className="lg:p-[31.5px_90px] p-[13.5px] w-full flex justify-center">
            <div className="lg:w-315 w-220.25 flex items-center gap-3 place-content-between flex-wrap">
                <Image alt="Burger menu" src={MenuIcon} className="block sm:hidden" />
                <Logo />
                <div className="hidden sm:block">
                    <SearchInput />
                </div>
                <div className="hidden sm:block">
                    <HeaderMenu />
                </div>
                <div className="hidden sm:block">
                    <Networks />
                </div>
                <Image alt="Cart" src={Cart} className="block sm:hidden" />
            </div>
        </div>
    )
}

export default Search