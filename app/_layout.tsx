import { Stack } from "expo-router"
import "./global.css"

export default () => (
    <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{
                headerShown: false
            }}
        >

        </Stack.Screen>
    </Stack>
)