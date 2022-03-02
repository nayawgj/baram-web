import React from "react";
import "./productDetail.css";

function ProductDetail(){
    return (
        <div>
            <header>
            <div id="headerLine"></div>

            <div id="headerMenu">
            <div id="leftSpace"></div>
            <div id="navigationBar">
                <h5 className="home">HOME</h5>
                <h5 className="ranking">RANKING</h5>
                <h5 className="calender">CALENDER</h5>
            </div>
            <div id="userMenu">
                <p className="like">LIKE</p>
                <p className="login">LOGIN</p>
                <p className="mypage">MYPAGE</p>
            </div>
            <div id="rightSpace"></div>
            </div>

            <br/>
            <div id="headerBottom">
                <div id="minisearchBox">
                    <input type="text" placeholder="상품검색" maxLength="100"/>
                    <button className="minisearchButton">
                    <img src="./images/icons/loupe.png" />
                    </button>
                </div>
            </div>
            </header>
    
            <div id="productInfo">
                <div className="productImg">
                    <img src="./images/products/product1.jpg" />
                </div>
                <div className="productInfo">
                    <p className="productName"> 상품1</p>
                    <div className="productStar">
                        <img src="./images/icons/yellowstar.png"/>
                        <img src="./images/icons/yellowstar.png"/>
                        <img src="./images/icons/yellowstar.png"/>
                        <img src="./images/icons/yellowstar.png"/>
                        <img src="./images/icons/clearstar.png"/>
                        <a className="reviewNum"> 리뷰 54개</a>
                    </div>
                    <p className="productPrice"> 18900원</p>
                    <div className="productComposition">
                        <h3>성분 구성</h3>
                        <div className="detailComposition">
                            <div className="carcinogen">
                                <p>8대 발암물질</p>
                                <img src="./images/icons/hazardous.png" />
                            </div>

                            <div className="harmfulIngredients">
                                <p>주의 성분</p>
                                <img src="./images/icons/traffic-lights.png" />
                            </div>

                            <div className="organic">
                                <p>유기농</p>
                                <img src="./images/icons/organic-food.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <hr/>
            <div id="review">
                <h1>리뷰</h1>
                <div className="totalReviewStar">
                    <img src="./images/icons/yellowstar.png"/>
                    <img src="./images/icons/yellowstar.png"/>
                    <img src="./images/icons/yellowstar.png"/>
                    <img src="./images/icons/yellowstar.png"/>
                    <img src="./images/icons/clearstar.png"/>
                    <p className="totalStarScore"> 4.5</p>
                </div>
                <br/>
                <br/>

                <div className="review1 review">
                    <div className="profileImg">
                        <img src="./images/icons/user.png" />
                    </div>

                    <div className="profileInfo">
                        <p className="userName"> 이름1</p>
                        <p className="userChar"> 20대/민감성 </p>
                        <div className="userStarScore">
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/clearstar.png"/>
                        </div>
                        <p className="reviewContent"> 이 상품은 저랑 잘 안맞는듯</p>
                    </div>   
                </div>

                <div className="review2 review">
                    <div className="profileImg">
                        <img src="./images/icons/user.png" />
                    </div>

                    <div className="profileInfo">
                        <p className="userName"> 이름2</p>
                        <p className="userChar"> 30대/순면 </p>
                        <div className="userStarScore">
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/yellowstar.png"/>
                            <img src="./images/icons/clearstar.png"/>
                            <img src="./images/icons/clearstar.png"/>
                        </div>
                        <p className="reviewContent"> 순면은 굳굳</p>
                    </div>   
                </div>

            </div>
    
            <hr/>
            <div id="userRecommend">
                <h1>비슷한 상품</h1>
            </div> 

            <div id="contents">
                <div className="product1 recProduct">
                    <div className="recProductImage">
                        <img src="./images/products/product1.jpg" />
                    </div>
                    <p className="recProductName">유기농 순면커버 생리대</p>
                    <p className="recProductMaker">라엘</p>
                    <div className="recProductFooter">
                        <p className="recProductPrice">4,290원</p>
                        <img className="likeButton" src="./images/icons/heart.png" />
                    </div>
                </div>

                <div className="product2 recProduct">
                    <div className="recProductImage">
                        <img src="./images/products/product2.jpg" />
                    </div>
                    <p className="recProductName">러브 오버나이트 (중형)</p>
                    <p className="recProductMaker">시크릿 데이</p>
                    <div className="recProductFooter">
                        <p className="recProductPrice">3,500원</p>
                        <img className="likeButton" src="./images/icons/heart.png" />
                    </div>
                </div>

                <div className="product3 recProduct">
                    <div className="recProductImage">
                        <img src="./images/products/product3.jpg" />
                    </div>
                    <a className="recProductName">쏘피 한결 생리대</a>
                    <p className="recProductMaker">쏘피</p>
                    <div className="recProductFooter">
                        <p className="recProductPrice">7,500원</p>
                        <img className="likeButton" src="./images/icons/heart.png" />
                    </div>
                </div>

                <div className="product4 recProduct">
                    <div className="recProductImage">
                        <img src="./images/products/product1.jpg" />
                    </div>
                    <a className="recProductName">유기농 순면커버 생리대</a>
                    <p className="recProductMaker">라엘</p>
                    <div className="recProductFooter">
                        <p className="recProductPrice">4,290원</p>
                        <img className="likeButton" src="./images/icons/heart.png" />
                    </div>
                </div>
            </div>

            <footer>
                <div id="footerLogo">
                    <h1 className="baramFooter">BARAM</h1>
                    <h2 className="baramPhrase">더 나은 성분에 대한 바람</h2>
                </div>
                <div id="footerMenu">
                    <a>문의하기</a>
                    <a href="https://github.com/nayawgj/baram-web" target="_blank">Github</a>
                    <p>Copyright ⓒ nayawgj & songah119</p>
                </div>
            </footer>

        </div>
    );
    }

export default ProductDetail;