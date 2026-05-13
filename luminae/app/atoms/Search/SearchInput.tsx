import Image from "next/image";
import SearchSvg from '../../../public/images/svg/Search.svg';
import CategoriesArrow from '../../../public/images/svg/CategoriesArrow.svg';

const SearchInput = () => {
    return (
        <div className="flex items-center border border-[#D9D9D9] rounded-sm overflow-hidden px-3 py-2">
            <input type="text" placeholder="Search Products" className="focus:outline-none" />

            <button className="border-r border-[#E9E9E9] text-sm cursor-pointer h-6 items-center flex gap-1.75 pr-4.75 text-[#262626]">All Categories
                <Image alt="Logo" src={CategoriesArrow} loading="eager" width={10} />
            </button>

            <button className="pl-3 cursor-pointer">
                <Image alt="Logo" src={SearchSvg} loading="eager" width={17} />
            </button>
        </div>
    )
}

export default SearchInput