'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

  const [rute, setRute] = useState('dashboard')
  const [participants, setParticipants] = useState(participantss)
  const [assignments, setAssignments] = useState(assignmentss)
  const [proyects, setProyects] = useState(proyectss)




  const DashBoard = ({ proyects, participants, assignments }) => {
    return (
      <>
        <h3>Dashboard</h3>
        <p>Bienvenido al panel de administración de proyectos y participantes</p>

        <div className="flex gap-5 w-[90%] mt-7">
          <div className="border border-[#ccc] p-5 rounded-[9px] w-[30%]">
            <h4 className='text-[1.2rem]'>Proyectos</h4>
            <span className='text-[1.8rem] font-bold'>{proyects}</span>
          </div>
          <div className="border border-[#ccc] p-5 rounded-[9px] w-[30%]">
            <h4 className='text-[1.2rem]'>participantes</h4>
            <span className='text-[1.8rem] font-bold'>{participants}</span>
          </div>
          <div className="border border-[#ccc] p-5 rounded-[9px] w-[30%]">
            <h4 className='text-[1.2rem]'>Asignaciones</h4>
            <span className='text-[1.8rem] font-bold'>{assignments}</span>
          </div>
        </div>
      </>
    )
  }

  const CreateProyects = () => {

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
        <form className='form'>
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

          <button onClick={(e) => handleCancel(e)}>Cancelar</button>
          <button onClick={(e) => handleProyects(e)}>Guardar</button>
        </form>
      </>
    )
  }



  const ViewProyects = () => {

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

  const SearchProyects = () => {
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

    const handleSearch = (s) => {
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
        <form className='form'>

          <div className='search-proyect-input'>

            <div className='flex gap-2'>
              <span>Busqueda clave</span>

              <input type='text' value={search} onChange={e => setSearch(e.target.value)}>

              </input>
            </div>

            <div className='cursor-pointer' onClick={() => handleSearch(search)}>
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

  const ViewParticipant = () => {
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
                <div className='border-b border-[#ccc] p-2.5 text-center'>{item.id}</div>
                <div className='border-b border-[#ccc] p-2.5 text-center'>{item.name}</div>
                <div className='border-b border-[#ccc] p-2.5 text-center'>{item.lastName}</div>
                <div className='border-b border-[#ccc] p-2.5 text-center'>{item.email}</div>
                <div className='border-b border-[#ccc] p-2.5 text-center'>{item.phone}</div>
                <div className='border-b border-[#ccc] p-2.5 text-center'><div>

                  <div className='flex gap-2 justify-center items-center'>
                    <span className='cursor-pointer'><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></span>
                    <span className='cursor-pointer'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                  </div>
                </div></div>

              </React.Fragment>
            )
          })}
        </div>
      </>
    )
  }



  const AddParticipant = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
      <>
        <h3>Añadir participante</h3>
        <p>Completa el formulario para crear un nuevo participante</p>
        <form className='form'>
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

          <button>Cancelar</button><button>Guardar particupante</button>
        </form>
      </>
    )
  }

  const Assignments = () => {
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
                   
                    <span className='cursor-pointer'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></span>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </>
    )
  }

  const AddAssignment = () => {
    return (
      <>
        <h3>Asignar proyecto</h3>
        <p>Selecciona un proyecto y un participante para asignar el proyecto</p>
        <form className='form'>
          <div className='form-group'>
            <span>Proyecto</span><select>
              {proyects.map((item) => {
                return (
                  <option key={item.id} value={item.id}>{item.name}</option>
                )
              })}
            </select>
          </div>
          <div className='form-group'>
            <span>Participante</span><select>
              {participants.map((item) => {
                return (
                  <option key={item.id} value={item.id}>{item.name}</option>
                )
              })}
            </select>
          </div>

          <button>Cancelar</button><button>Guardar asignación</button>

        </form>


        <Assignments></Assignments>
      </>
    )
  }


  return (
    <div className="container">
      <header>
        <span>Panel de administración</span><span>Admin</span>
      </header>


      <div className="flex justify-between gap-[10px]">
        <main>

          <div className="p-7 main-content">
            {rute === "dashboard" && <DashBoard proyects={1} participants={2} assignments={3}></DashBoard>}
            {rute === "createproyect" && <CreateProyects></CreateProyects>}
            {rute === "proyects" && <ViewProyects></ViewProyects>}
            {rute === "searchproyect" && <SearchProyects></SearchProyects>}
            {rute === "participants" && <ViewParticipant></ViewParticipant>}
            {rute === "addparticipant" && <AddParticipant></AddParticipant>}
            {rute === "assignments" && <AddAssignment></AddAssignment>}

          </div>
        </main>

        <aside className="w-1/4 p-[10px] bg-[#f8fafc] border border-[#ccc]">
          <div className="p-2.5 mb-2.5">
            <h3 className='text-[1.2rem] text-[#64748b]'>PROYECTOS</h3>
            <ul className='flex flex-col gap-2.5'>
              <li className='cursor-pointer' onClick={() => setRute('createproyect')}>Crear proyecto</li>
              <li className='cursor-pointer' onClick={() => setRute('proyects')}>Listado proyectos</li>
              <li className='cursor-pointer' onClick={() => setRute('searchproyect')}>Buscar proyectos</li>
            </ul>
          </div>
          <div className="p-2.5 mb-2.5">
            <h3 className='text-[1.2rem] text-[#64748b]'>PARTICIPANTES</h3>
            <ul className='flex flex-col gap-2.5'>
              <li className='cursor-pointer' onClick={() => setRute('participants')}>Participantes</li>
              <li className='cursor-pointer' onClick={() => setRute('addparticipant')}>Crear participante</li>
            </ul>
          </div>
          <div className="p-2.5 mb-2.5">
            <h3 className='text-[1.2rem] text-[#64748b]'>ASIGNACIONES</h3>
            <ul className='flex flex-col gap-2.5'>
              <li className='cursor-pointer' onClick={() => setRute('assignments')}>Asignación de proyectos</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

const proyectss = [{ id: 1, name: "name1", description: "description1", startDate: "startDate1", endDate: "endDate1", value: "value1", assignments: "assignments1" },
{ id: 2, name: "name2", description: "description2", startDate: "startDate2", endDate: "endDate2", value: "value2", assignments: "assignments2" },
{ id: 3, name: "name3", description: "description3", startDate: "startDate3", endDate: "endDate3", value: "value3", assignments: "assignments3" }]

const participantss = [{ id: 1, name: "name1", lastName: "description1", email: "startDate1", phone: "endDate1", assignments: "assignments1" },

{ id: 2, name: "name1", lastName: "description1", email: "startDate1", phone: "endDate1", assignments: "assignments1" },
{ id: 3, name: "name1", lastName: "description1", email: "startDate1", phone: "endDate1", assignments: "assignments1" }]

const assignmentss = [{ id: 1, proyect: "name1", participant: "description1" },
{ id: 2, proyect: "name2", participant: "description2" },
{ id: 3, proyect: "name3", participant: "description3" },
]
