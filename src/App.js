import { Suspense, lazy,useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { RecoilRoot, useRecoilState } from 'recoil';
import './App.css';

import LoggedoutRoute from './components/LoggedoutRoute/LoggedoutRoute';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Auth/Login';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Loading from './components/Loading/Loading';
import Category from './pages/Category/Category';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Confirmation/Confirmation';
import Order from './pages/Order/Order';

const Footer = lazy(()=>import('./components/Footer/Footer'));
const Header = lazy(()=>import('./components/Header/Header'));

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  return (
    
    <Router>
      <Suspense fallback={<Loading/>}>
        <RecoilRoot>
          {
            loading ? <Loading/> : (
              <>
                <Header/>
                <Switch>
                  <ProtectedRoute path='/checkout' exact component={Checkout}/>
                  <ProtectedRoute path='/confirmation' exact component={Confirmation}/>
                  <LoggedoutRoute path='/login' exact component={Login}/>
                  <ProtectedRoute path='/cart' exact component={Cart}/>
                  <ProtectedRoute path='/order' exact component={Order}/>
                  <Route path='/shop' exact component={Category}/>
                  <Route path='/home' exact component={Home}/>
                  <Redirect from ='/'exact to = '/home'/>
                </Switch>
                <Footer/>
              </>
            )
          }
        </RecoilRoot>
      </Suspense>
    </Router>
  );
}

export default App;
