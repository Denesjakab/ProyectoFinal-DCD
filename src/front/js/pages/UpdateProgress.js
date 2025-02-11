import React from 'react';
// import "../../styles/UpdateProgress.css";

const UpdateProgress = () => {
  return (
      <div className="box-update">
        <h1>Track Your Progress!</h1>
        <p>Weight</p>
          <input type="number" placeholder="cm" /> 
          <p>Waist size</p>
          <input type="number" placeholder="cm" />
          <p>Abdominal size</p>
          <input type="number" placeholder="cm" />
          <p>Arm size</p>
          <input type="number" placeholder="cm" />
          <p>Leg size</p>
          <input type="number" placeholder="cm" />
          <p>Post a picture of your progress</p>
          <input type="file" placeholder="sube aqui tu archivo" />
          <button className="update-progres">Update Progress</button>
    </div>
  )
}

export default UpdateProgress
