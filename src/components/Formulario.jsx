import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error';

const Formulario = () => {

    const { data, handleChangeData, error, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(data).includes('')) {
            setError('Todos los campos son obligatorios');
            return
        }
        setError('');
        cotizarSeguro();
    }

    return (
        <>
            {error && <Error />}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold" htmlFor="marca">
                        Marca
                    </label>
                    <select
                        id="marca"
                        name="marca"
                        className=" w-full p-3 bg-white border border-gray-300 rounded-lg text-center"
                        onChange={e => handleChangeData(e)}
                        value={data.marca}
                    >
                        <option value="">-- Seleccionar Marca -- </option>
                        {MARCAS.map(marca => (
                            <option
                                className="text-lg"
                                key={marca.id}
                                value={marca.nombre}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold" htmlFor="year">
                        Año
                    </label>
                    <select
                        id="year"
                        name="year"
                        className=" w-full p-3 bg-white border border-gray-300 rounded-lg text-center"
                        onChange={e => handleChangeData(e)}
                        value={data.year}

                    >
                        <option value="">-- Seleccionar Año -- </option>
                        {YEARS.map(year => (
                            <option
                                className="text-lg"
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold">
                        Elije un plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <input
                                    type="radio"
                                    name="plan"
                                    id={plan.nombre}
                                    value={plan.nombre}
                                    onChange={e => handleChangeData(e)}
                                />
                                <label htmlFor={plan.nombre}> {plan.nombre} </label>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-lg"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario