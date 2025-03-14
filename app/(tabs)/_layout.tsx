import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { Tabs } from "expo-router"
import { Image, ImageBackground } from "react-native"

export default () => (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <ImageBackground source={images.highlight}>
                        <Image source={icons.home} />
                    </ImageBackground>
                )
            }}
        />
    </Tabs>
)