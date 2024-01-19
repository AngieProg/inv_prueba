import { datosInvitado } from "../constants/index";
import CardFormato from "../components/CardFormato";
import InfoAdicional from "../components/InfoAdicional";
import { esqIzqEspacio } from "../assets/images";

const Invitado = () => (
  <section className="mt-10 flex justify-center">
    <div className="flex flex-col justify-center items-center w-[400px] h-[400px] border-4 border-separate border-dark-pink  text-center relative">
      <img src={esqIzqEspacio} className="absolute top-0 left-0" />
      <CardFormato titulo1="APRECIABLE" titulo2="Nombre del Invitado" />
      <p className="font-montserrat text-base w-[300px] text-dark-brown">
        CON INMENSA ALEGRÍA TE INVITO A CELEBRAR MIS XV AÑOS
      </p>
      <div className="flex flex-col flex-wrap items-center mt-6">
        {datosInvitado.map((dato, index) => (
          <div key={index} className="pt-1">
            <InfoAdicional
              icon2={dato.icon2}
              label={dato.label}
              input={dato.input}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Invitado;
