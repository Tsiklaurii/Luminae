import Image, { StaticImageData } from "next/image";

type FlashSalesCardProps = {
    hour: number;
    min: number;
    sec: number;
    image: StaticImageData;
    title: string;
    description: string;
    ratingImage: StaticImageData;
    rating: number;
    newPrice: string;
    oldPrice: string;
    discount: string;
    className?: string;
};

const FlashSalesCard = ({ hour, min, sec, image, title, description, ratingImage, rating, newPrice, oldPrice, discount, className}: FlashSalesCardProps) => {
    return (
        <div className={`w-75 h-95 rounded-lg shadow-[0px_0px_12px_2px_rgba(0,0,0,0.10)] flex flex-col justify-between items-center pt-[19.5px] cursor-pointer ${className}`}>
            <div className="text-center h-19.25 flex flex-col place-content-between">
                <h2 className="text-[#9D9D9D] text-[16px] font-extrabold leading-5">Deal of the Day</h2>
                <h3 className="flex place-content-between font-extrabold text-[18px] text-[#262626]">
                    <span>{String(hour).padStart(2, "0")}</span>:
                    <span> {String(min).padStart(2, "0")}</span>:
                    <span>{String(sec).padStart(2, "0")}</span>
                </h3>
                <p className="flex gap-6.75 text-[#9D9D9D] text-[12px]">
                    <span>hour</span>
                    <span>min</span>
                    <span>sec</span>
                </p>
            </div>
            <Image alt={title} src={image} />
            <div className="h-32 flex flex-col place-content-between p-[16px_0px]">
                <h2 className="text-[16px] text-[#262626] font-extrabold">{title}</h2>
                <p className="text-[#555555] text-[12px]">{description}</p>
                <div className="flex gap-1.25">
                    <Image alt="Rating" src={ratingImage} />
                    <p className="text-[12px] text-[#555555]">({rating})</p>
                </div>
                <div className="flex gap-2.5">
                    <h3 className="text-[14px] text-[#FF2E00] font-bold">{newPrice}</h3>
                    <h3 className="text-[14px] text-[#555555]">{oldPrice}</h3>
                    <h3 className="bg-[#FF2E00] text-[8px] text-[#FFFFFF] rounded-[2.06px] p-[3px_6px] flex items-center">{discount}</h3>
                </div>
            </div>
        </div>
    );
};

export default FlashSalesCard;