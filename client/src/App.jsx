import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { RouteIndex, RouteSignIn, RouteSignUp } from "./helpers/RouteName";
import Index from './Pages/Index';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index/>}></Route>
        </Route>
        <Route path={RouteSignIn} element={<SignIn/>}></Route>
        <Route path={RouteSignUp} element={<SignUp/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
