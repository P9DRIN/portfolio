import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";



export function MainContactInfo(){

    const navigate = useNavigate()

    function backHome(){
        navigate('/')
    }

    return(
        <>
        <div className="bg-cyan-800 p-2 text-neutral-100 flex justify-center items-center flex-col w-[100%]">
            <button className="flex mr-[85%] mt-2" onClick={backHome}><ChevronLeft/><span>Back</span></button>
            <h1 className="mt-2 font-semibold md:text-xl lg:text-2xl">[ Pedro Henrique Lima Silva, 21 ]</h1>
            <span className="md:text-lg lg:text-xl">[ São José dos Campos - SP ]</span>
            <a className="bg-neutral-800 rounded-md p-1 text-sm md:text-base lg:text-lg" href="mailto:pedrohenriquelimasilva2837@hotmail.com">[ pedrohenriquelimasilva2837@hotmail.com ]</a>
            <div className="flex flex-wrap justify-center mt-5 gap-1 ">
            <a className="bg-neutral-800 rounded-md p-1 text-xs md:text-base lg:text-lg"  href="https://github.com/P9DRIN">[github.com/P9DRIN]</a>
            <a className="bg-neutral-800 rounded-md p-1 text-xs md:text-base lg:text-lg" href="https://vercel.com/p9drin">[vercel.com/P9DRIN]</a>
            <a className="bg-neutral-800 rounded-md p-1 text-xs md:text-base lg:text-lg" href="https://www.linkedin.com/in/P9DRIN/">[linkedin.com/p9drin]</a>
            </div>
        </div>
        </>
    )
}