import Paciente from './Paciente'

const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">

        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-center text-3xl">
              Listado Paciente
            </h2>

            <p className="text-xl mt-3 mb-5 text-center">
              Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            <div className='md:h-screen overflow-y-scroll'>

              { pacientes.map( (paciente) => (
                <Paciente
                  paciente={paciente}
                  key={paciente.id}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}

            </div>

          </>
        )
        : (
          <>
            <h2 className="font-black text-center text-3xl">
              No hay pacientes
            </h2>
            <p className="text-xl mt-3 mb-5 text-center">
              Comienza agregando pacientes {' '}
              <span className="text-indigo-600 font-bold">y apareceran en este ligar</span>
            </p>
          </>
        )}

        

    </div>
  )
}

export default ListadoPaciente