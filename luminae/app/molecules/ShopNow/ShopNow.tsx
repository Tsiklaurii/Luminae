import Button from "@/app/atoms/Button/Button";
import Image, { StaticImageData } from "next/image";
import Gift from "../../../public/images/svg/Gift.svg";
import Essentials from "@/app/atoms/Essentials/Essentials";

type ShopNowtProps = {
    image: StaticImageData;
    title: string;
    description: string;
}

const ShopNow = ({ image, title, description }: ShopNowtProps) => {
    return (
        <div className="flex relative">
            <Image alt={title} src={image} className="lg:w-136.75 w-[495] h-115" />
            <div className="flex flex-col justify-center gap-8 items-center w-full bg-[#668ee6] text-center">
                <div className="flex flex-col justify-center gap-8 items-center w-full">
                    <p className="uppercase text-[32px] font-bold text-[#FFFFFF] leading-12.5">{title}</p>
                    <p className="text-[28px] font-medium text-[#FFFFFF] leading-12.5">{description}</p>
                </div>
                <Button
                    icon={Gift}
                    text="Shop now"
                    className="flex gap-2 items-center uppercase cursor-pointer bg-[#4172DC] rounded-sm opacity-100 p-[16px_60px] text-[14px] text-[#ffffff]"
                />
            </div>
            <div className="absolute top-[25%] left-[30%] z-10 hidden lg:block">
                <Essentials
                    title="Summer Essentials"
                    off="20% off"
                    date="19 Jul-30 Jul"
                />
            </div>
        </div>
    )
}

export default ShopNow