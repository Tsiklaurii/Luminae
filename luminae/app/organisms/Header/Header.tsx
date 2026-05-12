import { Advert } from "@/app/atoms/Advert/Advert"
import Search from "@/app/molecules/Search/Search"

import Image from "next/image";
import Categories from '../../../public/images/svg/Categories.svg';
import CategoriesArrow from '../../../public/images/svg/CategoriesArrowWhite.svg';
import ManCosmetic from '../../../public/images/img/MenCosmetic.png';

import SignIn from '../../../public/images/svg/SignIn.svg';
import Favorites from '../../../public/images/svg/Favorites.svg';
import CartWhite from '../../../public/images/svg/CartWhite.svg';


const Header = () => {
    return (
        <div className="">
            <Search />
            <div className="justify-center bg-[#262626] lg:p-[8px_90px] p-[10px_13.5px] hidden sm:flex">
                <div className="flex place-content-between lg:w-315 w-220.25">
                    <div className="flex gap-5">
                        <Image alt="categories" src={Categories} className="cursor-pointer" />
                        <button className="flex text-[12px] items-center gap-1 text-[#FFFFFF] cursor-pointer">USD<Image alt="dropdown" src={CategoriesArrow} /></button>
                        <button className="flex text-[12px] items-center gap-1 text-[#FFFFFF] cursor-pointer">English<Image alt="dropdown" src={CategoriesArrow} /></button>
                    </div>
                    <div className="hidden lg:block">
                        <Advert
                            image={ManCosmetic}
                            title="Weekly Men's Toiletries Coupons."
                            description="We extend exclusive discounts to our male clientele"
                        />
                    </div>
                    <div className="flex gap-5">
                        <p className="flex gap-2 text-[#ffffff] text-[14px] leading-5 items-center cursor-pointer"><Image alt="Sign in" src={SignIn} /> Sign in</p>
                        <p className="flex gap-2 text-[#ffffff] text-[14px] leading-5 items-center cursor-pointer"><Image alt="Sign in" src={Favorites} /> Favorites</p>
                        <p className="flex gap-2 text-[#ffffff] text-[14px] leading-5 items-center cursor-pointer"><Image alt="Sign in" src={CartWhite} /> Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header