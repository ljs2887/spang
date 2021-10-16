import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
function Header() {
  return(
    <>
      <header className="header">
        <div className="header_logo">SPANG</div>
        <ul className="header_menu">
          <li>예약하기</li>
          <Link to="/Notice" style={{ textDecorationLine: 'none', color: '#000' }}><li>공지사항</li></Link>
          <li>커뮤니티</li>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </header>
    </>
  )
}

export default Header;