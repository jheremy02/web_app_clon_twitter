
import { useEffect ,useState } from "react";

import {gestLatestTweets}  from "./service.js";

import Button, {  } from "../common/Button.js";
import styles from "./TweetsPage.module.css"

import Layout from "../layout/Layout.js";

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

    

    return <Layout isLogged={props.isLogged} onLogout={props.onLogout}>
        <div className={"tweetsPage "+styles.tweetsPage+" "+"w-96 h-auto "}>
        <ul className={`${styles.list_tweets}  flex flex-col gap-4 `} style={{padding:tweets?"32px":"0px"}}>
           {tweets.map((tweet)=> <li key={tweet.id}>{tweet.content}</li> )}
        </ul>

        <Button>Sucess</Button>

        </div>
    </Layout>

}

export default TweetsPage;