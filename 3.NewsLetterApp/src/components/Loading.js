//로딩 화면
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: center;
`;
const Image = styled.Image`
    width: 144px;
    height: 120px;
`;

const animationImages = [
    require("../assets/Images/Loading0.png"),
    require("../assets/Images/Loading1.png"),
    require("../assets/Images/Loading2.png"),
    require("../assets/Images/Loading3.png"),
    require("../assets/Images/Loading2.png"),
    require("../assets/Images/Loading1.png"),
];

const Loading = () => {     
    const [imageNumber, setImageNumber] = useState(0);

    useEffect(() => {
        let countInterval = setInterval(() => {
            setImageNumber((parseInt(imageNumber)+1) % 6);
        }, 100);

        return () => clearInterval(countInterval);
    }, [imageNumber]);

    return (
        <Container>
            <Image source={animationImages[imageNumber]} key={imageNumber} />
        </Container>
    );
}

export default Loading;
//npm install typescript @types/react @types/react-native --save-dev