import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Ranking() {
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
            <p class="login">LOGIN</p>
            <p class="mypage">MYPAGE</p>
          </div>
        </div>
        <div id="headerBottom">
          <div id="logo">
            <h1 class="baram">BARAM</h1>
          </div>
          <div id="searchBox">
            <input type="text" placeholder="상품검색" maxlength="100" />
            <button class="searchButton">
              <img src="./images/icons/loupe.png" />
            </button>
          </div>
        </div>
      </header>
      <div id="nav">
        <h1 class="rankingText">카테고리 별 랭킹</h1>
        <ul>
          <li>생리대</li>
          <li>탐폰</li>
          <li>생리컵</li>
          <li>팬티라이너</li>
          <li>면생리대</li>
          <li>여성 청결제</li>
        </ul>
        <br />
        <div id="filters">
          <div class="filter1">
            <img class="downArrow" src="./images/icons/arrow-down.png" />
          </div>
          <div class="filter2">
            <img class="downArrow" src="./images/icons/arrow-down.png" />
          </div>
          <div class="filter3">
            <img class="downArrow" src="./images/icons/arrow-down.png" />
          </div>
          <div class="filter4">
            <img class="downArrow" src="./images/icons/arrow-down.png" />
          </div>
        </div>
        <hr />
      </div>
      <div id="contents">
        {products.map(function (product, index) {
          return (
            <div className="product1">
              <Link className="productDetailLink" to={"/productDetail"}>
                <div class="productImage">
                  <img src={product.imageUrl} />
                </div>
                <a class="productName">{product.name}</a>
                <p class="productMaker">{product.maker}</p>
              </Link>
              <div class="productFooter">
                <p class="productPrice">{product.price}원</p>
                <img class="likeButton" src="./images/icons/heart.png" />
              </div>
            </div>
          );
        })}
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

export default Ranking;
