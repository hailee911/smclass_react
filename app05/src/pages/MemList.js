import React, { useEffect, useState } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import axios from 'axios';
import MemberList from '../components/MemberList';

const MemList = () => {

  //스프링에서 데이터를 가져와서 출력
  //json데이터, 배열객체, 일반변수는 새로고침을 해야 화면에 적용이 됨.
  //useState를 사용하면 새로고침없이 화면에 적용이 됨.
  const [users, setUsers] = useState([]);
  
  const members =
  users.length ?
  users.map((user) => {
    return (
      <MemberList key={user.id} user={user} />
    )
  }) : <div>데이터가 없습니다.</div>;
  

  //서버와 통신해서 데이터 가져오기 axios
  //스프링에 있는 url주소 입력
  useEffect( () => {
    axios.get("http://localhost:8181/member/memberList")
    .then(
      response => {
        console.log(response);
        setUsers(response.data);
      }
    )
  },[]
  )

  return (
    <>
      <Nav />
      <div className='main'>
        <h2>회원정보리스트</h2>
        <div>
          {members}
        </div>
      </div>
    </>
  );
}

export default MemList;
