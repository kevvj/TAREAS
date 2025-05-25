export const DashBoard = ({proyects,participants,assignments}) => {
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