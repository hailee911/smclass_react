import React from "react";
import { Link } from "react-router-dom";
//react className사용
//Router는 a->Link, href->to

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/MList">영화정보리스트</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MWrite">영화정보추가</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MView">영화상세보기</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/MemList">회원정보리스트</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MemWrite">회원정보추가</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MemberView">회원상세보기</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;