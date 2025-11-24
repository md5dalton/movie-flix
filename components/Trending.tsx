import { usePopularQuery } from "@/service/api"
import { MediaType } from "@/types/type"
import MediaSection from "./MediaSection"

export default ({ title, type }: {title: string, type: MediaType}) => {

    const { data, isLoading, error } = usePopularQuery(type)
    
    return (
        <MediaSection
            isLoading={isLoading}
            error={error}
            media={data}
            title={title}
        />
    )
}