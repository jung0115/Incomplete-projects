//로그인 페이지
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import * as Font from 'expo-font';
import Loading from './Loading';

// 전체
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;
// 상단 공백
const BlankView = styled.View`
    flex: 2;
`;
// 로고 + 환영 문구 공간
const LogoView = styled.View`
    flex: 3;
    align-items: center;
    justify-content: center;
`;
// 이메일 박스 공간
const EmailView = styled.View`
    flex: 1;
`;
// 비번 박스 공간
const PasswordView = styled.View`
    flex: 1;
`;
// 로그인 버튼 공간
const LoginView = styled.View`
    flex: 1;
`;
// 이메일, 비번 찾기 공간
const SearchView = styled.View`
    flex: 3;
`;
// 가입문구 공간
const SignupView = styled.View`
    flex: 1;
`;

// 로고
const Logo = styled.Image`
    width: 72px;
    height: 60px;
`;
// 환영 문구
const WelcomeText = styled.Text`
    font-size: 20px;
    font-family: 'NotoSansCJKkr-Bold';
`;
const Box = styled.View`
    background-color: ${({ theme }) => theme.loginTextBox};
`;
const LoginButton = styled.View`
    background-color: ${({ theme }) => theme.loginButton};
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        // 폰트로딩이 완료되면 true로 변경
        this.state = {isReady: false};
    }
    
    async componentDidMount() {
        // await키워드를 붙여 비동기식으로 변경
        await Font.loadAsync({'NotoSansCJKkr-Black': require('../assets/fonts/NotoSansCJKkr-Black.otf'),});
        await Font.loadAsync({'NotoSansCJKkr-Bold': require('../assets/fonts/NotoSansCJKkr-Bold.otf'),});
        await Font.loadAsync({'NotoSansCJKkr-Light': require('../assets/fonts/NotoSansCJKkr-Light.otf'),});
        
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
                        <WelcomeText>어서오세요 :)</WelcomeText>
                    </LogoView>
                    <EmailView>
                        <Box>
                            <Text>이메일</Text>
                        </Box>
                    </EmailView>
                    <PasswordView>
                        <Box>
                            <Text>비밀번호</Text>
                        </Box>
                    </PasswordView>
                    <LoginView>
                        <LoginButton>
                            <Text styles={{textColor: "white"}}>로그인</Text>
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

export default Login;