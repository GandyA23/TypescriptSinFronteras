/** **/
// console.log("Hola Mundo")

let mensaje : string = "Hola Mundo"

// mensaje = 42 // Esta asignación genera un error
mensaje = "chanchito feliz"
mensaje = "chao mundo"
console.log(mensaje)

console.log(typeof [])
/**
 * Tipos de datos en JS
 * number
 * string
 * boolean
 * undefined
 * object
 * function
 * 
 * Tipos de datos en TS
 * any // tratar de no usarlo, debido a que elimina el proposito de ts
 * unkown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos inferidos (no necesitas especificar su tipo de dato)
 * 
 * Para estos tipos de dato, no es necesario especificar el tipo de dato
 * debido a que TS es lo suficientemente inteligente para detectarlo. 
 */
let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

// Arreglos
let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

// El autocompletado del map solo sugiere métodos del tipo de dato dentro del arreglo
animales.map(x => x.toUpperCase())
nums.map(x => x.toFixed())

// Tuplas
// Pueden ser dos o más tipos de datos
let tupla1: [number, string] = [1, 'chanchitoFeliz']
let tupla2: [number, string[]] = [1, ['chanchitoFeliz', 'felipe']]
let tupla3: [number, string, string] = [1, 'chanchitoFeliz', 'felipe']

// ENUM
// Lista de constantes que pueden ser referenciada en un futuro

// Solución sin ENUM
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

// Solución con ENUM
// Hacer uso de PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

// En caso de no colocar el valor a cada constante dentro de ENUM, entonces iniciará con 0, 1, 2, ..., N
enum TallaNum { Chica, Mediana, Grande, ExtraGrande }

// También es posible empezar desde un número si le asignas ese número a la primera constante, entonces..  i, i+1, i+2, ..., i+N
enum TallaNum2 { Chica = 2, Mediana, Grande, ExtraGrande }

const valorTallaStr = Talla.Chica
const valorTallaNum1 = TallaNum.Mediana
const valorTallaNum2 = TallaNum2.Mediana

console.log(valorTallaStr)
console.log(valorTallaNum1)
console.log(valorTallaNum2)

// Buena práctica en Enum, usar const
// Al momento de generar el index.js, solo asignará los valores una vez que se encuentren en uso, entonces es más óptimo usar const
const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

// Objetos
type Direccion = {
    numero: number,
    calle: string, 
    pais: string
}

type Persona = {
    readonly id: number,
    nombre?: string // Atributo opcional
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = { 
    id: 1,
    nombre: '',
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'ChanchitoLandia'
    }
}

const arr: Persona[] = [ objeto ]

// objeto.id = 42 // No puedes cambiar el valor
objeto.nombre = 'Gandy Esaú Ávila Estrada'

// Funciones
const fn: (a: number, msg?: string) => string = (edad: number, msg: string = 'Eres mayor de edad') => {
    if (edad > 17)
        return `Puedes ingresar - ${msg}`
    return 'No puedes pasar'
}

function validaEdad(edad: number, msg:string = 'Eres mayor de edad'): string
{
    if (edad > 17)
        return `Puedes ingresar - ${msg}`
    return 'No puedes pasar'
}

console.log(validaEdad(18, 'Este es un mensaje personalizado'))
console.log(fn(18))

// Tipo Never
// Se usa principalmente en funciones donde es posible que nunca vaya a retornar algo
// Se usan principalmente en funciones que se dedican a solo lanzar excepciones. 

function ErrorUsuario(): never {
    throw new Error('Error de un usuario')
}

// Union Type
// Es posible definir una variable con 2 o más tipos de datos sin hacer uso del tipo any
let puntaje: number | string = 98

puntaje = 'Hola Mundo'

type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    nombre: string
}

let animal: Animal | Usuario = { id: 1, estado: '' }

function sumaDos(n: number | string): number {
    if (typeof n === 'number') {
        return n + 2 
    }

    return parseInt(n) + 2 
}

console.log(sumaDos(2))
console.log(sumaDos('2'))

// Intersection type

type Audit = {
    created_at: string,
    modified_at: string
}

type Product = {
    name: string,
}

// Las variables que tengan un intersection (&), es necesario que tenga todos los atributos de los tipos en la intersección
const product: Audit & Product = {
    name: 'Gandy Esaú Ávila Estrada',
    created_at: '2023/04/30',
    modified_at: '2023/04/30'
}

// Literal type
