import React from 'react';
// import "../../styles/UpdateProgress.css";

const UpdateProgress = () => {
  return (
      <div className="box-update">
        <h1 className='titulo-progress'>Track Your Progress!</h1>
          <p className='sizes'>Weight</p>
          <input className='medidas' type="number" placeholder="cm" /> 
          <p className='sizes'>Waist size</p>
          <input className='medidas'  type="number" placeholder="cm" />
          <p className='sizes'>Abdominal size</p>
          <input className='medidas'  type="number" placeholder="cm" />
          <p className='sizes'>Arm size</p>
          <input className='medidas'  type="number" placeholder="cm" />
          <p className='sizes'>Leg size</p>
          <input className='medidas'  type="number" placeholder="cm" />
          <p className='sizes'>Post a picture of your progress</p>
          <input className='medidas'  type="file" placeholder="sube aqui tu archivo" />
          <button className="update-progres">Update Progress</button>
    </div>
  )
}

export default UpdateProgress