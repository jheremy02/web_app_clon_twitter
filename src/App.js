
import TweetsPage from "./components/tweets/TweetsPage.js"
import MyForm from "./components/auth/LoginPage/Myform.js";
import LoginPage from "./components/auth/LoginPage/LoginPage.js";
import NewTweetPage from "./components/tweets/newTweetPage/NewTweetPage.js";
import TweetPage from "./components/tweets/TweetPage";

import MySecondForm from "./components/auth/LoginPage/MySecondForm.js"; 
import MyFormTest from "./components/auth/LoginPage/MyFormTest.js"; 
import { useState } from "react";
import { Routes,Route,NavLink,Navigate } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth.js";

import AuthContext from "./components/auth/context";
import Layout from "./components/layout/Layout.js";

function App({isInitializeLogged}) {

  const [isLogged,setIsLogged]=useState(isInitializeLogged)
  const [isLoading,setIsLoading]=useState(false)


  function handleLogin() {
    setIsLogged(true)
  }

  function handleLogout() {
    setIsLogged(false)
  }


  return (

    <AuthContext.Provider value={{isLogged,handleLogin,handleLogout}} >
       <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin}></LoginPage>} />

      <Route path="/tweets" element={<Layout></Layout>}>
        <Route index element={<TweetsPage></TweetsPage>}></Route>
        <Route path=":tweetId" element={<TweetPage />}/>
        <Route path="new" element={<RequireAuth >
        <NewTweetPage ></NewTweetPage>
        </RequireAuth>} />

      </Route>
      
      
      
      <Route path="/404" element={<div><h1>Not Found</h1></div>} />
      <Route path="/" element={<Navigate to="tweets"/>}/>
      <Route path="/*" element={<Navigate to="404" />} />
    </Routes>
    </AuthContext.Provider>

   

    
  );
}

export default App;
