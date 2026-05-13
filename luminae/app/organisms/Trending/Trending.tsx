import TrendingCard from "@/app/molecules/TrendingCard/TrendingCard"
import Trending1 from "../../../public/images/img/Trending1.jpg"
import Trending2 from "../../../public/images/img/Trending2.jpg"
import Trending3 from "../../../public/images/img/Trending3.jpg"
import NewArrivals from "../../../public/images/svg/NewArrivalsLogo.svg"
import Button from "@/app/atoms/Button/Button"

const Trending = () => {
    return (
        <div className="sm:p-[0px_90px] p-5 mb-17">
            <div className="flex place-content-between mb-12">
                <h3 className="text-[28px] leading-5">Trending must-haves</h3>
                <button className="text-[12px] text-[#262626] leading-5 cursor-pointer">View all</button>
            </div>
            <div className="flex place-content-between flex-wrap gap-5 justify-center">
                <TrendingCard
                    newArrivalsLogo={NewArrivals}
                    image={Trending1}
                    title="Cool & Sexy Calvin Klein"
                    description="Dotted dress-Casual"
                    button={
                        <Button
                            text="$89 Shop Now"
                            className="border border-[#D9D9D9] rounded-lg p-[12px_24px] text-[#ffffff] cursor-pointer"
                        />
                    }
                />
                <TrendingCard
                    image={Trending2}
                    title="Cool & Sexy Calvin Klein"
                    description="Dotted dress-Casual"
                    button={
                        <Button
                            text="$89 Shop Now"
                            className="border border-[#D9D9D9] rounded-lg p-[12px_24px] text-[#ffffff] cursor-pointer"
                        />
                    }
                    className="hidden sm:block"
                />
                <TrendingCard
                    newArrivalsLogo={NewArrivals}
                    image={Trending3}
                    title="beige coat Zara"
                    description="Cream-Brown-Formal"
                    button={
                        <Button
                            text="$102 Shop Now"
                            className="border border-[#D9D9D9] rounded-lg p-[12px_24px] text-[#ffffff] cursor-pointer"
                        />
                    }
                    className="hidden sm:block"
                />
            </div>
        </div>
    )
}

export default Trending