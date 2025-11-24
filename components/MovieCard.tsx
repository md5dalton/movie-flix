import { Link } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"

export default ({ id, title, poster, vote }: any ) => (
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity>
            <View className="w-40">
                <View className="flex-row items-center justify-start gap-x-1">
                    <Image
                        source={{ 
                            uri: poster
                        }}
                        className="w-full h-60 rounded-lg"
                        resizeMode="cover"
                    />
                    <Text className={`
                        text-xs text-white font-bold
                        absolute bottom-2 left-2 px-1
                        ${vote >= 7 ? "bg-accent" : vote >= 5 ? "bg-amber-600" : "bg-red-500" }
                        `}>{vote.toFixed(1)}</Text>
                </View>
                <Text numberOfLines={1} className="text-sm font-bold text-white mt-2">{title}</Text>
            </View>
        </TouchableOpacity>
    </Link>
)