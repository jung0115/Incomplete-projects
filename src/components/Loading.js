//로딩 화면
import React from 'react'; 
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #9cfffd;
    align-items: center;
    justify-content: center;
`;
const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
`;

const Loading = () => {     
    return(
        <Container>
            <Title>로딩 화면(아이콘)</Title>
        </Container>
    );
}

export default Loading;