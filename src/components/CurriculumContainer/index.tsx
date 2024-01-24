import { ReactNode } from "react"

interface ContainerProps{
    children: ReactNode
}

export function CurriculumContainer({children}: ContainerProps){
    return(
        <>
        <div className="h-[120vh] bg-neutral-900 antialiased ">
            {children}
        </div>
        </>
    )
}