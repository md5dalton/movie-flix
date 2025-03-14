import { icons } from "@/constants/icons"
import { Image, TextInput, View } from "react-native"

interface Props
{
    onPress: () => void
    placeHolder: string
}

export default ({ onPress, placeHolder }:Props ) => (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} tintColor="#ab8bff" className="size-5" resizeMode="contain" />
        <TextInput
            onPress={onPress}
            placeholder={placeHolder}
            placeholderTextColor="#a8b5db"
            className="text-white ml-2 flex-1"
        />
    </View>
)