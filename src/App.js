import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Loading from './components/Loading';
import Main from './components/Main';

const App = () => {
  //로딩 화면을 사용하기 위해 컴포넌트에 상태값을 만들어줌.
  const [ready, setReady] = useState(true);
  
  useEffect(() => {
    setTimeout(() => { //1초 뒤에 해당 코드를 실행
      //setState(data)
      setReady(false)
    }, 3000) //1000 = 1초
  }, [])

  return ready ?
    <Loading />: (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;