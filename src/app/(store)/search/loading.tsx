import { Skeleton } from "@/components/skeleton"
export default function LoadingSearch(){
    return(
        <div className="flex flex-wrap gap-4">
            <Skeleton className="w-[384px] h-[384px]" />
            <Skeleton className="w-[384px] h-[384px]" />
            <Skeleton className="w-[384px] h-[384px]" />
            <Skeleton className="w-[384px] h-[384px]" />
            <Skeleton className="w-[384px] h-[384px]" />
        </div>
    )
}