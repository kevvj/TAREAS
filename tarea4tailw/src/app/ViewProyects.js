import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

export const ViewProyects = ({setProyects, proyects}) => {

    const handleDelete = (id) => {
      const newProyects = proyects.filter(proyect => proyect.id !== id)
      setProyects(newProyects)
    }

    const [isEditing, setIsEditing] = useState(false)

    const [idproyect, setIdProyect] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startdate, setStartDate] = useState('')
    const [enddate, setEndDate] = useState('')
    const [value, setValue] = useState('')

    const handleedit = (id) => {
      if (!isEditing) {
        const proyect = proyects.find(proyect => proyect.id === id)
        setIdProyect(proyect.id)
        setName(proyect.name)
        setDescription(proyect.description)
        setStartDate(proyect.startDate)
        setEndDate(proyect.endDate)
        setValue(proyect.value)
      } else {
        const updated = proyects.map(p =>
          p.id === idproyect
            ? { ...p, name, description, startDate: startdate, endDate: enddate, value }
            : p
        )

        setProyects(updated)
        setIdProyect(null)
      }

      setIsEditing(!isEditing)
      console.log(idproyect, name, description, startdate, enddate, value)
    }



    return (
      <>
        <h3>Proyectos</h3>
        <p>Bienvenido al panel de administración de proyectos. Aquí podrás gestionar, ver y editar los proyectos actuales.</p>
        <div className='grid grid-cols-7 mt-7'>


          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>ID</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Nombre</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Descripción</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Fecha inicio</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Fecha final</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Valor</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Acciones</div>
          {proyects.map((item) => {
            return (

              <React.Fragment key={item.id}>

                {item.id !== idproyect && (
                  <>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.id}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.name}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.description}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.startDate}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.endDate}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.value}</div>

                  </>
                )}

                {item.id === idproyect && !isEditing && (
                  <>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.id}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.name}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.description}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.startDate}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.endDate}</div>
                    <div className='border-b border-[#ccc] p-2.5 text-center'>{item.value}</div>

                  </>
                )}

                {isEditing && item.id === idproyect && (
                  (<>
                    <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={idproyect} onChange={e => setIdProyect(e.target.value)}></input>
                    <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={description} onChange={e => setDescription(e.target.value)}></input>
                    <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={startdate} onChange={e => setStartDate(e.target.value)}></input>
                    <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={enddate} onChange={e => setEndDate(e.target.value)}></input>
                    <input className='border-b border-[#ccc] p-2.5 text-center bg-lime-200' type='text' value={value} onChange={e => setValue(e.target.value)}></input>
                  </>)
                )}

                <div className='border-b border-[#ccc] p-2.5 text-center flex justify-center'>

                  <div className='flex gap-2'>
                    <span onClick={() => handleedit(item.id)} className={isEditing && item.id === idproyect ? 'cursor-pointer bg-emerald-300' : 'cursor-pointer'}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></span>
                    <span onClick={() => handleDelete(item.id)} className='cursor-pointer'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </>
    )
  }