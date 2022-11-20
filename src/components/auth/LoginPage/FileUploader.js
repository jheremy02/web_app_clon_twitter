
import { useState, useRef } from "react";

const FileUploader = (props)=>{

    const fileInput=useRef(null)

    const handleFileInput=(e)=>{

        // handle validations
        const file = e.target.files[0];
        
        if (file) {
            if ((file.size/ 1024 / 1024) > 1)
        props.onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        else props.onFileSelectSuccess(file);
        }

    }

    return (
        <div className="file-uploader">
            <input type="file" ref={fileInput} onChange={handleFileInput}/>
            <button onClick={e => {
                e.preventDefault();
                fileInput.current && fileInput.current.click()
            }} className="btn btn-primary"/>
        </div>
    )
    
}

export default FileUploader