import OrdersScren from "../screens/OrdersScren"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default OrdersNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Orders"
          component={OrdersScren}
          options={{
            title: "Ordenes",
          }}
        />
      </Stack.Navigator>
    )
  }