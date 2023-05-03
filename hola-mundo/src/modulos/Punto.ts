// Gracias a la palabra export, es posible usar esta clase en otro archivo.
// En caso de no colocar la palabra export, quiere decir que tendra un acceso global a todas las carpetas
export class Punto {
    constructor(public x: number, public y: number) {}
}

export const PUNTITO = { x: 1, y: 42 }
