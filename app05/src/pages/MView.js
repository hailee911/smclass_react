import React, { useEffect, useState } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import View from '../components/View';

const MView = () => {

  const [movies, setMovies] = useState(
    [
      { no: 3, title: '영화3', date: '2021-01-03' },
      { no: 2, title: '영화2', date: '2021-01-02' },
      { no: 1, title: '영화1', date: '2021-01-01' },
    ]
  );


  return (
    <>
      <Nav />
      <div className='main'>
        <h2>영화상세보기</h2>
        <div>
          <View/>
        </div>
      </div>
    </>
  );
}

export default MView;
