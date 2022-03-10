import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home/HomePage";
import ShopDetails from "./components/ShopDetailsPage/ShopDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop/:id">
          <ShopDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
