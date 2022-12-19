import { useState } from "react";
import Page from "../../layout/Page";
import { Navigate, useNavigate } from "react-router-dom";
import { createTweet } from "../service";

const MAX_CHARACTERS=260

const NewTweetPage= (props)=>{

    const navigate=useNavigate()
    const [content,setContent]=useState("")
    const [createdTweet,setCreatedTweet]=useState(null)
    const [error,setError]=useState(null)

   function handleInput(event) {
       setContent(event.target.value)
   }

   const characters=`${content.length} / ${MAX_CHARACTERS}`

   const disabled=content.length > 6

   async function handleSubmit(event) {
       event.preventDefault()
        try {
            const tweet=await createTweet({content})
            setCreatedTweet(tweet)
            //navigate(`/tweets/${tweet.id}`)
            console.log(tweet)
        } catch (error) {
            setError(error)
        }
        
   }


   if (createdTweet) {
    return <Navigate to={`/tweets/${createdTweet.id}`} ></Navigate>
   }

   if (error?.status===401) {
    return <Navigate to="/login"></Navigate>
   }



    return  <Page title={"Crear un nuevo post "}>
            <div className="antialiased mx-auto max-w-screen-sm">
                <h3 className="mb-4 text-lg font-semibold text-gray-900"></h3>

                <div className="space-y-4">

            <div className="flex">
                <div className="flex-shrink-0 mr-3">
        <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
      </div>
      <form className="w-full he" onSubmit={handleSubmit}>
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
       
       <textarea className="textarea w-full border-none outline-none focus:outline-none" placeholder="Hey What's up ?" onInput={handleInput} maxLength={MAX_CHARACTERS}></textarea>
       <div className="mt-4 flex items-center justify-between">
           <div className="text-sm text-sky-500 font-semibold">
           {characters}
         </div>
         <div className="text-sm  font-semibold">
         <button type="submit" className="btn btn-info text-white" disabled={!disabled}>Post</button>
         </div>
       </div>
     </div>
      </form>
    </div>
  </div>
</div>
    </Page> 
    
}

export default NewTweetPage;