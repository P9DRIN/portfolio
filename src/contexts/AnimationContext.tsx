import { ReactNode, createContext, useState } from "react";

interface AnimationContextProps {
    children: ReactNode
}

interface AnimationContextType {
    skeleton: boolean
    setSkeleton: (skeleton: boolean) => void
}

export const AnimationContext = createContext({} as AnimationContextType);

export function AnimationProvider({children}: AnimationContextProps) {

    const [skeleton, setSkeleton] = useState<boolean>(true)


    return (
        <AnimationContext.Provider value={{
            skeleton,
            setSkeleton
        }}>
            {children}
        </AnimationContext.Provider>
    )
}