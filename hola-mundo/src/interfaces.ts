/**
 * * Interfaces
 */
// Su uso principal es cuando todos los objetos a los que se van a implementar tienen una lógica distinta.
interface Animal1 
{
    name: string
    
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal1
{
    name: string = 'Rocinante'
    caminar(): void 
    {
        console.log('Caminando...')
    }
    onomatopeya(): string 
    {
        return 'Hin'
    }
}

class Cerdo implements Animal1
{
    name: string = 'Chanchito Feliz'
    caminar(): void 
    {
        console.log('Caminando...')
    }
    onomatopeya(): string 
    {
        return 'Oinc'
    }
}

class Perro implements Animal1
{
    name: string = 'Solovino'
    caminar(): void 
    {
        console.log('Caminando...')
    }
    onomatopeya(): string 
    {
        return 'guau'
    }

}

/**
 * * Index Signature
 */
/**
 * Es probable que algunos objetos tengan propiedades dinámicas, por ejemplo:
 * 
 * {
 *      'id1': 1,
 *      'id2': 2,
 *      'id3': 3,
 *      ...
 *      'idN': N,
 * }
 * 
 * Entonces el index signature nos permitira tener propiedades dinámicas para poder acceder a estos valores. 
 */
class DiccionarioUsuarios
{
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()

diccionarioUsuarios['id1'] = 'Usuario 1'
diccionarioUsuarios['id2'] = 'Usuario 2'
diccionarioUsuarios['id3'] = 'Usuario 3'

console.log(diccionarioUsuarios)
