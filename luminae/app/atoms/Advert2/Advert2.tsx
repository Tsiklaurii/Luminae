import Image, { StaticImageData } from "next/image";
import Left from "../../../public/images/svg/Left.svg"
import Right from "../../../public/images/svg/Right.svg"

type Advert2Props = {
    image: StaticImageData;
    title: string;
    description: string;
    className?: string;
};

export const Advert2 = ({ image, title, description, className }: Advert2Props) => {
    return (
        <div className={`flex lg:p-[0px_90px] p-[0px_30px] place-content-between mb-17 ${className}`}>
            <Image alt="Left" src={Left} className="cursor-pointer" />
            <div className="flex gap-17.5 xl:p-0 p-[49px_70px]">
                <div className="w-123.25 flex flex-col gap-4 justify-center">
                    <h2 className="text-[24px] text-[#465D6B] font-bold leading-5 uppercase">{title}</h2>
                    <p className="text-[20px] text-[#555555] leading-7">{description}</p>
                </div>
                <Image alt="Product" src={image} className="xl:w-123.25 w-[268.5px]" />
            </div>
            <Image alt="Right" src={Right} className="cursor-pointer" />
        </div>
    );
};