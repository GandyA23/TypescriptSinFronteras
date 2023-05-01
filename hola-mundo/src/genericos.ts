/**
 * * Genéricos
 */

// Mirar el siguiente ejemplo
function logM(a: string, b: string)
{
    console.log(a, b)
}

function logN(a: string, b: number)
{
    console.log(a, b)
}

// Es posible realizar funciones de logs, donde solo van cambiando el tipo de dato,
// Pero esto suele ser muy repetitivo. 
// Entonces... declarar un genérico se ve así

// Función genérica
function log<T>(a: string, b: T): T
{
    console.log(a, b)
    return b
}

function log2<T, V>(a: T, b: V): V
{
    console.log(a, b)
    return b
}

// llamado de la función
log<number>('dato', 42)
log<string>('dato', 'Otro dato')
log<boolean>('dato', true)
log<Array<number>>('dato', [1, 2, 3])

log2<string, number>('dato', 42)
log2<string, string>('dato', 'Otro dato')
log2<string, boolean>('dato', true)
log2<string, Array<number>>('dato', [1, 2, 3])

// no es necesario especificar los tipos de dato, ts los detecta
log('dato', 42)
log('dato', 'Otro dato')
log('dato', true)
log('dato', [1, 2, 3])

log2('dato', 42)
log2('dato', 'Otro dato')
log2('dato', true)
log2('dato', [1, 2, 3])

// Caso de la vida real
async function fetchData<T>(recurso: string): Promise<T>
{
    const response = await fetch(recurso)
    return response.json()
}

type User = {
    id: string, 
    name: string
}

async function main()
{
    const userFetched = await fetchData<User>('/usuarios')
    console.log(userFetched.id, userFetched.name)
}

// Genéricos en clases
type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T>
{
    constructor(public computador: T) { }
}

const programador1 = new Programador<Computador>({
    encender: () => {},
    apagar: () => {}
})

const programador2 = new Programador<string>('Laptop HP')
console.log(programador1, programador2)

// Genéricos en interfaces
interface KeyValue<T, V> 
{
    key: T,
    value: V
}

interface ProductInterface 
{
    id: string
}

function fetchProduct(): KeyValue<string, ProductInterface>
{
    return {
        key: 'id del producto',
        value: { id: 'id del producto' }
    }
}


function fetchStock(): KeyValue<string, number>
{
    return {
        key: 'id del producto',
        value: 500
    }
}

// También es posible encontrar restricciones en los genéricos
// Podemos restringir que los objetos que se pasen a la función, tengan la forma de una clase (o un type) de Usuario

/*
type UsuarioConstraint = {
    id: number, 
}
*/

class UsuarioConstraint
{
    constructor(public id: number) {}
}

function print<T extends UsuarioConstraint>(t: T): T 
{
    console.log(t, t.id)
    return t
}

print({ id: 1 })


// Genericos y Herencia

class Status<T> 
{
    protected data: T[] = []

    add(t: T): void 
    {
        this.data.push(t)
    }
}

// Pasar el genérico con reestricciones
class DeleteStatus<T extends UsuarioConstraint> extends Status<T>
{
    delete(id: number)
    {
        this.data = this.data.filter(x => x.id !== id)
    }
}

const deleteStatus = new DeleteStatus<UsuarioConstraint>()

deleteStatus.delete(1)
deleteStatus.add(new UsuarioConstraint(1))

// Pasar el genérico fijo
class UserStatus extends Status<UsuarioConstraint> 
{
    resetPasswords()
    {

    }
}

// No es necesario pasar el genérico
const userStatus = new UserStatus()

// KeyOf

type Calendar = {
    id: number,
    fuente: string,
    dueno: string,
}

const calendar: Calendar = {
    id: 1,
    fuente: 'Google',
    dueno: 'yo',
}

// Con keyof, verifica que la propiedad exista en el genérico que se le pasa por T
function getProp<T>(objeto: T, property: keyof T): unknown
 {
    return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
// getProp<Calendar>(calendar, 'random') // Genera un error

// Utility types
type Point = {
    x: number,
    y: number,
    desc?: string
}

// Genera un tipo donde todos sus atributos son opcionales
type OptionalPoint = Partial<Point>

// Genera un tipo donde todos sus atributos son obligatorios
type RequiredPoint = Required<Point>

// También existen los records
const keyVal: Record<string, number> = {
    'soy un string': 42
}

// que reemplaza la siguiente definición
type kv = { [key: string]: number }

// En caso de que quieras omitir propiedades, entonces usas OMIT
// Omites las propiedades desc, y
const p: Omit<Point, 'desc' | 'y'> = {
    x: 1
}

// En caso de que quieras propiedades específicas, entonces usas Pick
// Solo tomas las propiedades x, y
const p1: Pick<Point, 'x' | 'y'> = {
    x: 1,
    y: 2
}

// Genera un tipo donde todos sus atributos son solo readonly, no puedes cambiar su valor
const readonlyP: Readonly<Point> = {
    x: 1,
    y: 1,
    desc: 'Es una descripción'
}
