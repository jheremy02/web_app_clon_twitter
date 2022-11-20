import { useState, useRef } from "react";


const MyFormTest=()=>{

    const [credentials,setCredentials]=useState({username:'',password:'',remember:false,radio:"",select:"default"})

    const {username,password,remember,radio,select}=credentials

    function handleChange(event) {
         const isCheckbox = event.target.type === 'checkbox';

         setCredentials((credentials)=>({...credentials,[event.target.name]:isCheckbox ? event.target.checked : event.target.value}))
        
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(credentials)
        console.log(credentials)
    }

    return <div>
        <form onSubmit={handleSubmit} >
        <input type="text" name="username" value={username} onChange={handleChange}  placeholder="Type username" className="input w-full max-w-xs" />
        <input type="password"  name="password" value={password}  onChange={handleChange}   placeholder="Type password" className="input w-full max-w-xs" />
        <div className="form-control">
        <label className="label cursor-pointer">
        <span className="label-text">Remember me</span> 
        <input type="checkbox" value="remember" checked={remember} name="remember" onChange={handleChange}  className="checkbox checkbox-primary" />
        </label>
        </div>

        <label for="option-1" >opion-1</label>
        <input type="radio" value="1" id="option-1" name="radio" onChange={handleChange} className="radio radio-primary" checked={radio==1?true:false} />
        <label for="option-2" >opion-2</label>
        <input type="radio" name="radio" value="2" id="option-2" onChange={handleChange} className="radio radio-primary" checked={radio==2?true:false}/>
        <select onChange={handleChange} name="select" value={select} className="select w-full max-w-xs">
            <option value="default" disabled selected>Pick your favorite Simpson</option>
            <option value="homer" >Homer</option>
            <option value="marge">Marge</option>
            <option value="bart">Bart</option>
            <option value="lisa">Lisa</option>
            <option value="maggie">Maggie</option>
        </select>

        <input type="file" className="file-input w-full max-w-xs"  onChange={(event)=>{console.log(event.target.files[0])}}/>
        <button type="submit" className="btn btn-primary" >Button</button>
        </form>
    </div>



}

export default MyFormTest