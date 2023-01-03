
import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Page from '../layout/Page';
import { getTweet } from './service';
import TweetsPage from './TweetsPage';


//toda clase componente extiende de React.component



class TweetPage extends React.Component {
  
  constructor (props) {
    
    //todo componente clase en su constructor debe llamar a super y pasarle las props que el componente recibe
    super(props)


    //forma de declarar los estados en componentes de tipo clase
    this.state={
      tweet:null,
      isLoading:false,
      error:null
    }
  }

  async handleGetTweet(){

    this.setState({isLoading:true})
    
    try {
      const tweet=await getTweet(this.props.tweetId)
      this.setState({tweet,isLoading:false})
    } catch (error) {
      this.setState({isLoading:false,error})
    }
    // usa setState para actualizar el valor de un estado
    

  }

  componentDidMount(){
    this.handleGetTweet()
  }

  componentDidUpdate(prevProps,prevState) {
    console.log("old",prevState)
    console.log("new",this.state)
  }

  render() {

    const {tweet , isLoading , error}=this.state

    if (error?.status===401) {

      return <Navigate to="/login"></Navigate>
    }

    if (error?.status===404) {

      return <Navigate to="/404"></Navigate>
    }

    return ( <Page title={"Detalle de tweet"} >
    <div>TweetPage {tweet?JSON.stringify(tweet):"Nothing to show"}</div> 
  </Page>);
  }
}





  const TweetPageFunction = (props) => {

  const refElement=useRef(null)
  const [tweet,setTweet]=useState(null)

  useEffect(()=>{
    console.log(refElement.current)
  },[])


  //obtenemos el parametro de la url
  const {tweetId}=useParams()

  return  <TweetPage ref={refElement} tweetId={tweetId}/>
  
};
  
  /** 
  useEffect( ()=>{

    async function getData() {

      const tweet=await getTweet(tweetId)

      setTweet(tweet)
      
    }
    getData()

    return ()=>{
      //funcion de limpieza , intervalos , timeout , etc
      console.log("clean function unmounted")
    }

  },[])
  
  return  <Page title="Tweet Detail">
    <div>{tweet?JSON.stringify(tweet):"Nothing to show"}</div>
  </Page> 
};


 */

export default TweetPageFunction;