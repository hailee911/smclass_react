import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Form from './components/Form';

function App() {

  //json데이터, 배열객체, 일반변수는 새로고침을 해야 화면에 적용이 됨.
  //useState를 사용하면 새로고침없이 화면에 적용이 됨.

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

  //데이터 삭제(delete - delete방식)
  const delMovie = (no) => {
    console.log("삭제번호 : " + no);
    //데이터 삭제 : filter함수를 사용해서 삭제할 데이터를 제외하고 새로운 배열로 만듬
    setMovies(movies.filter((movie) => {
      return movie.no !== no;
    })
    );
  }

  //데이터 수정(update - put방식)

  //데이터 출력(select - get방식)
  //반복문 map함수는 return해서 값을 돌려. for문 반복만 함. return없음.
  //최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성
  // 삼항식을 사용해서 영화정보 데이터가 없을 때 처리
  const mlist =

    movies.length ?
      movies.map((movie) => {
        return (
          <MovieList movie={movie}  delMovie={delMovie} key={movie.no} />
        );
      }) : "영화정보 데이터가 없습니다."
    ;


  return (
    <div className='main'>

      <h2>영화정보리스트</h2>
      <Form addMovie={addMovie} />

      <div>
        {mlist}
      </div>
    </div>

  );
}

export default App;
