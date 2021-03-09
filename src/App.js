import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import {Route, route, Switch} from "react-router-dom";
import Shop from "./pages/shop/Shop.component";

const HatsPage =() => {
  return(
    <div>
      <h1>hats page</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
