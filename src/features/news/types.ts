/**
Interfaz que define la estructura de una noticia
@interface INoticiasNormalizadas
@property {number} id - ID noticia.
@property {string} titulo - Título noticia.
@property {string} descripcion - Descripción noticia.
@property {Date} fecha - Fecha noticia.
@property {boolean} esPremium - Indica si la noticia es premium o no.
@property {string} imagen - URL de la imagen de la noticia.
@property {string} descripcionCorta - Descripción corta de la noticia.
@property {number} minutosTranscurridos - Minutos transcurridos desde la publicacion de la noticia.
*/

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
    minutosTranscurridos?: number;
};

/**
Interfaz que define la estructura de una noticia
@interface INoticias
@property {number} id - ID de la noticia.
@property {string} titulo - Título de la noticia.
@property {string} descripcion - Descripción de la noticia.
@property {Date} fecha - Fecha de la noticia.
@property {boolean} esPremium - Indica si la noticia es premium o no.
@property {string} imagen - URL de la imagen asociada a la noticia.
*/
export interface INoticias {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    esPremium: boolean;
    imagen: string;
};