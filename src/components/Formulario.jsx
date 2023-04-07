import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  // Hooks
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2);
    return random + fecha
  };
   
  // Handle Functions
  function handleSubmit(e) {
    e.preventDefault();
    
    // Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    } 

    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    // Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 md:ml-5">
        <h2 className="font-black text-3xl">Seguimiento Pacientes</h2>

        <p className="text-lg mt-3 mb-5">
          Añade Pacientes y {' '}
          <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>

        <form 
          className="bg-white shadow-md rounded-lg p-5 mx-5 text-start mb-10"
          onSubmit={handleSubmit}
        >

          {/* && sifnica que si la condicion es cierta imprime algo */}
          {error && 
            <Error><p>Hay campos vacios</p></Error>
          }

          <div className="mb-5">
            <label 
              className="block text-gray-700 uppercase font-bold"
              htmlFor="mascota">
              Nombre Mascota
            </label>

            <input 
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)}
             />
          </div>

          <div className="mb-5">
            <label 
              className="block text-gray-700 uppercase font-bold"
              htmlFor="propietario">
              Nombre Propietario
            </label>

            <input 
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}
             />
          </div>

          <div className="mb-5">
            <label 
              className="block text-gray-700 uppercase font-bold"
              htmlFor="email">
              Email
            </label>

            <input 
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
             />
          </div>

          <div className="mb-5">
            <label 
              className="block text-gray-700 uppercase font-bold"
              htmlFor="alta">
              Alta
            </label>

            <input 
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
              id="alta"
              type="date"
              value={fecha}
              onChange={ (e) => setFecha(e.target.value)}
             />
          </div>

          <div className="mb-5">
            <label 
            htmlFor="sintomas" 
            className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>

            < textarea
              id="sintomas"
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-700 transition-all rounded-md"
            value={ paciente.id ? 'Editar paciente' : 'Agregar Paciente'}
           />

        </form>
    </div>
  )
}

export default Formulario