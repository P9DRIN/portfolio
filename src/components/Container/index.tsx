import { ReactNode } from "react"

interface ContainerProps{
    children: ReactNode
}

export function Container({children}: ContainerProps){
    return(
        <div className="h-[200vh] bg-neutral-900 ">
            {children}
        </div>
    )
}