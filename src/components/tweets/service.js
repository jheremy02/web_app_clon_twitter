import client from "../../api/client.js";

const tweetsBaseUrl="/api/tweets"

export const gestLatestTweets=()=>{

    const url=`${tweetsBaseUrl}`
    console.log(url)
    return client.get(url)
}

export const getTweet=(tweetId)=>{
    const url =`${tweetsBaseUrl}/${tweetId}`

    return client.get(url)
}
export const createTweet = async (tweet)=>{

   return client.post(tweetsBaseUrl,tweet)
}
