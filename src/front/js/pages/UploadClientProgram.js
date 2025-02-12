import React from "react";
import "../../styles/UploadClientProgram.css";

const UploadClientProgram = () => {
  return (
    <div className='upload-program'>
        
        <h1>Upload Client Program</h1>
        <div className='archivo'>
        <input  type="file" placeholder="sube aqui tu archivo"/>
        </div>
        <button className="sube-archivo">Upload Program</button>
      
    </div>
  )
}

export default UploadClientProgram
