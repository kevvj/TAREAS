
import React, {useState} from 'react'
export const AddParticipant = ({participants, setParticipants}) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleParticipants = (e) => {

      e.preventDefault()
      const newParticipant = {
        id: participants.length + 1,
        name: name,
        lastName: lastname,
        email: email,
        phone: phone,
        assignments: 'assignments'
      }
      setParticipants([...participants, newParticipant])
      setId('')
      setName('')
      setLastname('')
      setEmail('')
      setPhone('')
    }

    const handleCancel = (e) => {

      e.preventDefault()
      setId('')
      setName('')
      setLastname('')
      setEmail('')
      setPhone('')
    }

    return (
      <>
        <h3>Añadir participante</h3>
        <p>Completa el formulario para crear un nuevo participante</p>
        <form className='form' onSubmit={(e) => e.preventDefault()}>
          <div className='form-group'>
            <span>Identificación</span><input type='text' placeholder='123456789' value={id} onChange={e => setId(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <span>Nombres</span><input type='text' placeholder='Nombre del participante' value={name} onChange={e => setName(e.target.value)}></input>
          </div>
          <div className='form-group' >
            <span>Apellidos</span><input type='text' placeholder='Apellido del participante' value={lastname} onChange={e => setLastname(e.target.value)}></input>
          </div>

          <div className='form-group'>
            <span>Correo</span><input type='text' placeholder='Correo del participante' value={email} onChange={e => setEmail(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <span>Telefono</span><input type='text' placeholder='Telefono del participante' value={phone} onChange={e => setPhone(e.target.value)}></input>
          </div>

          <button type="button" onClick={(e) => handleCancel(e)}>Cancelar</button><button type="submit" onClick={(e) => handleParticipants(e)}>Guardar participante</button>
        </form>
      </>
    )
  }