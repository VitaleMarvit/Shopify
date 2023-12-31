import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { Navbar } from '../../components/navlink';
import { Home } from '../Home';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { MyAccount } from '../MyAccount';
import { Login } from '../Login';
import { NotFound } from '../NotFound';
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu';

import './App.css'
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context';
import { Footer } from '../../components/Footer';
import { VerDetalle } from '../Productos';
import { DetailCards } from '../../components/Details';
import { Clothes } from '../Categories/clothes';
import { Electronics } from '../Categories/electronics';
import { Shoes } from '../Categories/shoes';

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([ 
    {path: '/Shopify', element: hasUserAnAccount && !isUserSignOut ? <Home data = {context.items} /> : <Navigate replace to={'/login'} />},
    
    {path: '/Shopify/clothes', element: hasUserAnAccount && !isUserSignOut ? <Clothes data = {context.items}/> : <Navigate replace to={'/login'} />},
    {path: '/Shopify/electronics', element: hasUserAnAccount && !isUserSignOut ? <Electronics data = {context.items}/> : <Navigate replace to={'/login'} />},
    {path: '/Shopify/shoes', element: hasUserAnAccount && !isUserSignOut ? <Shoes data = {context.items}/> : <Navigate replace to={'/login'} />},
    
    {path: '/Shopify/details', element: <DetailCards />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/ver-detalle', element: <VerDetalle />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/login', element: <Login />},
    {path: '/*', element: <NotFound />},
  ])

  return routes
}

function App() {
  initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
