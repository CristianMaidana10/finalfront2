/**
 * @typedef {Object} ICita
 * @property {string} personaje - Nombre del personaje de la cita.
 * @property {string} cita - Cita del personaje.
 * @property {string} imagen - Url de la imagen del personaje.
 * @property {string} direccionPersonaje - Direccion de la ubicacion del personaje en la cita;
 */
export interface ICita {
  personaje: string;
  cita: string;
  imagen: string;
  direccionPersonaje: string;
}
