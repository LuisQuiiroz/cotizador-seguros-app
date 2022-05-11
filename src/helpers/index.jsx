export function obtenerDiffYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento = 0;
    switch (marca) {
        case 'Europeo':
            incremento = 1.3;
            break;
        case 'Americano':
            incremento = 1.15;
            break;
        case 'Asíatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function calcularPlan(plan) {
    let incremento = 0;
    switch (plan) {
        case 'Básico':
            incremento = 1.2;
            break;
        case 'Completo':
            incremento = 1.5;
            break;
    }
    return incremento;
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}