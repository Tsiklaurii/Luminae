import Top100Card from "@/app/molecules/Top100Card/Top100Card"

import Top1 from "../../../public/images/img/Top1.jpg"
import Top2 from "../../../public/images/img/Top2.jpg"
import Top3 from "../../../public/images/img/Top3.jpg"
import Top4 from "../../../public/images/img/Top4.jpg"
import Top100Stars from "../../../public/images/svg/Top100Stars.svg"

const Top100 = () => {
    return (
        <div className="sm:p-[0px_90px] p-5 mb-17">
            <div className="flex place-content-between mb-12">
                <h3 className="text-[28px] leading-5">Top100</h3>
                <button className="text-[12px] text-[#262626] leading-5 cursor-pointer">View all</button>
            </div>
            <div className="flex place-content-between xl:flex-nowrap flex-wrap xml:gap-0 gap-5 xml:justify-between justify-center">
                <Top100Card
                    image={Top1}
                    title="Mango"
                    description="Kimono & Caftan - Black - Regular fit"
                    ratingImage={Top100Stars}
                    rating={289}
                    newPrice="$228"
                    oldPrice="$290"
                    discount="-10%"
                />
                <Top100Card
                    image={Top2}
                    title="Zara"
                    description="Midi top- Daily fit"
                    ratingImage={Top100Stars}
                    rating={523}
                    newPrice="$95"
                    oldPrice="$145"
                    discount="-7%"
                    className="hidden sm:block"
                />
                <Top100Card
                    image={Top3}
                    title="Uniqlo"
                    description="Midi atlas Slim fit - bohemian"
                    ratingImage={Top100Stars}
                    rating={86}
                    newPrice="$125"
                    oldPrice="$156"
                    discount="-8%"
                    className="hidden sm:block"
                />
                <Top100Card
                    image={Top4}
                    title="Mango dress"
                    description="Kimono & Caftan - Colorful - Night club fit"
                    ratingImage={Top100Stars}
                    rating={121}
                    newPrice="$365"
                    oldPrice="$487"
                    discount="-15%"
                    className="hidden sm:block"
                />
            </div>
        </div>
    )
}

export default Top100