import React, { useState } from 'react'
export const CreateProyects = ({proyects, setProyects}) => {

    const [idproyect, setIdProyect] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startdate, setStartDate] = useState('')
    const [enddate, setEndDate] = useState('')
    const [value, setValue] = useState('')

    const handleProyects = (e) => {

      e.preventDefault()
      const newProyect = {
        id: proyects.length + 1,
        name: name,
        description: description,
        startDate: startdate,
        endDate: enddate,
        value: value,
        assignments: 'assignments'
      }
      setProyects([...proyects, newProyect])
      setIdProyect('')
      setName('')
      setDescription('')
      setStartDate('')
      setEndDate('')
      setValue('')
    }

    const handleCancel = (e) => {

      e.preventDefault()
      setIdProyect('')
      setName('')
      setDescription('')
      setStartDate('')
      setEndDate('')
      setValue('')
    }

    return (
      <>
        <h3>Crear Proyecto</h3>
        <p>Completa el formulario para crear un nuevo proyecto</p>
        <form className='form' onSubmit={(e) => e.preventDefault()}>
          <div className='form-group'>
            <span>ID Proyecto</span><input type='text' placeholder='PRJ-001' value={idproyect} onChange={e => setIdProyect(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <span>Nombre</span><input type='text' placeholder='Nombre del proyecto' value={name} onChange={e => setName(e.target.value)}></input>
          </div>
          <div className='form-group' id='description'>
            <span>Descripción</span><textarea rows="4" cols="50" placeholder='Descripción detallada del proyecto' value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>

          <div className='form-group'>
            <span>Fecha inicio</span><input type='date' value={startdate} onChange={e => setStartDate(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <span>Fecha final</span><input type='date' value={enddate} onChange={e => setEndDate(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <span>Valor</span><input type='text' placeholder='0.00' value={value} onChange={e => setValue(e.target.value)}></input>
          </div>

          <button type="button" onClick={(e) => handleCancel(e)}>Cancelar</button>
          <button type="submit" onClick={(e) => handleProyects(e)}>Guardar</button>
        </form>
      </>
    )
  }