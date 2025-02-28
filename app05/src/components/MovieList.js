import React from 'react';

const MovieList = ({movie, delMovie}) => {

  const deleteBtn = () => {
    if(window.confirm("정말 삭제하시겠습니까?")){
      alert(movie.no + "번 데이터가 삭제되었습니다.");
      delMovie(movie.no);
    }
  };

  return (
    <>
      <div className="card">
        <h5 className="card-header">영화정보 {movie.no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
        </div>
      </div>
    </>
  );
}

export default MovieList;