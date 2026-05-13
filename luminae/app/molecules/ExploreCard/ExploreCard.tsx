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
        <div className='flex sm:w-155 overflow-hidden justify-center'>
            <div className={`sm:w-77.5 w-54.75 p-[85px_25px] flex flex-col place-content-between ${className}`}>
                <div className="flex flex-col gap-4">
                    <h1 className="font-extrabold sm:text-[36px] text-[24px] text-[#ffffff] leading-11.5">{title}</h1>
                    <p className="sm:text-[28px] text-[18px] leading-9 text-[#ffffff]">{description}</p>
                </div>
                <Link href={href} className="text-[#ffffff] text-[20px] border-b w-45">{linkText}</Link>
            </div>
            <Image alt={title} src={image} className="sm:w-77.5 w-54.75 object-cover" />
        </div>
    );
};

export default ExploreCard;