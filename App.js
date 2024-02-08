import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { API_URL } from "@env";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Logilink' }}
              />
              <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
    console.log(API_URL)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    );
}


function Dashboard() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
        </View>
    );
}
