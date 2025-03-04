import React, { useState } from 'react';
import '../App.css';
import Form from '../components/Form';
import Nav from '../components/Nav';

const MWrite = () => {

  const [movies, setMovies] = useState(
      [
        { no: 3, title: '영화3', date: '2021-01-03' },
        { no: 2, title: '영화2', date: '2021-01-02' },
        { no: 1, title: '영화1', date: '2021-01-01' },
      ]
    );

  //데이터 추가(insert - post방식)
  const addMovie = (movie) => {
    setMovies([movie, ...movies,]); //3개데이터 -> 3개데이터 모두 지우고, 최종데이터만 저장
  }

  return (
    <>
      <Nav />
      <div className='main'>
        <h2>영화정보쓰기</h2>
        <Form addMovie={addMovie} />
      </div>
    </>
  );
}

export default MWrite;
