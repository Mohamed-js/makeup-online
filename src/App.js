import {
  // BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Bottombar from "./components/Bottombar";
import Navbar from "./components/Navbar";
import Categories from "./containers/Categories";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Products from "./containers/Category";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/category/:category" component={Products} />
          </Switch>
        </main>
      </HashRouter>
      <Bottombar />
    </div>
  );
}

export default App;
