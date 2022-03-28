//로그인 페이지
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import * as Font from 'expo-font';
import Loading from './Loading';

// 전체
const Container = styled.SafeAreaView`
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
const EmailView = styled.TouchableOpacity`
    flex: 1;
    background-color: ${({ theme }) => theme.loginTextBox};
    justify-content: center;
    margin: 1% 14.5% 1% 14.5%;
`;
// 비번 박스 공간
const PasswordView = styled.TouchableOpacity`
    flex: 1;
    background-color: ${({ theme }) => theme.loginTextBox};
    justify-content: center;
    margin: 1% 14.5% 1% 14.5%;
`;
// 로그인 버튼 공간
const LoginView = styled.TouchableOpacity`
    flex: 1.3;
    justify-content: flex-end;
`;
// 이메일, 비번 찾기 공간
const SearchView = styled.View`
    flex: 1.7;
    align-items: flex-start;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;
// 가입문구 공간
const SignupView = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;

// 로고
const Logo = styled.Image`
    width: 86.4px;
    height: 72px;
    margin: 0 0 0 15%;
`;
// 환영 문구
const Welcome = styled.Image`
    width: 109.44px;
    height: 20.48px;
    margin: 2% 0 0 15%;
`;
// 이메일, 비번 텍스트
const InputTitle = styled.Text`
    font-size: 11px;
    font-family: 'NotoSansCJKkr-Medium';
    margin: 1% 0 0 5%;
    color: ${({ theme }) => theme.mainBlack};
`;
// 이메일, 비번 입력 텍스트
const InputLogin = styled.TextInput`
    height: 14px;
    padding: 0;
    margin: 0 0 3% 5%;
`;
// 로그인 버튼
const LoginButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.mainBlack};
    margin: 1% 14.5% 0% 14.5%;
    padding: 1% 0 1% 0
    align-items: center;
`;
// 로그인 버튼 텍스트
const LoginText = styled.Text`
    font-size: 15px;
    font-family: 'NotoSansCJKkr-Medium';
    color: white;
`;
// 이메일, 비번 찾기 text
const SearchText = styled.Text`
    font-size: 12px;
    font-family: 'NotoSansCJKkr-Bold';
    color: ${({ theme }) => theme.searchText};
`;
// 가입 문구
const SignupTextFront = styled.Text`
    font-size: 10px;
    font-family: 'NotoSansCJKkr-Light';
`;
const SignupTextBack = styled.Text`
    font-size: 11px;
    font-family: 'NotoSansCJKkr-Medium';
    color: ${({ theme }) => theme.mainBlack};
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isReady: false, // 폰트로딩이 완료되면 true로 변경
            isVisibleEmailInput: false, //이메일 박스 클릭하면 입력창 나타남
            isVisiblePasswordInput: false, //비번 박스 클릭하면 입력창 나타남
        };
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

    //이메일 박스 클릭 시 입력 창 나타났다 사라졌다 하는 기능
    renderEmailInput() {
        if(this.state.isVisibleEmailInput) {
            return (
                <InputLogin/>
            );
        }
        return null;
    };

    emailVisible(){
        this.setState({ isVisibleEmailInput: !this.state.isVisibleEmailInput });
    };

    //비번 박스 클릭 시 입력 창 나타났다 사라졌다 하는 기능
    renderPasswordInput() {
        if(this.state.isVisiblePasswordInput) {
            return (
                <InputLogin/>
            );
        }
        return null;
    };

    passwordVisible(){
        this.setState({ isVisiblePasswordInput: !this.state.isVisiblePasswordInput });
    };

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
                                strokeWidth="3"
                            />
                        </Svg>
                        <Welcome source={require("../assets/Images/login-welcome.png")}/>
                    </LogoView>
                    <EmailView style={styles.box} activeOpacity={1} onPress={() => this.emailVisible()}>
                        <InputTitle>이메일</InputTitle>
                        {this.renderEmailInput()}
                    </EmailView>
                    <PasswordView style={styles.box} activeOpacity={1} onPress={() => this.passwordVisible()}>
                        <InputTitle>비밀번호</InputTitle>
                        {this.renderPasswordInput()}
                    </PasswordView>
                    <LoginView>
                        <LoginButton style={styles.button}>
                            <LoginText>로그인</LoginText>
                        </LoginButton>
                    </LoginView>
                    <SearchView>
                        <SearchText>아이디 찾기</SearchText>
                        <SearchText>   |   </SearchText>
                        <SearchText>비밀번호 찾기</SearchText>
                    </SearchView>
                    <SignupView>
                        <SignupTextFront>아직 회원이 아니신가요? </SignupTextFront>
                        <SignupTextBack>지금 바로 가입 할래요.</SignupTextBack>
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