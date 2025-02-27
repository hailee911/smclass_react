import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

function App() {

  const movies = [
    //json데이터, 배열객체
    { no: 1, title: "해리포터 1", date: "2020-01-01" },
    { no: 2, title: "해리포터 2", date: "2021-01-02" },
    { no: 3, title: "해리포터 3", date: "2022-01-03" },
  ]

  //반복문 map함수는 return해서 값을 돌려. for문 반복만 함. return없음.
  //최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성
  const mlist = movies.map((movie) => {
    return (
      <div className="card">
        <h5 className="card-header">영화정보 {movie.no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a href="#" className="btn btn-primary">삭제</a>
        </div>
      </div>
    );
  });



  return (
    <div className="main">
      <h2>게시판</h2>

      {/* map함수 */}
      {mlist}

      <div className="card">
        <h5 className="card-header">영화정보 {movies[0].no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movies[0].title}</h5>
          <p className="card-text">{movies[0].date}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a href="#" className="btn btn-primary">삭제</a>
        </div>
      </div>

      <MovieList uBtn="update" dBtn="delete" />
      <MovieList uBtn="변경" dBtn="삭제" />
      <MovieList />
    </div>
  );
}

export default App;
