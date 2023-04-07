import { useCallback, useEffect, useState } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import Noticia from "./Noticia";
import { INoticiasNormalizadas } from "./types";
import INoticiasProvider from "./NoticiasProvider";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
  BotonSuscribir,
  CotenedorTexto,
} from "./styled";

/**
 * Componente para mostrar una lista de noticias y ver mas detalles de cada una en un modal.
 * @param {Object} props - Propiedades del componente.
 * @param {INoticiasProvider} props.noticiasProvider - Proveedor de noticias.
 */

const Noticias = ({ noticiasProvider }: { noticiasProvider: INoticiasProvider }) => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

/**
* Función para obtener informacion de las noticias.
* @function
*/

const obtenerInformacionNoticias = useCallback(async () => {
  const noticiasApi = await noticiasProvider.obtenerNoticias();
  const noticiasNormalizadas = noticiasApi.map((noticia) => Noticia(noticia));
  setNoticias(noticiasNormalizadas);
}, [noticiasProvider]);

  useEffect(() => {
    const actualizarNoticias = async () => {
      await obtenerInformacionNoticias();
    };
    actualizarNoticias();
  }, [obtenerInformacionNoticias]);

  /**
 * Función para suscripcion newsletter.
 * @function
 */

const handleSubscribe = () => {
  setTimeout(() => {
    alert("Sucripto!");
    setModal(null);
  }, 1000);
};

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha.toLocaleString()}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
        {modal ? (
          modal.esPremium ? (
            <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                <CotenedorTexto>
                  <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                  <DescripcionModal>
                    Suscríbete a nuestro newsletter y recibe noticias de
                    nuestros personajes favoritos.
                  </DescripcionModal>
                  <BotonSuscribir
                    onClick={handleSubscribe}
                  >
                    Suscríbete
                  </BotonSuscribir>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
          ) : (
            <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={modal.imagen} alt="news-image" />
                <CotenedorTexto>
                  <TituloModal>{modal.titulo}</TituloModal>
                  <DescripcionModal>{modal.descripcion}</DescripcionModal>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
          )
        ) : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
