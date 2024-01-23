export function Header(){

    const scrollToProject = () => {
        window.scrollTo({
            top: 1100,
            behavior: 'smooth'
        })
    }

    const scrollToProjectMD = () => {
        window.scrollTo({
            top: 1400,
            behavior: 'smooth'
        })
    }

    return(
        <>
        <div className="h-[4rem] flex justify-around">
            <div className="mt-7 md:mt-7">
            
            <button onClick={scrollToProject} 
            className="md:text-2xl md:hidden">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button onClick={scrollToProjectMD}
            className="md:text-2xl hidden md:block">
                <span className="text-sky-600">#</span>Projetos
            </button>

            <button className="md:text-2xl hidden ">
                <span className="text-sky-600">#</span>Projetos
            </button>

            </div>
            <div><h2>teste</h2></div>
        </div>
        </>
    )
}