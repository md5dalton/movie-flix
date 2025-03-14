import MovieCard from "@/components/MovieCard"
import SearchBar from "@/components/SearchBar"
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { useFetchMoviesQuery } from "@/service/api"
import { useRouter } from "expo-router"
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native"

export default () => {

    const router = useRouter()

    const { data, isLoading, error } = useFetchMoviesQuery(0)
    
    // console.log(data)
    
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <ScrollView
                className="flex-1 px-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
            >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                {
                    isLoading ? (
                        <ActivityIndicator
                            size="large"
                            color="#0000ff"
                            className="mt-10 self-center"
                        />
                    ) : error ? (
                        <Text>Error: {Error?.toString()}</Text>
                    ) : (
                        <View>
                            <View className="flex-1 mt-5">
                                <SearchBar onPress={() => router.push("/Search")} placeHolder="Search for movies" />
                            </View>
                            <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
                            <FlatList
                                data={data.results}
                                numColumns={3}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => <MovieCard {...item} />}
                                columnWrapperStyle={{
                                    justifyContent: "flex-start",
                                    gap: 10,
                                    paddingRight: 5,
                                    marginBottom: 10
                                }}
                                className="mt-2 pb-32"
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}