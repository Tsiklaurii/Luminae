import ShopNow from "@/app/molecules/ShopNow/ShopNow"

import CoverImg from "../../../public/images/img/Cover.png"


const Cover = () => {
    return (
        <div className="hidden sm:block mb-21">
            <div className="w-full flex justify-center">
                <nav className="flex lg:p-[44px_90px_16px_90px] justify-between p-[44px_0px_16px] lg:w-full w-220.25 text-[#555555]">
                    <a href="#" className="text-[14px] cursor-pointer text-[#FF7A00]">Woman</a>
                    <a href="#" className="text-[14px] cursor-pointer">Male</a>
                    <a href="#" className="text-[14px] cursor-pointer">Mother-Child</a>
                    <a href="#" className="text-[14px] cursor-pointer">Home & Furniture</a>
                    <a href="#" className="text-[14px] cursor-pointer">Super market</a>
                    <a href="#" className="text-[14px] cursor-pointer">Cosmetics</a>
                    <a href="#" className="text-[14px] cursor-pointer">Shoe & Bag</a>
                    <a href="#" className="text-[14px] cursor-pointer">Electronic</a>
                    <a href="#" className="text-[14px] cursor-pointer">Sport & Outdoor</a>
                    <a href="#" className="text-[14px] cursor-pointer">Best seller</a>
                </nav>
            </div>
            <ShopNow
                image={CoverImg}
                title="Kimonos, Caftans & Pareos"
                description="Poolside glam included From $4.99"
            />
        </div>
    )
}

export default Cover