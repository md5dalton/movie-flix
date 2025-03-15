import MovieCard from "@/components/MovieCard"
import SearchBar from "@/components/SearchBar"
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { useSearchMoviesQuery } from "@/service/api"
import { useState } from "react"
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native"

export default () => {

    const [ term, setTerm ] = useState("")

    const { data, isLoading, error } = useSearchMoviesQuery(term, { skip: term === "" })
    
    return (
        <View className="bg-primary flex-1">
            <Image source={images.bg} className="absolute w-full z-0" />
            <View className="px-5 flex-1">
                <View>
                    <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                </View>
                <View className="flex-1 mt-5">
                    <SearchBar onPress={() => {}} onChangeText={(target: string) => setTerm(target)} placeHolder="Search movies..." />
                    {
                        term && <Text className="text-xl text-white font-bold px-5 my-3">
                            Search results for{" "}<Text className="text-accent">{term}</Text> 
                        </Text>
                    }
                    {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
                    {error && <Text className="text-red-500 px-5 my-3">An error has occured</Text>}
                    {
                        data && (
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
                            />
                        )
                    }
                </View>
            </View>
        </View>
    )
}