import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("http://localhost:8080/products")
      .then(function (result) {
        console.log("통신 결과: ", result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생: ", error);
      });
  }, []);

  return (
    <div>
      <header>
        <div id="headerLine"></div>
        <div id="headerMenu">
          <div id="leftSpace"></div>
          <div id="navigationBar">
            <Link className="mainLink linkStyle" to={"/"}>
              <h5 class="home">HOME</h5>
            </Link>
            <Link className="rankingLink linkStyle" to={"/ranking"}>
              <h5 class="ranking">RANKING</h5>
            </Link>
            <Link className="calenderLink linkStyle" to={"/calender"}>
              <h5 class="calender">CALENDER</h5>
            </Link>
          </div>
          <div id="userMenu">
            <p class="like">LIKE</p>
            <Link className="loginLink linkStyle" to={"/login"}>
              <p class="login">LOGIN</p>
            </Link>
            <p class="mypage">MYPAGE</p>
          </div>
        </div>
        <div id="headerBottom">
          <div id="logo">
            <h1 class="baram">BARAM</h1>
          </div>
        </div>
      </header>
      <div id="contents">
        <div class="loginBox">
          <h2 class="loginText">로그인</h2>
          <div class="idBox">
            <p id="idLabel">ID</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              maxlength="15"
            />
          </div>
          <div class="pwBox">
            <p id="pwLabel">PW</p>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              maxlength="20"
            />
          </div>
          <button type="submit" class="loginButton">
            Login
          </button>
        </div>
      </div>

      <footer>
        <div id="footerLogo">
          <h1 class="baramFooter">BARAM</h1>
          <h2 class="baramPhrase">더 나은 성분에 대한 바람</h2>
        </div>
        <div id="footerMenu">
          <a>문의하기</a>
          <a href="https://github.com/nayawgj/baram-web" target="_blank">
            Github
          </a>
          <p>Copyright ⓒ nayawgj & songah119</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
