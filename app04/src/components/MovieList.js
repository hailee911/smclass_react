import React from 'react';

//prop : 변수 2개
const MovieList = (prop) => {
  //삼항식 prop가 없을경우 "수정" 사용
  //prop : 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
  //prop : 변수 2개 -> {}를 사용햇 prop 변수를 분해해서 받음
  const uBtn = prop.uBtn?prop.uBtn:"수정";
  const dBtn = prop.dBtn?prop.dBtn:"완료";
  return (
    <>
      <div className="card">
        <h5 className="card-header">영화정보</h5>
        <div className="card-body">
          <h5 className="card-title">해리포터 와불의잔</h5>
          <p className="card-text">2020-01-01</p>
          <a href="#" className="btn btn-primary mt">{uBtn}</a>
          <a href="#" className="btn btn-primary">{dBtn}</a>
        </div>
      </div>
    </>
  )

}

export default MovieList;