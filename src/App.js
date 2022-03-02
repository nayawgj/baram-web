import "./App.css";
import "./main/index.css";
import "./productDetail/productDetail.css";
import MainPageComponent from "./main";
import {Switch, Route} from 'react-router-dom';
import ProductDetail from "./productDetail/productDetail.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/productDetail">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
