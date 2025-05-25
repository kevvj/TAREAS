import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
export const ViewParticipant = ({ participants, setParticipants }) => {

  const [isEditing, setIsEditing] = useState(false)

  const [idParticipants, setIdParticipants] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleedit = (id) => {
    if (!isEditing) {
      const participant = participants.find(item => item.id === id)
      setIdParticipants(participant.id)
      setName(participant.name)
      setLastName(participant.lastName)
      setEmail(participant.email)
      setPhone(participant.phone)
    } else {
      const updated = participants.map(p =>
        p.id === idParticipants
          ? { ...p, name, lastName, email, phone }
          : p
      )

      setParticipants(updated)
      setIdParticipants(null)
    }

    setIsEditing(!isEditing)
  }

  const handleDelete = (id) => {
    const newParticipants = participants.filter(item => item.id !== id)
    setParticipants(newParticipants)
  }


  return (
    <>
      <h3>Participantes</h3>
      <p>Bienvenido al panel de administración de participantes. Aquí podrás gestionar, ver y editar la información de los participantes.</p>

      <div className='grid grid-cols-6 mt-7'>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Identificación</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Nombres</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Apellidos</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Email</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Celular</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Acciones</div>
        {participants.map((item) => {
          return (
            <React.Fragment key={item.id}>

              {item.id !== idParticipants && (
                <>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.id}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.name}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.lastName}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.email}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.phone}</div>
                </>
              )}

              {item.id === idParticipants && !isEditing && (
                <>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.id}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.name}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.lastName}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.email}</div>
                  <div className='border-b border-[#ccc] p-2.5 text-center'>{item.phone}</div>
                </>
              )}

              {isEditing && item.id === idParticipants && (
                (<>
                  <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={idParticipants} onChange={e => setIdParticipants(e.target.value)}></input>
                  <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={name} onChange={e => setName(e.target.value)}></input>
                  <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={lastName} onChange={e => setLastName(e.target.value)}></input>
                  <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                  <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={phone} onChange={e => setPhone(e.target.value)}></input>
                </>)
              )}

              <div className='border-b border-[#ccc] p-2.5 text-center'><div>
                <div className='flex gap-2 justify-center items-center'>
                  <span onClick={() => handleedit(item.id)} className={isEditing && item.id === idParticipants ? 'cursor-pointer bg-emerald-300' : 'cursor-pointer'}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></span>
                  <span onClick={() => handleDelete(item.id)} className='cursor-pointer'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                </div>
              </div></div>

            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}