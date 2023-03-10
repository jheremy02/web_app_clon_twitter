
import { useEffect ,useState } from "react";

import {gestLatestTweets}  from "./service.js";

import Button, {  } from "../common/Button.js";
import styles from "./TweetsPage.module.css"

import Layout from "../layout/Layout.js";
import { Link } from "react-router-dom";

const TweetsPage= (props)=>{
    const [tweets,setTweets] = useState([])//inicializamos el estdo de la variable tweets como un array vacio


    //uso un efecto para que haga la llamada al api despues de renderizarse
    useEffect(  ()=>{

            let data=[]
            async function getTweets () {
                data=await gestLatestTweets()
                console.log(data)
                //una vez se traiga los datos del api , actualizara los estados
                setTweets(data)
            }

            getTweets()
           

    },[])// solo se ejecutara una vez

    

    return <div classNameName={"tweetsPage "+styles.tweetsPage+" "+"w-96 h-auto "}>
        <ul classNameName={`${styles.list_tweets}  flex flex-col gap-4 `} style={{padding:tweets?"32px":"0px"}}>
           {tweets.map((tweet)=>(<div className="flex m-3">
            <div className="flex-shrink-0 mr-3">
              <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
              <p className="text-sm">
                {tweet.content}
              </p>
              
            </div>
          </div>
           )
           
            )}
        </ul>

        <Button>Sucess</Button>

        </div>
    

}

export default TweetsPage;

//<li key={tweet.id}><Link to={`/tweets/${tweet.id}`}>{tweet.content}</Link></li>