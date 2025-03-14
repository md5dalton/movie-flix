import { useState } from "react"

export default <T>() => {

    const [data, setData] = useState<T | null> (null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null> (null)

    const fetchData = async (url: string) => {
        
        try {

            setLoading(true)

            const response = await fetch(url)

            const result = await response.json()

            setData(result)
            
        } catch (error: any) {

            setError(error)
            
        } finally {

            setLoading(false)

        }
    }

    const clearData = () => {
        setData(null)
        setLoading(false)
        setError(null)
    }

    return { data, loading, error, fetchData, clearData }
    
}