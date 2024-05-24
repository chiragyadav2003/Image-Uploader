import { useNavigate } from "react-router-dom"

export const Quote = () => {
    const navigate = useNavigate();
    return <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
        <div className="flex text-black justify-center px-4">
            <div className="max-w-lg">
                <div className=" font-bold text-4xl pb-4">&quot;Everyday is a new journey, enjoy each moment !!&quot;</div>
                <div className=" font-bold text-2xl pb-1">Chirag Yadav</div>
                <div className=" font-semibold text-slate-500">Student, Developer</div>
            </div>
        </div>
        <button onClick={() => navigate("/")} className=" mt-10 bg-slate-500 py-4 px-8 font-semibold rounded-full hover:bg-slate-800 text-white scroll-smooth hover:duration-700 ">Home 🏡</button>
    </div>
}

