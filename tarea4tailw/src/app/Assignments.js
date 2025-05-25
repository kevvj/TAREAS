import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

export const Assignments = ({ assignments, setAssignments }) => {
   const handleDelete = (id) => {
      const newAssignments = assignments.filter(item => item.id !== id)
      setAssignments(newAssignments)
    }
  return (
    <>
      <div className='grid grid-cols-4 mt-7'>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>ID</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Proyecto</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Participante</div>
        <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Acciones</div>
        {assignments.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className='border-b border-[#ccc] p-2.5 text-center'>{item.id}</div>
              <div className='border-b border-[#ccc] p-2.5 text-center'>{item.proyect}</div>
              <div className='border-b border-[#ccc] p-2.5 text-center'>{item.participant}</div>
              <div className='border-b border-[#ccc] p-2.5 text-center'>
                <div className='flex gap-2 justify-center items-center'>

                  <span className='cursor-pointer' onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export const AddAssignment = ({ assignments, proyects, participants, setAssignments }) => {

  const [proyect, setProyect] = useState("")
  const [participant, setParticipant] = useState("")

  const handleAssignment = (e) => {
    e.preventDefault()
    const newAssignment = {
      id: assignments.length + 1,
      proyect: proyect,
      participant: participant,
    }

    console.log(newAssignment)

    setAssignments([...assignments, newAssignment])
  }

 

  return (
    <>
      <h3>Asignar proyecto</h3>
      <p>Selecciona un proyecto y un participante para asignar el proyecto</p>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-group'>
          <span>Proyecto</span><select value={proyect} onChange={e => setProyect(e.target.value)}>
            <option value={""}>Escoja un proyecto...</option>
            {proyects.map((item) => {
              return (
                
                <option key={item.id} value={item.name}>{item.name}</option>
                
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <span>Participante</span><select value={participant} onChange={e => setParticipant(e.target.value)}>
            <option value={""}>Escoja un participante...</option>
            {participants.map((item) => {
              return (
                <option key={item.id} value={item.name}>{item.name}</option>
              )
            })}
          </select>
        </div>

        <button onClick={(e) => handleAssignment(e)}>Guardar asignación</button>

      </form>


      <Assignments assignments={assignments} setAssignments={setAssignments}></Assignments>
    </>
  )
}