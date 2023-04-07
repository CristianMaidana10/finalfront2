import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BotonBio, BioContainer, BioDescripcion, BioImagen, BioNombre, ContenedorBotones } from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        aria-label={nombre}
        isActive={(bioActiva.id === nombre) as boolean}
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
          <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
    </BioContainer>
  );
};

export default Bio;
