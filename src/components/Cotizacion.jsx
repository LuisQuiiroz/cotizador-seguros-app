import useCotizador from "../hooks/useCotizador";
import { useRef } from 'react'

const Cotizacion = () => {
    const { cotizacion, data } = useCotizador();
    const { marca, year, plan } = data;
    const marcaRef = useRef(marca);
    const yearRef = useRef(year);
    const planRef = useRef(plan);

    if (cotizacion === 0) return null;
    return (
        <div className="bg-gray-200 text-center mt-5 p-5 shadow rounded-lg">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {marcaRef.current}
            </p>
            <p className="my-2">
                <span className="font-bold">Año: </span>
                {yearRef.current}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {planRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total cotización: </span>
                {cotizacion}
            </p>
        </div>
    )
}

export default Cotizacion