import React, { useEffect, useState } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import View from '../components/View';
import { useParams } from 'react-router-dom'; //라우터로 전달된 파라미터를 사용하기 위해 추가
import axios from 'axios';

const MemView = () => {

  
  const [users, setUsers] = useState([]);
  const params = useParams();
  console.log("useParams id : "+params.id);

  useEffect( () => {
    axios.get(`http://localhost:8181/member/memberView?id=${params.id}`)
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
        <h2>회원상세보기</h2>
        <div>
          <View user={users}/>
        </div>
      </div>
    </>
  );
}

export default MemView;
