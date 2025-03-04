import React from 'react';
import { Link } from 'react-router-dom';

const MemberList = ({ user }) => {

  return (
    <>
      <div className="card">
        <h5 className="card-header">아이디 {user.id}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/MemView/${user.id}`}>
            {user.name}
            </Link>
            </h5>
          <p className="card-text">{user.username}</p>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
          <Link to="#" className="btn btn-primary mt">수정</Link>
          <Link className="btn btn-primary">삭제</Link>
        </div>
      </div>
    </>
  );
}

export default MemberList;