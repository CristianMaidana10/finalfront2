import { INoticiasNormalizadas } from "./types";
import { toUpperCaseFirstLetterText } from "./utils";

/**
 * Normaliza una noticia con propiedades modificadas.
 * @param {INoticiasNormalizadas} noticia - La noticia que se va a normalizar.
 * @returns {INoticiasNormalizadas} - La noticia normalizada.
 */

const Noticia = (noticia: INoticiasNormalizadas): INoticiasNormalizadas => {
    const titulo = toUpperCaseFirstLetterText(noticia.titulo);
    const fechaNoticia = new Date(noticia.fecha);
    const fechaActual = new Date();
    const minutosTranscurridos = Math.floor(
        (fechaActual.getTime() - fechaNoticia.getTime()) / 60000
    );
    const descripcionCorta = noticia.descripcion.substring(0, 100);
    return {
        ...noticia,
        titulo,
        fecha: fechaNoticia,
        descripcionCorta,
        minutosTranscurridos,
    };
};

export default Noticia;