import React, { useState } from 'react';
import { Button, Buttontext, ContainerLogin, Input, SingnUpButton, SingnUpText, TitleLogin } from '../../theme/StyledComponents';
import { Text } from 'react-native'
import { colors } from '../../theme/Theme';

export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {

        if (email === "" || password === "") {
            alert("Preencha todos os campos")
            return
        }
    }

    return (
        <ContainerLogin>
            <TitleLogin>
                Dev<Text style={{ color: colors.red }}>Post</Text>
            </TitleLogin>

            <Input
                value={email}
                onTextChange={(text) => setEmail(text)}
                placeholder="Email"
            />
            <Input
                value={password}
                onTextChange={(text) => setPassword(text)}
                placeholder="senha"
            />

            <Button onPress={handleLogin}>
                <Buttontext>Acessar</Buttontext>
            </Button>

            <SingnUpButton onPress={() => navigation.navigate("LoginRegister")}>
                <SingnUpText>Criar uma conta</SingnUpText>
            </SingnUpButton>

        </ContainerLogin>
    )
}
