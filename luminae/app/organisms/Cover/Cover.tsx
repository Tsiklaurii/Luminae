import CoverMenu from "@/app/molecules/CoverMenu/CoverMenu"
import ShopNow from "@/app/molecules/ShopNow/ShopNow"

import CoverImg from "../../../public/images/img/Cover.png"


const Cover = () => {
    return (
        <div className="hidden sm:block">
            <CoverMenu />
            <ShopNow
                image={CoverImg}
                title="Kimonos, Caftans & Pareos"
                description="Poolside glam included From $4.99"
            />
        </div>
    )
}

export default Cover