import client from "../../api/client.js";

const tweetsBaseUrl="/api"

export const gestLatestTweets=()=>{

    const url=`${tweetsBaseUrl}/tweets`
    console.log(url)
    return client.get(url)
}