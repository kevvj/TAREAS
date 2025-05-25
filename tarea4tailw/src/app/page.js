'use client'
import React, { useState } from 'react'
import { DashBoard } from './DashBoard'
import { CreateProyects } from './CreateProyects'
import { ViewProyects } from './ViewProyects'
import { SearchProyects } from './SearchProyects'
import { ViewParticipant } from './ViewParticipant'
import { AddParticipant } from './AddParticipant'
import { AddAssignment } from './Assignments'


export default function Home() {

  const [rute, setRute] = useState('dashboard')
  const [participants, setParticipants] = useState(participantss)
  const [assignments, setAssignments] = useState(assignmentss)
  const [proyects, setProyects] = useState(proyectss)

  return (
    <div className="container">
      <header>
        <span onClick={ ()=>setRute('dashboard')} className='cursor-pointer text-2xl'>Panel de administración</span><span>Admin</span>
      </header>


      <div className="flex justify-between gap-[10px]">
        <main>

          <div className="p-7 main-content">
            {rute === "dashboard" && <DashBoard proyects={proyects.length} participants={participants.length} assignments={assignments.length}></DashBoard>}
            {rute === "createproyect" && <CreateProyects proyects ={proyects}setProyects ={setProyects}></CreateProyects>}
            {rute === "proyects" && <ViewProyects proyects ={proyects}setProyects ={setProyects}></ViewProyects>}
            {rute === "searchproyect" && <SearchProyects proyects={proyects}></SearchProyects>}
            {rute === "participants" && <ViewParticipant participants={participants} setParticipants={setParticipants}></ViewParticipant>}
            {rute === "addparticipant" && <AddParticipant participants={participants} setParticipants={setParticipants}></AddParticipant>}
            {rute === "assignments" && <AddAssignment assignments={assignments} proyects={proyects} participants={participants} setAssignments={setAssignments}></AddAssignment>}

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

const proyectss = [{ id: 1, name: "Nombre uno", description: "description1", startDate: "startDate1", endDate: "endDate1", value: "value1", assignments: "assignments1" },
{ id: 2, name: "Nombre dos", description: "description2", startDate: "startDate2", endDate: "endDate2", value: "value2", assignments: "assignments2" },
{ id: 3, name: "Nombre tres", description: "description3", startDate: "startDate3", endDate: "endDate3", value: "value3", assignments: "assignments3" }]

const participantss = [{ id: 1, name: "Nombre 1", lastName: "description1", email: "startDate1", phone: "endDate1", assignments: "assignments1" },

{ id: 2, name: "Nombre 2", lastName: "description1", email: "startDate1", phone: "endDate1", assignments: "assignments1" },
{ id: 3, name: "Nombre 3", lastName: "description1", email: "startDate1", phone: "endDate1", assignments: "assignments1" }]

const assignmentss = [{ id: 1, proyect: "Ejemplo de proyecto asignado", participant: "Ejemplo de participante asignado" },
]
