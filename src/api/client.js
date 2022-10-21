import axios from "axios";


const client= axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL
})


// me saca la data especifica del response
client.interceptors.response.use(response=>{
    console.log(response)
    return response.data
})

export default client