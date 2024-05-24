import { Skeleton } from "@/components/Skeleton";
import { AnimationContext } from "@/contexts/AnimationContext";
import { ReactNode, useContext } from "react";

interface SkillProps{
    children: ReactNode
}

export function Skill({children}: SkillProps){

    const { skeleton } = useContext(AnimationContext)


    return(
        <>
        {
            skeleton ? (
                 <Skeleton isLoading={true} className="text-gray-200 w-[6rem] md:w-[12rem] md:p-5 md:text-xl bg-sky-900 p-3 flex-wrap flex items-center gap-1"/>
            ) :
            (
                <>
                <div className=" text-gray-200 w-[6rem] md:w-[12rem] md:p-2 md:text-xl bg-sky-700 p-1 flex items-center gap-1 hover:bg-sky-500 ">
                    {children}
                </div>
                </>
            )
        }
        </>

    )
}