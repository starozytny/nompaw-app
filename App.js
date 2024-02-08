import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "@screens/Security/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                  name="Home"
                  component={LoginScreen}
                  options={{ title: 'Logilink' }}
              />
              <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}

function Dashboard() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
        </View>
    );
}
