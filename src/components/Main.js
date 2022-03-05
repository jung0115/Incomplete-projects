//메인 홈 화면
import React from 'react'; 
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const Main = () => {
    return (
        <Container>
          <Text>메인 화면</Text>
        </Container>
    );
}

export default Main;