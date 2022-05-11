import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiffYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');
    const [cotizacion, setCotizacion] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000;
        let decrementoBase = 3; // porcentual

        const diffYear = obtenerDiffYear(data.year);

        resultado -= ((diffYear * decrementoBase) * resultado) / 100;
        resultado *= calcularMarca(data.marca);
        resultado *= calcularPlan(data.plan);
        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setCotizacion(resultado);
            setCargando(false);

        }, 2000);
    }

    return (
        <CotizadorContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                cotizarSeguro,
                cotizacion,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}
export {
    CotizadorProvider
}
export default CotizadorContext