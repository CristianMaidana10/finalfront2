import {
  ESTADO_FETCH,
  NOMBRE_INVALIDO,
  MENSAJE_CARGANDO,
  NO_ENCONTRADO,
} from "./constants";

/**
 * Retorna un mensaje en base al estado de la peticion y la cita obtenida.
 * @param {string} cita - Cita obtenida 
 * @param {ESTADO_FETCH} estadoPedido - El estado de la peticion.
 * @returns {string} - Devuelve el mensaje del estado y cita obtenido.
 */
export const obtenerMensaje: (
  cita: string,
  estadoPedido: ESTADO_FETCH
) => string = (cita, estadoPedido) => {
  if (estadoPedido === ESTADO_FETCH.CARGANDO) {
    return MENSAJE_CARGANDO;
  }

  if (estadoPedido === ESTADO_FETCH.ERROR) {
    return NOMBRE_INVALIDO;
  }

  return cita ? `${cita}` : NO_ENCONTRADO;
};
