import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Buttontext, ContainerLogin, Input, SingnUpButton, SingnUpText, TitleLogin } from '../../theme/StyledComponents';
import { colors } from '../../theme/Theme';

export const LoginRegister = ({ navigation }) => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        if (email === "" || password === "" || user === "") {
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
                value={user}
                onTextChange={(text) => setUser(text)}
                placeholder="Seu nome"
            />

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

            <Button onPress={handleRegister}>
                <Buttontext>Cadastrar</Buttontext>
            </Button>

            <SingnUpButton onPress={() => navigation.navigate("Login")}>
                <SingnUpText>Já possuo uma conta</SingnUpText>
            </SingnUpButton>

        </ContainerLogin>
    )
}
