import ExploreCard from "@/app/molecules/ExploreCard/ExploreCard"
import Explore1 from "../../../public/images/img/Explore1.png"
import Explore2 from "../../../public/images/img/Explore2.png"
import Explore3 from "../../../public/images/img/Explore3.jpg"
import Explore4 from "../../../public/images/img/Explore4.jpg"
import Advert2Img from "../../../public/images/img/Advert2.png"
import { Advert2 } from "@/app/atoms/Advert2/Advert2"

type ExploreProps = {
    mobile?: boolean;
}

const Explore = ({ mobile = false }: ExploreProps) => {
    if (mobile) {
        return (
            <div className="flex flex-col gap-5 p-5">
                <ExploreCard
                    title="Never-Ending Summer"
                    description="Throwback Shirts & all-day dressed"
                    linkText="Explore all categories"
                    href="#"
                    image={Explore1}
                    className="bg-[#BF2E3B]"
                />

                <ExploreCard
                    title="The most famous sport brands"
                    description="Get in gym essentials"
                    linkText="Explore all categories"
                    href="#"
                    image={Explore2}
                    className="bg-[#1D5159]"
                />
            </div>
        )
    }
    return (
        <div className="flex flex-col mb-17">
            <div className="mb-17 p-[0px_90px] flex place-content-between xl:flex-nowrap flex-wrap xml:gap-0 gap-5 xml:justify-between justify-center">
                <ExploreCard
                    title="Never-Ending Summer"
                    description="Throwback Shirts & all-day dressed"
                    linkText="Exlopre all category"
                    href={"#"}
                    image={Explore1}
                    className="bg-[#BF2E3B]"
                />
                <ExploreCard
                    title="The most famous sport brands"
                    description="Get in gym essentials"
                    linkText="Exlopre all category"
                    href={"#"}
                    image={Explore2}
                    className="bg-[#1D5159]"
                />
            </div>
            <Advert2
                title="MagSafe"
                description="Snap on a magnetic case, wallet, or both. And get faster wireless charging."
                image={Advert2Img}
                className="bg-[#F7DDD0] hidden md:flex"
            />
            <div className="flex p-[0px_90px] mb-17 place-content-between xl:flex-nowrap flex-wrap xml:gap-0 gap-5 xml:justify-between justify-center">
                <ExploreCard
                    title="The Pinky Barbie Edition"
                    description="Lets play dress up"
                    linkText="Exlopre all category"
                    href={"#"}
                    image={Explore3}
                    className="bg-[#D11FB5]"
                />
                <ExploreCard
                    title="Best Sellers Everyone Loves"
                    description="poolside glam include"
                    linkText="Exlopre all category"
                    href={"#"}
                    image={Explore4}
                    className="bg-[#0186C4]"
                />
            </div>
        </div>
    )
}

export default Explore