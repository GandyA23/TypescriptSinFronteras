/**
 * Es necesario activar los siguientes atributos en el archivo tsconfig.json
 *  "allowJs": true,
 *  "checkJs": true,
 * Para que JS y TS coexistan en el mismo proyecto
 */
/**
 * 
 * @param {string} mensaje 
 * @returns {string}
 */
export function holamundo(mensaje) {
    console.log(`Hola Mundo! ${mensaje}`)
    return mensaje
}
