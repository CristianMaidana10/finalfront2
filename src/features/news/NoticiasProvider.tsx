import { INoticias } from "./types";

/** 
Funcion para devolver una promesa para resolver una lista de noticias.
@function
@returns {Promise<INoticias[]>} - Promesa para resolver una lista de noticias.
*/

export interface INoticiasProvider {
    obtenerNoticias: () => Promise<INoticias[]>;
}

export default INoticiasProvider;