import Image, { StaticImageData } from "next/image";

type AdvertProps = {
    image: StaticImageData;
    title: string;
    description: string;
}

export const Advert = ({ image, title, description }: AdvertProps) => {
    return (
        <div className="flex border-r border-r-[#7B7B7B] border-l border-l-[#7B7B7B] gap-2.5 p-[0px_72px]">
            <Image alt={title} src={image} className="w-15.75 h-15.5" />
            <div className="pt-[10.5px] pb-[10.5px]">
                <p className="text-[12px] text-[#FFFFFF] font-bold leading-5">{title}</p>
                <p className="text-[12px] text-[#C4C4C4] leading-5">{description}</p>
            </div>
        </div>
    )
}
