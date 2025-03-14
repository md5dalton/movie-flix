import { icons } from "@/constants/icons"
import { Link } from "expo-router"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

interface Props
{
    onPress: () => void
    placeHolder: string
}

export default ({ id, title, poster_path, vote_average, release_date }: Movie ) => (
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity className="w-[32%]">
            <Image
                source={{ 
                    uri: poster_path ? 
                        `https://image.tmdb.org/t/p/w500${poster_path}` :
                        "https://placehold.co/600x400/1a1a1a/ffffff.png"
                }}
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
            />
            <Text numberOfLines={1} className="text-sm font-bold text-white mt-2">{title}</Text>
            <View className="flex-row items-center justify-start gap-x-1">
                <Image
                    source={icons.star}
                    className="size-4"
                />
                <Text className="text-xs text-white">{Math.round(vote_average)}</Text>
            </View>
            <Text className="text-xs text-light-300 font-medium mt-1">{release_date.split("-").shift()}</Text>

        </TouchableOpacity>
    </Link>
)