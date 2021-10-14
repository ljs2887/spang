import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Notice from './Notice/Notice.jsx';
import Payment from './Payment/Payment.jsx';

function App() {

  let [communityTitle, setcommunityTitle] = useState(['배드민턴이 너무 어려워요....', '이 배드민채 어떤가요?', '체육관 너무 좋네요^^', '배린이 임니다 ㅎ,,']);
  let [notice, setnotice] = useState(['배드민턴은 SIPANG...', '으음~ 머시따~!', '내 집 같은 체육관은 ...', 'SIPANG 예약 할인 이벤트!']);

  return (
    <>
      <Header /> 
      
      <Switch>
        <Route exact path="/">
          <Main communityTitle={communityTitle} notice={notice}/>
        </Route>

        <Route path="/Payment">
          <Payment />
        </Route>

        <Route path="/Notice">
          <Notice />
        </Route>
      </Switch>

      <div className="footer">
        
      </div>
    </>
  );
}

export default App;
