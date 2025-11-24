import { LinearGradient } from "expo-linear-gradient"
import SearchBar from "@/components/SearchBar"
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { useLatestMediaQuery } from "@/service/api"
import { useRouter } from "expo-router"
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native"
import MediaSection from "@/components/MediaSection"
import Trending from "../../components/Trending"
import { MediaType } from "@/types/type"

export default () => {

    const router = useRouter()

    const { data, isLoading, error } = useLatestMediaQuery(0)
    
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <ScrollView
                className="flex-1"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%", paddingBottom: 100 }}
            >
                <View className="px-5">
                    <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                    <View className="mt-5">
                        <SearchBar onPress={() => router.push("/Search")} onChangeText={() => {}} placeHolder="Search for movies" />
                    </View>
                </View>
                <View className="gap-y-10">
                    <Trending
                        title="Trending Movies"
                        type={MediaType.Movie}
                    />
                    <LinearGradient
                        colors={["#030014", "#151312"]}
                        start={{x: 0, y:0}}
                        end={{x: 1, y:0}}
                    >
                        <MediaSection
                            isLoading={isLoading}
                            error={error}
                            media={data}
                            title="Latest Media"
                        />
                    </LinearGradient>
                    <Trending
                        title="Popular Shows"
                        type={MediaType.TV}
                    />
                </View>
            </ScrollView>
        </View>
    )
}