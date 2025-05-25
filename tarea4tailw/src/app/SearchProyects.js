import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const SearchProyects = ({proyects}) => {
    const [search, setSearch] = useState('')

    const handleDelete = (id) => {
      const newProyects = proyectt.filter(proyect => proyect.id !== id)
      setProyectt(newProyects)
    }

    const [proyectt, setProyectt] = useState(proyects)

    const [isEditing, setIsEditing] = useState(false)

    const [idproyect, setIdProyect] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startdate, setStartDate] = useState('')
    const [enddate, setEndDate] = useState('')
    const [value, setValue] = useState('')

    const handleedit = (id) => {
      if (!isEditing) {
        const proyect = proyectt.find(proyect => proyect.id === id)
        setIdProyect(proyect.id)
        setName(proyect.name)
        setDescription(proyect.description)
        setStartDate(proyect.startDate)
        setEndDate(proyect.endDate)
        setValue(proyect.value)
      } else {
        const updated = proyectt.map(p =>
          p.id === idproyect
            ? { ...p, name, description, startDate: startdate, endDate: enddate, value }
            : p
        )

        setProyectt(updated)
        setIdProyect(null)
      }

      setIsEditing(!isEditing)
      console.log(idproyect, name, description, startdate, enddate, value)
    }

    const handleSearch = (e,s) => {
      e.preventDefault()
      const results = proyects.filter(p =>
        Object.values(p).some(val =>
          String(val).toLowerCase().includes(s)
        )
      )

      setProyectt(results)
    }

    return (
      <>
        <h3>Buscar Proyectos</h3>
        <p>Buscar proyectos por nombre, ID o descripción</p>
        <form className='form' onSubmit={(e) => handleSearch(e,search)}>

          <div className='search-proyect-input'>

            <div className='flex gap-2'>
              <span>Busqueda clave</span>

              <input type='text' value={search} onChange={e => setSearch(e.target.value)}>

              </input>
            </div>

            <div className='cursor-pointer' onClick={(e) => handleSearch(e,search)}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>

          </div>
        </form>

        <div className='grid grid-cols-7 mt-7'>


          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>ID</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Nombre</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Descripción</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Fecha inicio</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Fecha final</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Valor</div>
          <div className='font-bold border-b border-[#ccc] p-2.5 text-center'>Acciones</div>
          {proyectt.map((item) => {
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