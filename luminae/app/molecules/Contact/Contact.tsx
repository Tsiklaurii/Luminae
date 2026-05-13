import Image from "next/image"
import ContactSvg from "../../../public/images/svg/Contact.svg"

type ContactProps = {
    className?: string;
};

const Contact = ({ className }: ContactProps) => {
    return (
        <div className={`bg-[#7296AB] rounded-lg p-[32px_56px] text-center flex flex-col gap-6 ${className}`}>
            <h1 className="text-[32px] font-bold leading-5 text-[#ffffff]">Luminae <span className="text-[#D1E2EB]">Store</span></h1>
            <p className="text-[16px] text-[#ffffff]">Register your email not to miss the last minutes off+ Free delivery</p>
            <div className="relative">
                <input type="text" placeholder="Enter your email" className="bg-[#ffffff] rounded-sm p-[8px_12px] focus:outline-none w-67" />
                <Image alt="Email" src={ContactSvg} className="absolute right-26 bottom-4 cursor-pointer" />
            </div>
        </div>
    )
}

export default Contact