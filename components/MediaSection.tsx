import MovieCard from "@/components/MovieCard"
import { ActivityIndicator, Text, View } from "react-native"
import { FlashList } from "@shopify/flash-list"

export default ({
        title,
        isLoading,
        error,
        media
    }: {
        title: string
        isLoading: Boolean
        error: any 
        media: any[]
    }) => (
    <View className="px-5 py-2">
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
                    <FlashList
                        data={media}
                        horizontal
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <MovieCard {...item} />}
                        contentContainerClassName="justify-start gap-x-4 space-x-2"
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            )
        }
    </View>
)