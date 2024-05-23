import { FolderInput, RadioTower } from "lucide-react"

interface ProjectProps{
    src: string
    title: string
    description: string
    link: string
    repoLink: string
}

export function Project({ src, title, description, link, repoLink  }: ProjectProps ){

    return(
        <div className="flex flex-col ">
            <a href={link} className="mt-4 flex items-center justify-center lg:p-5 bg-slate-800 ">
                <img src={src} alt='teste' className="w-[90%] h-[90%] lg:w-[65%] lg:h-[110%] shadow-md shadow-black"/>
            </a>
            <div className="flex flex-col gap-1 mt-3">
                <h1 className="flex items-center justify-center text-xl">{title}</h1>
                <span className="text-slate-300 flex items-center justify-center text-justify p-2 md:text-lg">{description}</span>
                <div className="flex">
                    
                </div>
                <div className="flex items-center justify-center gap-5 mt-5 mb-5">
                <a href={link} className=" bg-neutral-700 font-medium flex items-center justify-center w-[45%] h-[2rem] lg:h-[3rem] lg:text-xl p-1 gap-1 text-sky-400 hover:bg-sky-500 hover:text-gray-100 rounded-md"><RadioTower/>Projeto Online</a>
                <a href={repoLink} className=" bg-neutral-700 font-medium flex items-center justify-center w-[45%] h-[2rem] lg:h-[3rem] lg:text-xl p-1 gap-1 text-sky-400 hover:bg-sky-500 hover:text-gray-100 rounded-md"><FolderInput/>Repositório</a>
                </div>
            </div>
        </div>
    )
}