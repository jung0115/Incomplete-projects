import React from 'react';
import { Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container>
          <Text>아이콘</Text>
          <Text>실시간 인기</Text>
          <Text>추천 레터</Text>
        </Container>
    </ThemeProvider>
  );
}

export default App;
