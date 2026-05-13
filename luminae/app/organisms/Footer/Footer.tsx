import Contact from "@/app/molecules/Contact/Contact"
import Link from "next/link"
import Image from "next/image"
import Visa from '../../../public/images/svg/Visa.svg'
import Mastercard from '../../../public/images/svg/Mastercard.svg'
import PayPal from '../../../public/images/svg/PayPal.svg'
import FooterIg from '../../../public/images/svg/FooterIg.svg'
import FooterFb from '../../../public/images/svg/FooterFb.svg'
import FooterTelegram from '../../../public/images/svg/FooterTelegram.svg'
import Button from "@/app/atoms/Button/Button"


const Footer = () => {
    return (
        <div>
            <div className="flex bg-[#D1E2EB] justify-center p-[132px_50px_60px] relative">
                <Contact className="absolute -top-25 hidden sm:flex" />
                <div className="w-222.25 flex sm:justify-between justify-center flex-wrap gap-15">
                    <div className="w-33.5">
                        <h3 className="text-[14px] text-[#262626] leading-5 mb-6.25">Company</h3>
                        <nav className="flex flex-col text-[14px] text-[#555555] gap-3.75">
                            <Link href="#">About us</Link>
                            <Link href="#">Our Store</Link>
                            <Link href="#">Contact us</Link>
                        </nav>
                    </div>
                    <div className="w-33.5">
                        <h3 className="text-[14px] text-[#262626] leading-5 mb-6.25">Career Opportunities</h3>
                        <nav className="flex flex-col text-[14px] text-[#555555] gap-3.75">
                            <Link href="#">Selling Programs</Link>
                            <Link href="#">Advertise</Link>
                            <Link href="#">Cooperation </Link>
                        </nav>
                    </div>
                    <div className="w-33.5">
                        <h3 className="text-[14px] text-[#262626] leading-5 mb-6.25">How to Buy</h3>
                        <nav className="flex flex-col text-[14px] text-[#555555] gap-3.75">
                            <Link href="#">Making Payments</Link>
                            <Link href="#">Delivery Options</Link>
                            <Link href="#">Buyer Protection</Link>
                            <Link href="#">New User Guide</Link>
                        </nav>
                    </div>
                    <div className="w-33.5">
                        <h3 className="text-[14px] text-[#262626] leading-5 mb-6.25">Help</h3>
                        <nav className="flex flex-col text-[14px] text-[#555555] gap-3.75">
                            <Link href="#">contact us</Link>
                            <Link href="#">FAQ</Link>
                            <Link href="#">Privacy Policy</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="p-[24px_100px]">
                <div className="border-b-[3px] border-b-[#D9D9D9] flex justify-between pb-3">
                    <div className="flex sm:justify-start justify-center w-full gap-6.25">
                        <Image alt="Visa" src={Visa} />
                        <Image alt="Mastercard" src={Mastercard} />
                        <Image alt="PayPal" src={PayPal} />
                    </div>
                    <Button text="English" className="text-[#262626] hidden sm:block" />
                </div>
                <div className="justify-between pt-9 hidden sm:flex">
                    <p className="text-[14px] text-[#262626]">165-179 Forster Road City of Monash, Melbourne, Australia</p>
                    <p className="text-[14px] text-[#9D9D9D]">©2023 Copyright in reserved for lumine shop</p>
                    <div className="flex gap-6 cursor-pointer">
                        <Image alt="FooterIg" src={FooterIg} />
                        <Image alt="FooterFb" src={FooterFb} />
                        <Image alt="FooterTelegram" src={FooterTelegram} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer