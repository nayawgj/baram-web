import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./productDetail";
import Ranking from "./ranking";

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
        <Route exact={true} path="/ranking">
          <Ranking />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
