type EssentialsProps = {
    title: string;
    off: string;
    date: string;
};

const Essentials = ({ title, off, date }: EssentialsProps) => {
    return (
        <div className="w-57 h-40.75 bg-[#ffffff] flex flex-col relative">
            <div className="flex flex-col gap-2.75 items-center pt-[36px]">
                <p className="text-[20px] font-bold leading-5">{title}</p>
                <p className="text-[20px] font-bold leading-5 text-[#FF2E00]">{off}</p>
            </div>
            <div className="bg-[#262626] w-full text-center text-[#ffffff] p-2.5 absolute bottom-0">
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Essentials;