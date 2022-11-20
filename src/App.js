
import TweetsPage from "./components/tweets/TweetsPage.js"
import MyForm from "./components/auth/LoginPage/Myform.js";
import LoginPage from "./components/auth/LoginPage/LoginPage.js";
import NewTweetPage from "./components/tweets/newTweetPage/NewTweetPage.js";
import TweetPage from "./components/tweets/TweetPage";

import MySecondForm from "./components/auth/LoginPage/MySecondForm.js"; 
import MyFormTest from "./components/auth/LoginPage/MyFormTest.js"; 
import { useState } from "react";
import { Routes,Route,NavLink,Navigate } from "react-router-dom";

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

    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin}></LoginPage>} />

      <Route path="/tweets" element={<TweetsPage isLogged={isLogged} onLogout={handleLogout}></TweetsPage>} />
      <Route path="/tweets/:idtweet" element={<TweetPage/>}/>
      <Route path="/tweets/new" element={<NewTweetPage></NewTweetPage>} />
      <Route path="/404" element={<div><h1>Not Found</h1></div>} />
      <Route path="/" element={<Navigate to="tweets"/>}/>
      <Route path="/*" element={<Navigate to="404" />} />
    </Routes>

    
  );
}

export default App;
