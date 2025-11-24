import MovieCard from "@/components/MovieCard"
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"

export default ({
        title,
        isLoading,
        error,
        media
    }: {
        title: string
        isLoading: Boolean
        error: FetchBaseQueryError 
        media: any[]
    }) => (
    <View className="px-5 py-2 bg-red-400">
        {
            isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    className="mt-10 self-center"
                />
            ) : error ? (
                <Text className="text-white">Error: {typeof error.status !== "number" ? error.error : error.status}</Text>
            ) : (
                <View className="pb-2">
                    <Text className="text-lg text-white font-bold py-4">{title}</Text>
                    <FlatList
                        data={media}
                        horizontal
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <MovieCard {...item} />}
                        contentContainerClassName="justify-start gap-4"
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            )
        }
    </View>
)