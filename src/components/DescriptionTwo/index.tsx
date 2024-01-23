import { Projects } from "../Projects";
import { Skills } from "../Skills";

export function DescriptionTwo(){
    return(
        <>
        <div className=" bg-neutral-800 flex flex-col ">
            <Skills/>
            <Projects/>
        </div>
        </>
    )
}