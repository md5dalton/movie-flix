import { MediaType } from "@/types/type"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const moviesApi = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://192.168.1.100:3001/api",
        prepareHeaders: headers => {
            headers.set("accept", "application/json")
            return headers
        }
    }),
    endpoints: (builder) => ({
        searchMovies: builder.query({
            query: term => `/search/movie?query=${encodeURIComponent(term)}`,
        }),
        latestMedia: builder.query({
            query: () => "/feed/latest",
        }),
        popular: builder.query({
            query: (type: MediaType) => `/feed/popular/${type}`,
        }),
    }),
})

export const {
    useSearchMoviesQuery,
    usePopularQuery,
    useLatestMediaQuery,

} = moviesApi