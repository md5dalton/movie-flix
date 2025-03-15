import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_TOKEN}`,
    }
}

export const moviesApi = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: TMDB_CONFIG.BASE_URL,
        prepareHeaders: headers => {
            headers.set("accept", "application/json")
            headers.set("Authorization", `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_TOKEN}`)
            return headers
        }
    }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: () => "/discover/movie?sort_by=popularity.desc",
        }),
        searchMovies: builder.query({
            query: term => `/search/movie?query=${encodeURIComponent(term)}`,
        }),
    }),
})

export const { useFetchMoviesQuery, useSearchMoviesQuery } = moviesApi