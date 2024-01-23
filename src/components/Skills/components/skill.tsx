import { ReactNode } from "react";

interface SkillProps{
    children: ReactNode
}

export function Skill({children}: SkillProps){
    return(
        <div className=" text-gray-200 w-[6rem] md:w-[12rem] md:p-2 md:text-xl bg-sky-700 p-1 flex items-center gap-1 hover:bg-sky-500 ">
            {children}
        </div>
    )
}