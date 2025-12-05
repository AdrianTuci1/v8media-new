import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Anouncement = () => {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-row bg-black p-3 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer origin-bottom-right">
            <div className="w-[200px] flex flex-col space-between">
                <p className="text-white flex-1">{t('announcement.text')}</p>
                <div className="flex1 flex flex-row space-between gap-5 w-full">
                    <div className="flex items-center gap-2">
                        <img src="/logo.jpg" alt="" className="w-8 h-8 rounded-lg" />
                        <p className="text-white text-sm font-bold">{t('announcement.brand')}</p>
                    </div>
                    <button className="bg-white p-1 rounded-lg w-8 h-8 flex items-center justify-center">
                        <ArrowUpRight size={20} color="black" />
                    </button>
                </div>
            </div>
            <div className="">
                <img src="/lake.png" alt="" className="w-36 h-36 object-cover rounded-sm" />
            </div>
        </div>
    );
};

export default Anouncement;