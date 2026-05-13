import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ExploreCardProps = {
    title: string;
    description: string;
    image: StaticImageData;
    linkText: string;
    href: string;
    className?: string;
};

const ExploreCard = ({ title, description, image, linkText, href, className }: ExploreCardProps) => {
    return (
        <div className='flex w-155'>
            <div className={`w-77.5 p-[80px_25px] flex flex-col place-content-between ${className}`}>
                <div className="flex flex-col gap-4">
                    <h1 className="font-extrabold text-[36px] text-[#ffffff] leading-11.5">{title}</h1>
                    <p className="text-[28px] leading-9 text-[#ffffff]">{description}</p>
                </div>
                <Link href={href} className="text-[#ffffff] text-[20px] border-b w-45">{linkText}</Link>
            </div>
            <Image alt={title} src={image} className="w-77.5 object-cover" />
        </div>
    );
};

export default ExploreCard;