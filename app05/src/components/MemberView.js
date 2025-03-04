import React from "react";
import { Link } from "react-router-dom";

const View = (user) => {
  return (
    <>
      <div class="card text-center">
        <div class="card-header">
          아이디 : {user.id}
        </div>
        <div class="card-body">
          <h5 class="card-title">이름 : {user.name}</h5>
          <p class="card-text">이메일 : {user.email}</p>
          <Link to="/MemList" class="btn btn-primary">회원리스트</Link>
        </div>
        <div class="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
    </>
  )
}

export default View;