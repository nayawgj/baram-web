import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://c83ab4f8-341f-4104-a6ee-7689882bf922.mock.pstmn.io/products"
      )
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
          <div id="rightSpace"></div>
        </div>

        <div id="headerBottom">
          <div id="logo">
            <h1 class="baram">BARAM</h1>
            <div id="bigSearchBox">
              <input
                type="text"
                placeholder="찾고 싶은 상품을 검색하세요"
                maxlength="200"
              />
              <button class="searchButton">
                <img src="./images/icons/loupe.png" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div id="banner">
        <img src="./images/products/banner1.png" />
      </div>
      <hr />
      <div id="userRecommend">
        <h1>00님 이거 어때요?</h1>
      </div>
      <hr />

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

export default MainPage;
