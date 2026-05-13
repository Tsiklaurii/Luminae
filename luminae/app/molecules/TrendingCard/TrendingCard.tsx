import Image, { StaticImageData } from "next/image";

type TrendingCardProps = {
    image: StaticImageData;
    newArrivalsLogo?: StaticImageData;
    title: string;
    description: string;
    button?: React.ReactNode;
    className?: string;
};

const TrendingCard = ({ image, newArrivalsLogo, title, description, button, className }: TrendingCardProps) => {
    return (
        <div className={`lg:w-[406.66px] w-202.75 h-109.25 relative ${className}`}>
            <Image alt={title} src={image} className="rounded-t-lg h-86 object-cover object-top" />
            {newArrivalsLogo && (<Image alt="New Arrivals" src={newArrivalsLogo} className="absolute top-0" />)}
            <div className="h-23.25 bg-[#262626] rounded-b-lg flex p-5 place-content-between">
                <div className="flex flex-col place-content-between">
                    <p className="text-[#FFFFFF] text-[16px] leading-6.25 font-bold">{title}</p>
                    <p className="text-[14px] text-[#C4C4C4] leading-5">{description}</p>
                </div>
                {button}
            </div>
        </div>
    );
};

export default TrendingCard;