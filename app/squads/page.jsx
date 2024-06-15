import UnSquad from "@/components/squads/UnSquad";

const SquadsPage = () => {
  return (
    <>
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-sky-800 lg:text-3xl dark:text-white">
          Te mostramos cada una de las células de trabajo interdisciplinarias.
        </h1>
      </div>

      <table className="w-full h-full">
        <tr className="w-120 h-120">
          <td className="w-120 h-120">
            <div className="w-120 h-120 flex justify-center items-center">
              <UnSquad
                title="Summit CDM Day"
                lead="Federico Azeglio"
                description="Te invito a ser parte de un espacio de trabajo dinamico, colaborativo, y con un impacto real en los lideres del manana. 
        Tenemos como objetivo llevar adelante un evento con formato Charla Ted, donde el objetivo principal es llegar con un mensaje que transforme la visión del liderzago en el auditorio. Este años pensamos subir el nivel del mismo trabajando en alianza con varias universidades. Si pensás que podés ser speaker o colaborar con la organización de un evento que se llevará las miradas del primer semestre. Te esoeramos!!"
                type="Eventos"
              />
            </div>
          </td>
          <td>
            <div className="w-120 h-120 flex justify-center items-center">
              <UnSquad
                title="Trabajo Interdisciplinario"
                lead="Andy Garcia"
                description="En este espacio buscaremos que personas de similares intereses y áreas de expertise puedan desarrollar ideas para compartir a la comunidad del Club y a la sociedad. Estaremos divididos en áreas de acuerdo al negocio: Vino - Gastronomía, Turismo, Hotelería y servicios - Comercio - Industria - Servicios. 
        El objetivo es que podamos compartir mejores prácticas en cada uno de estos nichos de negocio, con foco en el rol del líder. Los espero!"
                type="Desarrollo"
              />
            </div>
          </td>
        </tr>

        <tr className="w-120 h-120">
          <td className="w-120 h-120">
            <div className="w-120 h-120 flex justify-center items-center">
              <UnSquad
                title="Evnetos sociales y formación"
                lead="Nicolás Tarditi"
                description="Creemos que la coblaboración y trabajo en equipo es fundamental para el crecimiento del Club, es por ello que te invito a formar parte de un equipo, para aportar ideas, mejorar los eventos y ejecutarlos."
                type="Eventos"
              />
            </div>
          </td>
          <td>
            <div className="w-120 h-120 flex justify-center items-center">
              <UnSquad
                title="Plataforma Club de Beneficios - Networking"
                lead="Mauricio Guzmán / Franco Maratta"
                description="Club de beneficios: Este equipo de trabajo propone generar ideas en la creación, vinculación y crecimiento de una plataforma que nos permita acceder a un catálogo de beneficios a los cuales todos los socios del club puedan utilizar para canjear puntos obtenidos por productos y servicios ofrecidos.
                Networking/Club del Manager en tu empresa: La idea es invitarte a formar parte de reuniones y visitas programadas con miembros del club, donde en ese espacio de café, o en sus lugares de trabajo nos reciban y podamos conocer metodologías de trabajo, rubros, problemáticas, etc. Y principalmente a ese socio del club en un momento de protagonismo absoluto."
                type="Producto Digital"
              />
            </div>
          </td>
        </tr>

        <tr className="w-120 h-120">
          <td className="w-120 h-120">
            <div className="w-120 h-120 flex justify-center items-center">
              <UnSquad
                title="Formación con impacto (cursos, talleres y capacitaciones)"
                lead="Pablo Iacobucci"
                description="Esta es una propuesta en donde buscamos que los Managers puedan volcar toda su experiencia profesional y laboral en pastillas de formación dirigida a managers y directivos en general.
                Actualmente contamos con el apoyo de varias universidades y te necesitamos para diseñar los programas como disctrlos. Esperamos que te sumes y seas parte del team!"
                type="Formacion"
              />
            </div>
          </td>
          <td></td>
        </tr>
      </table>
    </>
  );
};

export default SquadsPage;
