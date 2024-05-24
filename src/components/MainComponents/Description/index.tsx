import { AnimationContext } from "@/contexts/AnimationContext";
import { ArrowRight, GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { useContext } from "react";


export function Description(){
    
    const {  setSkeleton } = useContext(AnimationContext)


    const scrollToSkill = () => {
        window.scrollTo({
            top: 600,
            behavior: "smooth",
        })
        setSkeleton(false)
    }   


    return(
        <>
        <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-evenly lg:mt-[5rem] gap-5 mt-5 md:mt-8 antialiased">

            <div className="text-justify w-[17rem] md:w-[29rem] lg:w-[35rem]">

            <h4 className="text-sky-400 hover:text-sky-500 text-3xl">Olá! Meu nome é</h4>

           

            <h1 className="text-4xl md:text-5xl lg:text-6xl lg:mb-3 hover:text-neutral-300">Pedro Henrique,</h1>

            <span className="text-slate-300 md:text-2xl ">Gosto da sensação de criar coisas e vê-las acontecendo! A Programação me permite não só expor minhas ideias mas minhas emoções em cada linha de código! Por esse motivo, e, entre outros, venho ativamente conquistando cada vez mais meu lugar dentro desse universo, estudando. Possuo sólida base em desenvolvimento web   
            
            </span> <b className="text-sky-400 md:text-2xl ">front-end e back-end.</b> <span className=" text-slate-300 md:text-2xl">Estou pronto para transformar qualquer ideia em uma grande experiência neste mundo digital: Deixe-me transformar as suas, também!</span>

            
            <div className="w-[18rem] flex flex-wrap gap-2 mt-1 md:w-[30rem] md:justify-center lg:mt-5">
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">TypeScript</span>
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">React</span>
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">Next</span>
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">NodeJS</span>
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">Fastify</span>
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">Nest</span>
                <span className="text-white bg-sky-600 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500">Prisma</span>
                <button onClick={() => { 
                    scrollToSkill()

                }} className="text-white bg-sky-700 w-[4rem] md:w-[6rem] md:text-lg text-sm rounded-md flex items-center justify-center hover:bg-sky-500 gap-1 hover:cursor-pointer">Ver mais <ArrowRight size={16} weight="bold"/></button>
            </div>

            <div className="mt-6 flex items-center justify-center mb-5 gap-2 flex-col md:flex-row">

                <a href="mailto:pedrohenriquelimasilva2837@hotmail.com" className="bg-sky-800 font-semibold hover:bg-sky-900 p-3 md:p-5 text-2xl rounded-md">Me envie um email</a>
                <span className=" text-gray-500 ">OU</span>
                    
                <div className="flex gap-3">

                    <a href="https://linkedin.com/in/p9drin/" className="text-gray-400 hover:text-sky-500"><LinkedinLogo className="text-3xl md:text-4xl"/></a>
                    
                    <a href="https://api.whatsapp.com/send?phone=5512992391602" className="text-gray-400 hover:text-sky-500"><WhatsappLogo className="text-3xl md:text-4xl"/></a>

                    <a href="https://github.com/P9DRIN"
                     className="text-gray-400 hover:text-sky-500 "><GithubLogo className="text-3xl md:text-4xl"/></a>
                </div>

            </div>

        </div>

            <div>

                <img src='/mainphoto.jpg' className="mb-10 w-[12rem] h-[20rem] rounded-lg md:w-[18rem] md:h-[30rem] shadow-md shadow-neutral-950"/>

            </div>
        </div>
        </>
    )
}