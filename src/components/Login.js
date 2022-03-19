//로그인 페이지
import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import * as Font from 'expo-font';
import Loading from './Loading';

// 전체
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
// 상단 여백
const BlankView = styled.View`
    flex: 2;
`;
// 로고 + 환영 문구 공간
const LogoView = styled.View`
    flex: 3;
`;
// 이메일 박스 공간
const EmailView = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.loginTextBox};
    justify-content: center;
    margin: 1% 14.5% 1% 14.5%;
`;
// 비번 박스 공간
const PasswordView = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.loginTextBox};
    justify-content: center;
    margin: 1% 14.5% 1% 14.5%;
`;
// 로그인 버튼 공간
const LoginView = styled.View`
    flex: 1.5;
    justify-content: center;
`;
// 이메일, 비번 찾기 공간
const SearchView = styled.View`
    flex: 1.5;
    align-items: center;
`;
// 가입문구 공간
const SignupView = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
`;

// 로고
const Logo = styled.Image`
    width: 86.4px;
    height: 72px;
    margin: 0 0 0 15%;
`;
// 환영 문구
const WelcomeTextFront = styled.Text`
    font-size: 24px;
    font-family: 'NotoSansCJKkr-Bold';
    margin: 0 0 0 14%;
`;
const WelcomeTextBack = styled.Text`
    font-size: 24px;
    font-family: 'SCDream6';
`;
const Welcome = styled.View`
    display: flex;
    flex-direction: row;
`;
// 이메일, 비번 텍스트
const InputTitle = styled.Text`
    font-size: 12px;
    font-family: 'NotoSansCJKkr-Medium';
    margin: 1% 0 1% 5%;
`;
// 이메일, 비번 입력 텍스트
// 로그인 버튼
const LoginButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.loginButton};
    margin: 1% 14.5% 1% 14.5%;
    padding: 1% 0 1% 0
    align-items: center;
`;
// 로그인 버튼 텍스트
const LoginText = styled.Text`
    font-size: 15px;
    font-family: 'NotoSansCJKkr-Medium';
    color: white;
`;
// 이메일, 비번 찾기 문구
// 가입 문구

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        // 폰트로딩이 완료되면 true로 변경
        this.state = {isReady: false};
    }
    
    async componentDidMount() {
        // await키워드를 붙여 비동기식으로 변경
        await Font.loadAsync({'NotoSansCJKkr-Medium': require('../assets/fonts/NotoSansCJKkr-Medium.otf'),});
        await Font.loadAsync({'NotoSansCJKkr-Regular': require('../assets/fonts/NotoSansCJKkr-Regular.otf'),});
        await Font.loadAsync({'NotoSansCJKkr-Bold': require('../assets/fonts/NotoSansCJKkr-Bold.otf'),});
        await Font.loadAsync({'NotoSansCJKkr-Light': require('../assets/fonts/NotoSansCJKkr-Light.otf'),});
        await Font.loadAsync({'SCDream6': require('../assets/fonts/SCDream6.otf'),});
        
        // 폰트로드가 완료되어 true로 변경
        this.setState({ isReady: true });
    }

    render () {
        if (this.state.isReady) {
            return (
                <Container>
                    <BlankView></BlankView>
                    <LogoView>
                        <Logo source={require("../assets/Images/Loading0.png")} />
                        <Svg height="2%" width="100%" >
                            <Line
                                x1="14%"
                                y1="0%"
                                x2="32%"
                                y2="0%"
                                stroke="black"
                                strokeWidth="5"
                            />
                        </Svg>
                        <Welcome>
                            <WelcomeTextFront>어서오세요 </WelcomeTextFront>
                            <WelcomeTextBack>:)</WelcomeTextBack>
                        </Welcome>
                    </LogoView>
                    <EmailView style={styles.box}>
                        <InputTitle>이메일</InputTitle>
                    </EmailView>
                    <PasswordView style={styles.box}>
                        <InputTitle>비밀번호</InputTitle>
                    </PasswordView>
                    <LoginView>
                        <LoginButton style={styles.button}>
                            <LoginText>로그인</LoginText>
                        </LoginButton>
                    </LoginView>
                    <SearchView>
                        <Text>아이디 찾기 | 비밀번호 찾기</Text>
                    </SearchView>
                    <SignupView>
                        <Text>아직 회원이 아니신가요? 지금 바로 가입 할래요.</Text>
                    </SignupView>
                </Container>
            );
        }
        else {
            return <Loading />;
        }
    }
}

const styles = StyleSheet.create({
    box: {
        borderColor: "#e5e5e5",
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        borderColor: "#231815",
        borderWidth: 1,
        borderRadius: 10,
    },
});

export default Login;