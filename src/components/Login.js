//로그인 페이지
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Svg, Line } from 'react-native-svg';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;
const Image = styled.Image`
    width: 72px;
    height: 60px;
`;
const Box = styled.View`
    background-color: ${({ theme }) => theme.loginTextBox};
`;
const LoginButton = styled.View`
    background-color: ${({ theme }) => theme.loginButton};
`;

const Login = () => {
    return (
        <Container>
            <Image source={require("./Assets/Images/Loading0.png")} />
            <Svg height="1%" width="100%" >
                <Line
                    x1="10%"
                    y1="10%"
                    x2="60%"
                    y2="10%"
                    stroke="black"
                    strokeWidth="1.5"
                />
            </Svg>
            <Text>어서오세요 :)</Text>
            <Box>
                <Text>이메일</Text>
            </Box>
            <Box>
                <Text>비밀번호</Text>
            </Box>
            <LoginButton>
                <Text styles={{textColor: "white"}}>로그인</Text>
            </LoginButton>
        </Container>
    );
}

export default Login;