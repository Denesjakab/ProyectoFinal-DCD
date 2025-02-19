import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "../../styles/UpdateProgress.css";
import { Context } from '../store/appContext';

const UpdateProgress = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    weight: '',
    waist: '',
    abdomen: '',
    arm: '',
    leg: '',
    photo_url: '',
    notes: '',
  });

  const navigate = useNavigate()



  useEffect(() => {
    if (store.currentUser?.progress) {
      setFormData({
        weight: store.currentUser?.progress.weight || '',
        waist: store.currentUser?.progress.waist || '',
        abdomen: store.currentUser?.progress.abdomen || '',
        arm: store.currentUser?.progress.arm || '',
        leg: store.currentUser?.progress.leg || '',
        photo_url: store.currentUser?.progress.photo_url || '',
        notes: store.currentUser?.progress.notes || ''
      });
    } else {
      navigate('/perfilcliente')
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    if (!token) {
      alert("You Have to log IN");
      return;
    }
    console.log('datos que se envian', formData)
    const response = await actions.updateProgress(formData)
    console.log('la respuesta', response)
    navigate('/perfilcliente')
    
  };

  const handleImageUpload = async (e) => {
    e.preventDefault()

    const file = e.target.file.files[0]
    if (!file) {
        console.log("Por favor, selecciona una imagen.")
        return
    }

    const imageUrl = await actions.uploadFile(file)

    if (imageUrl) {
        setFormData({ ...formData, photo_url: imageUrl })
    } else {
        console.log("Error al subir la imagen.")
    }
}

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData, [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData, [e.target.name]: e.target.value
      });
    }
  };
  console.log(formData)

  return (
    <div className="box-update">
      <h1 className="titulo-progress">Track Your Progress!</h1>

      <form onSubmit={handleSubmit}>
        <p className="sizes">Weight</p>
        <input className="medidas" type="number" name='weight' placeholder="kg" value={formData.weight} onChange={handleChange} />

        <p className="sizes">Waist size</p>
        <input className="medidas" type="number" name='waist' placeholder="cm" value={formData.waist} onChange={handleChange} />

        <p className="sizes">Abdominal size</p>
        <input className="medidas" type="number" name='abdomen' placeholder="cm" value={formData.abdomen} onChange={handleChange} />

        <p className="sizes">Arm size</p>
        <input className="medidas" type="number" name='arm' placeholder="cm" value={formData.arm} onChange={handleChange} />

        <p className="sizes">Leg size</p>
        <input className="medidas" type="number" name='leg' placeholder="cm" value={formData.leg} onChange={handleChange} />


        <p className="sizes">Notes</p>
        <textarea className="medidas" placeholder="Notes about your progress" name='notes' value={formData.notes} onChange={handleChange} />

        <button className="update-progres" type="submit">
          Update Progress
        </button>
      </form>
      <form id="upload-form" onSubmit={handleImageUpload}>
        <label htmlFor="file">Selecciona una foto:</label>
        <input type="file" id="file" name="file" required />

        <button className="btn btn-warning m-1" type="submit">Subir Imagen</button>

        <label htmlFor="photo_url">URL:</label>
        <input type="text" id="photo_url" name="photo_url" readOnly value={formData.photo_url} />
      </form>
     
    </div>
  );
};

export default UpdateProgress;
