import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const MainStack = () => {

    const signed = false;
    const loading = false;

    return (
        loading ?
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#36393f' }}>
                <ActivityIndicator size={50} color={"#E52246"} />
            </View>
            :
            signed ? <AppRoutes /> : <AuthRoutes />
    )
}

