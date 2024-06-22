import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Summit CDM Day",
    lead: "Federico Azeglio",
    type: "Eventos",
    description: `Te invito a ser parte de un espacio de trabajo dinamico, colaborativo, y con un impacto real en los lideres del manana. 
        Tenemos como objetivo llevar adelante un evento con formato Charla Ted, donde el objetivo principal es llegar con un mensaje que transforme la visión del liderzago en el auditorio. Este años pensamos subir el nivel del mismo trabajando en alianza con varias universidades. Si pensás que podés ser speaker o colaborar con la organización de un evento que se llevará las miradas del primer semestre. Te esoeramos!!`,
  },
  {
    label: "Trabajo Interdisciplinario",
    lead: "Andy García",
    type: "Desarrollo",
    description:
      "En este espacio buscaremos que personas de similares intereses y áreas de expertise puedan desarrollar ideas para compartir a la comunidad del Club y a la sociedad. Estaremos divididos en áreas de acuerdo al negocio: Vino - Gastronomía, Turismo, Hotelería y servicios - Comercio - Industria - Servicios. El objetivo es que podamos compartir mejores prácticas en cada uno de estos nichos de negocio, con foco en el rol del líder. Los espero!",
  },
  {
    label: "Eventos sociales y formación",
    lead: "Nicolás Tarditi",
    type: "Eventos",
    description: `Creemos que la coblaboración y trabajo en equipo es fundamental para el crecimiento del Club, es por ello que te invito a formar parte de un equipo, para aportar ideas, mejorar los eventos y ejecutarlos.`,
  },
  {
    label: "Plataforma Club de Beneficios - Networking",
    lead: "Mauricio Guzman / Franco Maratta",
    type: "Producto Digital",
    description: `Club de beneficios: Este equipo de trabajo propone generar ideas en la creación, vinculación y crecimiento de una plataforma que nos permita acceder a un catálogo de beneficios a los cuales todos los socios del club puedan utilizar para canjear puntos obtenidos por productos y servicios ofrecidos.
                Networking/Club del Manager en tu empresa: La idea es invitarte a formar parte de reuniones y visitas programadas con miembros del club, donde en ese espacio de café, o en sus lugares de trabajo nos reciban y podamos conocer metodologías de trabajo, rubros, problemáticas, etc. Y principalmente a ese socio del club en un momento de protagonismo absoluto.`,
  },
  {
    label: "Formación con impacto (cursos, talleres y capacitaciones)",
    lead: "Pablo Iacobucci",
    type: "Formación",
    description: `Esta es una propuesta en donde buscamos que los Managers puedan volcar toda su experiencia profesional y laboral en pastillas de formación dirigida a managers y directivos en general.
                Actualmente contamos con el apoyo de varias universidades y te necesitamos para diseñar los programas como disctrlos. Esperamos que te sumes y seas parte del team!`,
  },
];

export default function SquadsList() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 700, flexGrow: 1 }}>
      <Paper
        square
        className="  px-4 py-3 bg-gray-200 rounded-md shadow-md dark:bg-gray-200"
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-teal-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {steps[activeStep].type}
        </span>
        &nbsp;&nbsp;
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box
        className="text-gray-600"
        sx={{ height: "100%", maxWidth: 700, width: "100%", p: 2 }}
      >
        {steps[activeStep].description}
      </Box>
      <span className=" px-3 py-1 text-md text-gray-600 font-semibold align-text-bottom dark:text-blue-900">
        Líder: {steps[activeStep].lead}
      </span>
      <MobileStepper
        className="  px-4 py-3 bg-gray-200 rounded-md shadow-md dark:bg-gray-800"
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </Box>
  );
}
