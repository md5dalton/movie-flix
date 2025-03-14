import { Stack } from "expo-router"
import "./global.css"
import { Provider } from "react-redux"
import { store } from "@/store/store"

export default () => (
    <Provider store={store}>
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false
                }}
            >

            </Stack.Screen>
        </Stack>
    </Provider>
)