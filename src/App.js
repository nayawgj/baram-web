import "./App.css";
import MainPageComponent from "./main";
import {Switch, Route} from 'react-router-dom';
import ProductDetail from "./productDetail";
import Ranking from "./ranking";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <MainPageComponent />
        </Route>
        <Route path="/productDetail">
          <ProductDetail />
        </Route>
        <Route path="/ranking">
          <Ranking />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
