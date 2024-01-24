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
            top: 3000,
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
        <div className="h-[4rem] flex justify-around items-center">
            <div className="mt-7 md:mt-7 flex gap-5">
            
            <button onClick={scrollToProject} 
            className="md:text-2xl md:hidden">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button onClick={scrollToProjectMD}
            className="md:text-2xl hidden md:block lg:hidden">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button onClick={scrollToProjectLG} className="md:text-2xl hidden md:hidden lg:block ">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button className="md:text-2xl md:hidden" onClick={scrollToContact}>
            <span className="text-sky-600 ">#</span>Contato
            </button>

            <button className="md:text-2xl hidden md:block lg:hidden" onClick={scrollToContact}>
            <span className="text-sky-600 ">#</span>Contato
            </button>

            <button className="md:text-2xl hidden md:hidden lg:block" onClick={scrollToContact}>
            <span className="text-sky-600 ">#</span>Contato
            </button>
            



            </div>
            <div className="mt-7 md:mt-7 md:text-2xl">
                <Link to='/curriculum' className="text-sky-600">
                    #<span className="text-neutral-100">Curriculo</span>
                </Link>
            </div>
        </div>
        </>
    )
}