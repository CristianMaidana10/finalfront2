/**
Funcion que resta una cantidad de milisegundos a la fecha actual.
@function simularTiempoTranscurrido
@param {number} decrementMiliseconds - Milisegundos a restar.
@returns {Date} - Fecha nueva.
*/

export const simularTiempoTranscurrido: (decrementMiliseconds: number) => Date = (
    decrementMiliseconds
) => {
    let time = new Date();
    time.setMilliseconds(time.getMilliseconds() - decrementMiliseconds);
    return time;
};

/**
Capitaliza la primera letra de cada palabra en una cadena de texto.
@param str La cadena de texto para pasar a mayuscula.
@returns La cadena de texto con la primera letra de cada palabra en mayuscula.
*/

export const toUpperCaseFirstLetterText = (text: string) => {
    return text
        .split(" ")
        .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");
};