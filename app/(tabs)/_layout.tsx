import TabIcon from "@/components/TabIcon"
import { icons } from "@/constants/icons"
import { Tabs } from "expo-router"

export default () => (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                backgroundColor: "#0f0d23",
                borderRadius: 50,
                marginHorizontal: 10,
                marginBottom: 36,
                height: 52,
                position: "absolute",
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#0f0d23",
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon isFocused={focused} icon={icons.home} label="Home" />
            }}
        />
        <Tabs.Screen
            name="Search"
            options={{
                title: "Search",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon isFocused={focused} icon={icons.search} label="Search" />
            }}
        />
        <Tabs.Screen
            name="Saved"
            options={{
                title: "Saved",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon isFocused={focused} icon={icons.save} label="Saved" />
            }}
        />
        <Tabs.Screen
            name="Profile"
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon isFocused={focused} icon={icons.person} label="Profile" />
            }}
        />
    </Tabs>
)