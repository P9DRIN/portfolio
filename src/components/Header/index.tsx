import { Link } from "react-router-dom"

export function Header(){

    const scrollToProject = () => {
        window.scrollTo({
            top: 1100,
            behavior: 'smooth'
        })
    }
    const scrollToContact = () => {
        window.scrollTo({
            top: 4000,
            behavior: "smooth",
        })
    }

    const scrollToProjectMD = () => {
        window.scrollTo({
            top: 1400,
            behavior: 'smooth'
        })
    }

    const scrollToProjectLG = () => {
        window.scrollTo({
            top: 950,
            behavior: 'smooth'
        })
    }

    return(
        <>
        <div className="h-[4rem] flex justify-around items-center border-b border-b-neutral-800 ">
            <div className="mt-1 md:mt-0 flex gap-5 ">
            
            <button onClick={scrollToProject} 
            className="md:text-2xl md:hidden hover:text-neutral-300">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button onClick={scrollToProjectMD}
            className="md:text-2xl hidden md:block lg:hidden hover:text-neutral-300">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button onClick={scrollToProjectLG} className="md:text-2xl hidden md:hidden lg:block  hover:text-neutral-300">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button className="md:text-2xl md:hidden hover:text-neutral-300" onClick={scrollToContact}>
            <span className="text-sky-600 ">#</span>Contato
            </button>

            <button className="md:text-2xl hidden md:block lg:hidden hover:text-neutral-300" onClick={scrollToContact}>
            <span className="text-sky-600 ">#</span>Contato
            </button>

            <button className="md:text-2xl hidden md:hidden lg:block hover:text-neutral-300" onClick={scrollToContact}>
            <span className="text-sky-600 ">#</span>Contato
            </button>
            



            </div>
            <div className="mt-1 md:mt-0 md:text-2xl">
                <Link to='/curriculum' className="text-sky-600">
                    #<a href="/phlsCurriculum.pdf" className="text-neutral-100 hover:text-neutral-300" download>Curriculo</a>
                </Link>
            </div>
        </div>
        </>
    )
}