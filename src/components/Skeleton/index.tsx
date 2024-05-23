
interface SkeletonProps{
    className: string
    isLoading: boolean
}

export function Skeleton({ className, isLoading }: SkeletonProps){

    return(
        <>
        <div className={`${className} bg-neutral-700 rounded-md ${isLoading ? 'animate-pulse-slow' : ''}`}/>
        </>
    )
}