import { CaretRight, LockSimpleOpen } from "phosphor-react";
import { Skill } from "./components/skill";
import { useContext } from "react";
import { AnimationContext } from "@/contexts/AnimationContext";

export function Skills(){

    const { skeleton, setSkeleton } = useContext(AnimationContext)

    return(
        <>
            <div className="flex flex-col items-center gap-3">
            <div className="flex items-center mt-3 text-2xl md:text-3xl"><CaretRight/>SKILLS</div >
            {
                skeleton ? (
                    <>
                <div onClick={() => {
                    setSkeleton(false)
                }} className="cursor-pointer hover:opacity-90 relative flex flex-wrap w-[19rem] gap-2 md:w-[38rem] justify-center items-center p-2 rounded-xl">
                <Skill><i className="devicon-javascript-plain "/><span>JavaScript</span></Skill>
                <Skill><i className="devicon-typescript-plain "/><span>TypeScript</span></Skill>
                <Skill><i className="devicon-react-original "/><span>React</span></Skill>
                <Skill><i className="devicon-nextjs-plain"/><span>NextJS</span></Skill>
                <Skill><i className="devicon-fastify-plain"/><span>Fastify</span></Skill>
                <Skill><i className="devicon-nestjs-plain"/><span>NestJS</span></Skill>
                <Skill><i className="devicon-mysql-plain-wordmark"/><span>MySQL</span></Skill>
                <Skill><i className="devicon-postgresql-plain"/><span>Postgres</span></Skill>
                <Skill><i className="devicon-mongodb-plain "/><span>MongoDB</span></Skill>
                <Skill><i className="devicon-express-original "/><span>Express</span></Skill>
                <Skill><i className="devicon-tailwindcss-plain "/><span>TailwindCSS</span></Skill>
                <Skill><i className="devicon-git-plain "/><span>Git</span></Skill>
                <div className="absolute  w-full h-full bg-neutral-950 opacity-40"/>
                <button onClick={() => {
                    setSkeleton(false)
                }} className="absolute p-3 bg-sky-800 border border-bg-sky-600 shadow-lg rounded-full hover:opacity-80"><LockSimpleOpen size={24}/></button>
                </div>
                    </>
                )
                :
                (
                    <>
                <div className="flex flex-wrap w-[19rem] gap-2 md:w-[38rem]">
                <Skill><i className="devicon-javascript-plain "/><span>JavaScript</span></Skill>
                <Skill><i className="devicon-typescript-plain "/><span>TypeScript</span></Skill>
                <Skill><i className="devicon-react-original "/><span>React</span></Skill>
                <Skill><i className="devicon-nextjs-plain"/><span>NextJS</span></Skill>
                <Skill><i className="devicon-fastify-plain"/><span>Fastify</span></Skill>
                <Skill><i className="devicon-nestjs-plain"/><span>NestJS</span></Skill>
                <Skill><i className="devicon-mysql-plain-wordmark"/><span>MySQL</span></Skill>
                <Skill><i className="devicon-postgresql-plain"/><span>Postgres</span></Skill>
                <Skill><i className="devicon-mongodb-plain "/><span>MongoDB</span></Skill>
                <Skill><i className="devicon-express-original "/><span>Express</span></Skill>
                <Skill><i className="devicon-tailwindcss-plain "/><span>TailwindCSS</span></Skill>
                <Skill><i className="devicon-git-plain "/><span>Git</span></Skill>
                </div>
                    </>
                )
            }
           
            </div>
        </>
    )
}