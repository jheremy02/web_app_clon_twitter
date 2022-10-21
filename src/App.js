
import TweetsPage from "./components/tweets/TweetsPage.js"
import MyForm from "./components/auth/LoginPage/Myform.js";
import LoginPage, {  } from "./components/auth/LoginPage/LoginPage.js";
import NewTweetPage from "./components/tweets/newTweetPage/NewTweetPage.js";


function App() {
  return (
    <div className="App">
        <TweetsPage></TweetsPage>
        <NewTweetPage/>
        <LoginPage></LoginPage>
        <MyForm></MyForm>
    </div>
  );
}

export default App;
