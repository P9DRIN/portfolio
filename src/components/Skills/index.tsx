import { CaretRight } from "phosphor-react";
import { Skill } from "./components/skill";

export function Skills(){
    return(
        <>
            <div className="flex flex-col items-center gap-3">
            <div className="flex items-center mt-3 text-2xl md:text-3xl"><CaretRight/>SKILLS</div >
            <div className="flex flex-wrap w-[19rem] gap-2 md:w-[38rem]">
                <Skill><i className="devicon-javascript-plain "/><span>JavaScript</span></Skill>
                <Skill><i className="devicon-typescript-plain "/><span>TypeScript</span></Skill>
                <Skill><i className="devicon-react-original "/><span>React</span></Skill>
                <Skill><i className="devicon-nodejs-plain "/><span>NodeJS</span></Skill>
                <Skill><i className="devicon-mongodb-plain "/><span>MongoDB</span></Skill>
                <Skill><i className="devicon-express-original "/><span>Express</span></Skill>
                <Skill><i className="devicon-tailwindcss-plain "/><span>TailwindCSS</span></Skill>
                <Skill><i className="devicon-git-plain "/><span>Git</span></Skill>
            </div>
            </div>
        </>
    )
}