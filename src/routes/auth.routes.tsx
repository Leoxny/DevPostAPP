import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../pages/main/LoginScreen';
import { LoginRegister } from '../pages/register/LoginRegister';
const Stack = createNativeStackNavigator()

export const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LoginRegister' component={LoginRegister} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

