const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar ese paciente?');
    if(respuesta) eliminarPaciente(id)
  };

  return (
    <div className="mx-3 md:ml-3 md:mr-5 bg-white shadow-md px-10 py-10 rounded-xl text-start mb-5 ">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-justify">Síntomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex mt-2 gap-3 justify-end">
          <button 
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase hover:cursor-pointer rounded-lg"
          type="button"
          onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>

          <button 
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase hover:cursor-pointer rounded-lg"
          type="button"
          onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Paciente