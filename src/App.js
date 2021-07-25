import {Header} from './containers/Header';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductCompoent } from './containers/ProductComponent';
import { ProductDetails } from './containers/ProductDetails';
import { ProductListing } from './containers/ProductListing';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
<Route path ="/" exact component={ProductListing}/>
{/* <Route path ="/" exact component={ProductCompoent}/> */}
<Route path ="/product/:productId" exact component={ProductDetails}/>
<Route>404 Not Found</Route>
</Switch>

      </Router>
    </div>
  );
}

export default App;
 