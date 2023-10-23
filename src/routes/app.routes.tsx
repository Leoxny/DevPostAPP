import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../pages/main/HomeScreen';
import { NewPostRegister } from '../pages/register/NewPostRegister';
import { PostUserScreen } from '../pages/main/PostUserScreen';
import { ProfileScreen } from '../pages/main/ProfileScreen';
import { SearchScreen } from '../pages/main/SearchScreen';

const Tab = createBottomTabNavigator()

export const AppRoutes: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

