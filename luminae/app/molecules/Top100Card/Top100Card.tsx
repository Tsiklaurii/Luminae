import Image, { StaticImageData } from "next/image";
import Favorite from "../../../public/images/svg/Heart.svg"

type Top100CardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    ratingImage: StaticImageData;
    rating: number;
    newPrice: string;
    oldPrice: string;
    discount: string;
    className?: string
};

const Top100Card = ({ image, title, description, ratingImage, rating, newPrice, oldPrice, discount, className }: Top100CardProps) => {
    return (
        <div className={`w-98.75 h-120 relative shadow-[0px_0px_12px_2px_rgba(0,0,0,0.10)] rounded-t-lg ${className}`}>
            <Image alt={title} src={image} className="rounded-t-lg h-86 w-full object-cover object-top" />
            <div className="h-34 p-5 flex flex-col place-content-between">
                <div className="flex place-content-between">
                    <div>
                        <h3 className="text-[12px] text-[#262626] font-bold">{title}</h3>
                        <p className="text-[10px] text-[#555555]">{description}</p>
                    </div>
                    <Image alt="Favorite" src={Favorite} className="cursor-pointer" />
                </div>
                <div className="flex gap-3.5 items-center">
                    <Image alt="Rating" src={ratingImage} />
                    <p className="text-[12px] text-[#555555]">({rating})</p>
                </div>

                <div className="flex gap-2.5 items-center">
                    <h3 className="text-[14px] text-[#FF2E00] font-bold">{newPrice}</h3>
                    <h3 className="text-[14px] text-[#555555]">{oldPrice}</h3>
                    <h3 className="text-[12px] text-[#FF2E00]">{discount}</h3>
                </div>
            </div>
        </div>
    );
};

export default Top100Card;