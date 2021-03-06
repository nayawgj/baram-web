import React from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <div id="productDetailPage">
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
          </div>
          <div id="searchBox">
            <input type="text" placeholder="상품검색" maxlength="100" />
            <button class="searchButton">
              <img src="./images/icons/loupe.png" />
            </button>
          </div>
        </div>
      </header>

      <div id="productInfo">
        <div class="productImg">
          <img src="./images/products/product1.jpg" />
        </div>
        <div class="productInfo">
          <p class="productName"> 상품1</p>
          <div class="productStar">
            <img src="./images/icons/yellowstar.png" />
            <img src="./images/icons/yellowstar.png" />
            <img src="./images/icons/yellowstar.png" />
            <img src="./images/icons/yellowstar.png" />
            <img src="./images/icons/clearstar.png" />
            <a class="reviewNum"> 리뷰 54개</a>
          </div>
          <p class="productPrice"> 18900원</p>
          <div class="productComposition">
            <h3>성분 구성</h3>
            <div class="detailComposition">
              <div class="carcinogen">
                <p>8대 발암물질</p>
                <img src="./images/icons/hazardous.png" />
              </div>

              <div class="harmfulIngredients">
                <p>주의 성분</p>
                <img src="./images/icons/traffic-lights.png" />
              </div>

              <div class="organic">
                <p>유기농</p>
                <img src="./images/icons/organic-food.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div id="review">
        <h1>리뷰</h1>
        <div class="totalReviewStar">
          <img src="./images/icons/yellowstar.png" />
          <img src="./images/icons/yellowstar.png" />
          <img src="./images/icons/yellowstar.png" />
          <img src="./images/icons/yellowstar.png" />
          <img src="./images/icons/clearstar.png" />
          <p class="totalStarScore"> 4.5</p>
        </div>
        <br />
        <br />

        <div class="review1 review">
          <div class="profileImg">
            <img src="./images/icons/user.png" />
          </div>

          <div class="profileInfo">
            <p class="userName"> 이름1</p>
            <p class="userChar"> 20대/민감성 </p>
            <div class="userStarScore">
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/clearstar.png" />
            </div>
            <p class="reviewContent"> 이 상품은 저랑 잘 안맞는듯</p>
          </div>
        </div>

        <div class="review2 review">
          <div class="profileImg">
            <img src="./images/icons/user.png" />
          </div>

          <div class="profileInfo">
            <p class="userName"> 이름2</p>
            <p class="userChar"> 30대/순면 </p>
            <div class="userStarScore">
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/yellowstar.png" />
              <img src="./images/icons/clearstar.png" />
              <img src="./images/icons/clearstar.png" />
            </div>
            <p class="reviewContent"> 순면은 굳굳</p>
          </div>
        </div>
      </div>

      <hr />
      <div id="userRecommend">
        <h1>비슷한 상품</h1>
      </div>

      <div id="contents">
        <div class="product1 recProduct">
          <div class="recProductImage">
            <img src="./images/products/product1.jpg" />
          </div>
          <a class="recProductName">유기농 순면커버 생리대</a>
          <p class="recProductMaker">라엘</p>
          <div class="recProductFooter">
            <p class="recProductPrice">4,290원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
        </div>

        <div class="product2 recProduct">
          <div class="recProductImage">
            <img src="./images/products/product2.jpg" />
          </div>
          <a class="recProductName">러브 오버나이트 (중형)</a>
          <p class="recProductMaker">시크릿 데이</p>
          <div class="recProductFooter">
            <p class="recProductPrice">3,500원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
        </div>

        <div class="product3 recProduct">
          <div class="recProductImage">
            <img src="./images/products/product3.jpg" />
          </div>
          <a class="recProductName">쏘피 한결 생리대</a>
          <p class="recProductMaker">쏘피</p>
          <div class="recProductFooter">
            <p class="recProductPrice">7,500원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
        </div>

        <div class="product4 recProduct">
          <div class="recProductImage">
            <img src="./images/products/product1.jpg" />
          </div>
          <a class="recProductName">유기농 순면커버 생리대</a>
          <p class="recProductMaker">라엘</p>
          <div class="recProductFooter">
            <p class="recProductPrice">4,290원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
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

export default ProductDetail;
