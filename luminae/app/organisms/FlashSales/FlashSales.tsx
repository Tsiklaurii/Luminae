import FlashSalesCard from "@/app/molecules/FlashSalesCard/FlashSalesCard"
import FlashSales1 from "../../../public/images/img/FlashSales1.png"
import FlashSales2 from "../../../public/images/img/FlashSales2.png"
import FlashSales3 from "../../../public/images/img/FlashSales3.png"
import FlashSales4 from "../../../public/images/img/FlashSales4.png"
import Stars from "../../../public/images/svg/Stars.svg"

const FlashSales = () => {
    return (
        <div className="sm:p-[0px_90px] p-5 mb-17">
            <div className="flex place-content-between mb-12">
                <h3 className="text-[28px] leading-5">Flash Sales</h3>
                <button className="text-[12px] text-[#262626] leading-5 cursor-pointer">View all</button>
            </div>
            <div className="flex place-content-between flex-wrap gap-5 justify-center">
                <FlashSalesCard
                    hour={12}
                    min={43}
                    sec={12}
                    image={FlashSales1}
                    title="Tonny Black"
                    description="Shoulder bag-White-Plain"
                    ratingImage={Stars}
                    rating="54"
                    newPrice="$69.99"
                    oldPrice="$129.99"
                    discount="-40%"
                />
                <FlashSalesCard
                    hour={2}
                    min={5}
                    sec={32}
                    image={FlashSales2}
                    title="Reebok"
                    description="Women’s Powder sneakers"
                    ratingImage={Stars}
                    rating="54"
                    newPrice="$112.03"
                    oldPrice="$129.99"
                    discount="-40%"
                />
                <FlashSalesCard
                    hour={2}
                    min={14}
                    sec={21}
                    image={FlashSales3}
                    title="Pasto"
                    description="Shoulder bag-Pink-Plain"
                    ratingImage={Stars}
                    rating="54"
                    newPrice="$69.99"
                    oldPrice="$129.99"
                    discount="-40%"
                    className="hidden sm:flex"
                />
                <FlashSalesCard
                    hour={25}
                    min={11}
                    sec={2}
                    image={FlashSales4}
                    title="Sketchers"
                    description="Sport-shoe 2102"
                    ratingImage={Stars}
                    rating="54"
                    newPrice="$80.00"
                    oldPrice="$129.99"
                    discount="-40%"
                    className="hidden sm:flex"
                />
            </div>
        </div>
    )
}

export default FlashSales