import { images } from "@/constants/images"
import { Image, ImageBackground, Text, View } from "react-native"

export default ({ isFocused, icon, label }: any) => (
    isFocused ?
        <ImageBackground
            source={images.highlight}
            className="flex-row w-full flex-1 justify-center items-center rounded-full overflow-hidden min-w-[112px] min-h-16 mt-4"
        >
            <Image source={icon} tintColor="#151312" className="size-5" />
            <Text className="text-secondary text-base font-semibold ml-2">{label}</Text>
        </ImageBackground> :
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} tintColor="#a8b5db" className="size-5" />
        </View>
)