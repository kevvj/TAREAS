'use client'
import React, { useState } from 'react'

export default function Home() {

  const [rute, setRute] = useState('dashboard')
  const [proyects, setProyects] = useState([])
  const [participants, setParticipants] = useState([])
  const [assignments, setAssignments] = useState([])

  const DashBoard = ({proyects, participants, assignments}) => {
    return (
      <>
        <h3>Dashboard</h3>
        <p>Bienvenido al panel de administración de proyectos y participantes</p>

        <div className="dashboard">
          <div className="dashboard-card">
            <h4>Proyectos</h4>
            <span>{proyects}</span>
          </div>
          <div className="dashboard-card">
            <h4>participantes</h4>
            <span>{participants}</span>
          </div>
          <div className="dashboard-card">
            <h4>Asignaciones</h4>
            <span>{assignments}</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="container">
      <header>
        <span>Panel de administración</span><span>Admin</span>
      </header>


      <div className="navigation">
        <main>

          <div className="main-content">
          {rute === "dashboard" && <DashBoard proyects={1} participants={2} assignments={3}></DashBoard>} 
          </div>
        </main>

        <aside className="sidebar">
          <div className="siderbar-item">
            <h3>Proyectos</h3>
            <ul>
              <li>Crear proyecto</li>
              <li>Listado proyectos</li>
              <li>Buscar proyectos</li>
            </ul>
          </div>
          <div className="siderbar-item">
            <h3>Proyectos</h3>
            <ul>
              <li>Crear proyecto</li>
              <li>Listado proyectos</li>
              <li>Buscar proyectos</li>
            </ul>
          </div>
          <div className="siderbar-item">
            <h3>Proyectos</h3>
            <ul>
              <li>Crear proyecto</li>
              <li>Listado proyectos</li>
              <li>Buscar proyectos</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
