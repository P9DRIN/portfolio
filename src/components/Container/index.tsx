import { CaretCircleDoubleUp } from "phosphor-react"
import { ReactNode } from "react"

interface ContainerProps{
    children: ReactNode
}

export function Container({children}: ContainerProps){

    function handleToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return(
        <div className="h-[200vh] bg-neutral-900 antialiased ">
            <div className="hidden md:hidden lg:block lg:fixed lg:top-[90%] lg:left-[95%] text-sky-500 hover:text-sky-600 animate-pulse-slow"><button className="h-10 w-10 text-4xl" onClick={handleToTop}><CaretCircleDoubleUp/></button></div>
            {children}
        </div>
    )
}