import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //화면이 리로딩 되면 실행되는 함수
  //useEffect : 최초 데이터를 가져와서 화면에 출력-할 때
  //특정변수가 변경될 때 명령어를 실행해야 할 때 사용

  useEffect(
    () => {
      console.log("useState 변수 상관없이 무조건 실행");
    }
  );
  useEffect(
    () => {
      console.log("useEffect count: " + count);
    }, [count]
  );
  useEffect(
    () => {
      console.log("useEffect count: " + count);
    }, [count2]
  );
  useEffect(
    () => {
      console.log("처음 한번만 실행");
    }, []
  );


  const countBtn = () => {
    setCount(count + 1);
  }
  const countBtn2 = () => {
    setCount2(count2 + 1);
  } 


  return (
    <div className="main">
      <h2>게시판</h2>
      <div className="countTxt">카운트: {count}</div>
      <button onClick={countBtn}>카운트 증가</button>
      <br /><br />
      <div className="countTxt">카운트: {count2}</div>
      <button onClick={countBtn2}>카운트 증가</button>

      <Form />

    </div>
  );
}

export default App;
