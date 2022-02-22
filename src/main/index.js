import "./index.css";

function MainPage() {
  return (
    <div>
      <header>
        <div id="headerLine"></div>
        <div id="headerMenu">
          <div id="leftSpace"></div>
          <div id="navigationBar">
            <h5 class="home">HOME</h5>
            <h5 class="ranking">RANKING</h5>
            <h5 class="calender">CALENDER</h5>
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
            <div id="searchBox">
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
        <div class="product1 product">
          <div class="productImage">
            <img src="./images/products/product1.jpg" />
          </div>
          <a class="productName">유기농 순면커버 생리대</a>
          <p class="productMaker">라엘</p>
          <div class="productFooter">
            <p class="productPrice">4,290원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
        </div>

        <div class="product2 product">
          <div class="productImage">
            <img src="./images/products/product2.jpg" />
          </div>
          <a class="productName">러브 오버나이트 (중형)</a>
          <p class="productMaker">시크릿 데이</p>
          <div class="productFooter">
            <p class="productPrice">3,500원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
        </div>

        <div class="product3 product">
          <div class="productImage">
            <img src="./images/products/product3.jpg" />
          </div>
          <a class="productName">쏘피 한결 생리대</a>
          <p class="productMaker">쏘피</p>
          <div class="productFooter">
            <p class="productPrice">7,500원</p>
            <img class="likeButton" src="./images/icons/heart.png" />
          </div>
        </div>

        <div class="product4 product">
          <div class="productImage">
            <img src="./images/products/product1.jpg" />
          </div>
          <a class="productName">유기농 순면커버 생리대</a>
          <p class="productMaker">라엘</p>
          <div class="productFooter">
            <p class="productPrice">4,290원</p>
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

export default MainPage;