import { ArrowRight } from "lucide-react";


const Anouncement = () => {
    return (
        <div className="flex flex-row bg-black p-3 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer origin-bottom-right">
            <div className="w-[200px] flex flex-col space-between">
                <p className="text-white flex-1">Accelerated data lake development with AI-powered tools</p>
                <div className="flex1 flex flex-row space-between gap-5 w-full">
                    <div className="flex items-center gap-2">
                        <img src="/logo.jpg" alt="" className="w-8 h-8 rounded-lg" />
                        <p className="text-white text-sm font-bold">V8MEDIA</p>
                    </div>
                    <button className="bg-white p-1 rounded-lg w-8 h-8 flex items-center justify-center">
                        <ArrowRight size={20} color="black" />
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