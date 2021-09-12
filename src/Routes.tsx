import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './core/components/NavBar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/ProductDetails';
import Home from './pages/Home'

const Routes =() =>(
    <BrowserRouter>
    <NavBar/>
     <Switch>
        <Route path= "/" exact>
            <Home/>
        </Route>
        <Route path= "/catalog" exact >
            <Catalog/>
        </Route>

        <Route path= "/catalog/:productId">
            <ProductDetails/>
        </Route>

        <Route path= "/admin">
            <Admin/>
        </Route>
     </Switch>
    
    </BrowserRouter>

);

export default Routes ;