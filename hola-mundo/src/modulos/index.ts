import { Punto, PUNTITO } from './Punto'

// Exportación default y named export 
import Grupo, { defaultGroup } from './Grupo'

// Importación con comodín
import * as G from './Grupo'

// Para tomar el nombre de index por defecto, es necesario 
// cambiar el valor de moduleResolution a node en tsconfig.json
import { Caballos } from "./Animales/Caballos"
import { Chanchitos } from "./Animales/Chanchitos"
import { Animales } from "./Animales/Animales"

const punto = new Punto(1, 2)
const grupo = new Grupo(1, 'Grupo 1')
const grupoComodin = new G.default(2, 'Grupo 2')

console.log(PUNTITO, punto, grupo, defaultGroup)
console.log(grupoComodin, G.defaultGroup)
console.log(G)
console.log(Caballos, Animales, Chanchitos)
