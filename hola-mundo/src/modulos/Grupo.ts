// Gracias a la palabra export, es posible usar esta clase en otro archivo.
// En caso de no colocar la palabra export, quiere decir que tendra un acceso global a todas las carpetas
// En caso de poner default, no es necesario hacer uso de llaves cuando se importa en un archivo. 
export default class Grupo {
    constructor(public readonly id: number, public name: string) { }
}

export const defaultGroup = {
    user: 'user',
    admin: 'admin'
}
