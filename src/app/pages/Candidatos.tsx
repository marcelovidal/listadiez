import { useState } from "react";
import martinezFoto from "@/assets/images/candidatos/audiovisual/martinez.png";
import epifanioFoto from "@/assets/images/candidatos/audiovisual/epifanio.png";
import lajesFoto from "@/assets/images/candidatos/audiovisual/lajes.png";
import cidFoto from "@/assets/images/candidatos/audiovisual/cid.png";
import bertoFoto from "@/assets/images/candidatos/formacion/berto.png";
import llanosFoto from "@/assets/images/candidatos/formacion/llanos.png";
import maldonadoFoto from "@/assets/images/candidatos/formacion/maldonado.png";
import solanasFoto from "@/assets/images/candidatos/formacion/solanas.png";
import breviFoto from "@/assets/images/candidatos/movimiento/bevi.png";
import alibertiFoto from "@/assets/images/candidatos/movimiento/aliberti.png";
import gelashviliFoto from "@/assets/images/candidatos/movimiento/gelashvili.png";
import enzoFoto from "@/assets/images/candidatos/movimiento/martinez.png";
import floresFoto from "@/assets/images/candidatos/visuales/flores.png";
import garciaFoto from "@/assets/images/candidatos/visuales/garcia.png";
import munozFoto from "@/assets/images/candidatos/visuales/munoz.png";
import riquelmeFoto from "@/assets/images/candidatos/visuales/riquelme.png";
import cambaFoto from "@/assets/images/candidatos/musica/camba.png";
import benitezFoto from "@/assets/images/candidatos/musica/benitez.png";
import poroyanFoto from "@/assets/images/candidatos/musica/poroyan.png";
import bascurFoto from "@/assets/images/candidatos/musica/bascur.png";
import faltaFoto from "@/assets/images/candidatos/falta.png";
import rolonFoto from "@/assets/images/candidatos/dramatico/rolon.png";
import quintinFoto from "@/assets/images/candidatos/dramatico/quintin.png";
import ocuartFoto from "@/assets/images/candidatos/dramatico/ocuart.png";
import picoFoto from "@/assets/images/candidatos/nodo/pico.png";
import manriquezFoto from "@/assets/images/candidatos/nodo/manriquez.png";
import guaragnaFoto from "@/assets/images/candidatos/graduados/guaragna.png";
import bossoFoto from "@/assets/images/candidatos/graduados/bosso.png";


import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

type Claustro = "docente" | "nodocente" | "graduado";

type DocenteDepartamento =
  | "audiovisual"
  | "musica"
  | "dramatico"
  | "visuales"
  | "movimiento"
  | "formacion-general";

type Filtro =
  | "todos"
  | "docente"
  | "docente-audiovisual"
  | "docente-musica"
  | "docente-dramatico"
  | "docente-visuales"
  | "docente-movimiento"
  | "docente-formacion"
  | "nodocente"
  | "graduado";

interface Candidato {
  id: number;
  nombre: string;
  cargo: string;
  claustro: Claustro;
  departamentoDocente?: DocenteDepartamento;
  bio: string;
  frase: string;
  foto: string;
}

// Datos de ejemplo - en producción vendrían de una API o base de datos
const candidatos: Candidato[] = [
  {
    id: 1,
    nombre: "Nicolás Martinez",
    cargo: "Consejero Docente Titular- Departamento de Artes Audiovisuales",
    claustro: "docente",
    departamentoDocente: "audiovisual",
    bio: `Es licenciado en comunicación social, maestrando en comunicación y cultura contemporánea, también licenciado en cinematografía y nuevos medios. Actualmente es docente e investigador en la Universidad Nacional del Comahue y IUPA.  
Está a cargo de la cátedra de Arte Digital y Animación desde hace más de 15 años.  
También es no docente. Durante años estuvo en el equipo de comunicación y contenidos de IUPA, espacio donde se consolidaron proyectos como IUPA Toons y Revista Árida, se rodaron películas y productos animados entre otros. `,
    frase: "Una universidad en serio donde podamos pensar y construir una agenda del arte, la creatividad y la cultura para el desarrollo de la provincia. Promover el fortalecimiento del sector audiovisual como industria, creador de empleo y como instrumento de soberanía cultural",
    foto: martinezFoto,
  },
  {
    id: 2,
    nombre: "Victoria Lajes",
    cargo: "Consejera Docente Titular - Departamento de Artes Audiovisuales",
    claustro: "docente",
    departamentoDocente: "audiovisual",
    bio: `Es Licenciada en Artes Audiovisuales con orientación en Realización por la Facultad de Artes de la Universidad Nacional de La Plata. Desde el 2022 se desempeña como docente de Historia del Cine y Guion II en el Instituto Universitario Patagónico de las Artes (IUPA). En ese mismo año se integra al equipo del Festival Patagonia Cine (IUPA/FCP) como Co-organizadora. A partir del 2023 ocupa el cargo de Coordinadora del Departamento de Artes Audiovisuales del IUPA. Durante el 2024 fue docente del Taller de Trabajo Final de la Licenciatura en Artes Audiovisuales (IUPA). Actualmente se encuentra cursando el posgrado de Especialización en Lenguajes Artísticos (FDA/UNLP)."`,
    frase: "Por una universidad plural, con diversidad de voces, donde el conocimiento se construya colectivamente y el arte sea pensado como un hecho problematizador y transformador de la realidad.",
    foto: lajesFoto,
  },
    {
    id: 3,
    nombre: "Ezquiel Epifanio",
    cargo: "Consejer Docente Suplente - Departamento de Artes Audiovisuales",
    claustro: "docente",
    departamentoDocente: "audiovisual",
    bio: `Es Lic. en Comunicación Audiovisual. Trabaja en el IUPA como docente en el Dpto. de Artes Audiovisuales y es director de contenidos en la revista Árida, en la cual  se realizan podcast, audiovisuales y escritos. 
De manera independiente realizó el guion de varias producciones como el documental Bombardeo a Río Colorado  y el largometraje Las Fieras. Publicó cuatro libros, entre ellos la  investigación histórica Toponimia Ilustrada de Río Negro. Fue guionista en el ciclo radial Valeriana y produjo El Rocazo, documental sonoro.
Fue productor de contenidos en Canal 10`,
    frase: " Una universidad de la que como docente y artista me sienta orgulloso. Un lugar en el que se respire reflexión y creatividad. Una institución de la que egresen buenos profesionales, pero sobre todo personas que que nos hagan una sociedad mejor. Una universidad en serio",
    foto: epifanioFoto,
  },
      {
    id: 4,
    nombre: "Lorena Cid",
    cargo: "Consejera Docente Suplente - Departamento de Artes Audiovisuales",
    claustro: "docente",
    departamentoDocente: "audiovisual",
    bio: `Es Profesora en Cinematografía y Nuevos  Medios. Maestranda en docencia universitaria en Un.Vi.Me. Actualmente es Docente de IUPA, del Profesorado en Artes audiovisuales en las materias Didáctica Específica, Residencia docente y los Talleres de práctica docente de Nivel Inicial y Primario y Nivel Medio y Superior desde 2017. Forma parte del Área de Accesibilidad universitaria de IUPA desde 2024 cumpliendo el rol de docente de apoyo en la accesibilidad universitaria. Es docente extensionista en el PEU ¿Querés jugar conmigo?. Ha participado desde 2012 en Proyectos y Talleres de Extensión universitaria y también ha sido integrante de equipos de Investigación desde 2017. `,
    frase: "Una universidad realmente democrática, con un Consejo Superior que represente las voces de todos y todas. Una universidad articulada con el Sistema educativo provincial, que piense la enseñanza de las artes audiovisuales como una herramienta clave para fomentar el pensamiento crítico de los niños, niñas y adolescentes de Rio Negro. ",
    foto: cidFoto,
  },

    {
    id: 5,
    nombre: "Guillermina Berto",
    cargo: "Consejera Docente Titular- Departamento Formación General",
    claustro: "docente",
    departamentoDocente: "formacion-general",
    bio: "Es Licenciada en Psicología y Magister en Género, sociedad y políticas por FLACSO. Desde 2018 trabaja en IUPA como docente, también se desempeña en la parte no docente en el protocolo de atención contra las violencias de género y en accesibilidad.Sus trabajos de investigación giran en torno a las representaciones del ser artista y docente desde la perspectiva de género. Además ha realizado proyectos de extensión en bibliotecas populares y espacios para tercera edad.",
    frase: "Una universidad que vincule a sus estudiantes con el territorio, con las formas de hacer arte y docencia en nuestra provincia. ",
    foto: bertoFoto,
  },
        {
    id: 6,
    nombre: "Diana Solana",
    cargo: "Consejera Docente Titular - Departamento Formación General",
    claustro: "docente",
    departamentoDocente: "formacion-general",
    bio: "Es Licenciada en comunicación social, maestrando en Ciencias sociales y humanas (UNQuilmes). En IUPA integra las cátedras de Metodología de la Investigación, Taller de Trabajo final de Música Popular e integra las comisiones del Taller de Solidaridad y Creatividad. En la Universidad del Comahue es docente desde el 2001 y actualmente integra como Jefa de Trabajos Prácticos las cátedras de Investigación de la Comunicación y del Taller de Tesis en la carrera de Comunicación Social. En su trayecto también formó parte de otros equipos docentes dictando talleres, seminarios, cursos mientras se desempañaba como periodista y comunicadora institucional. Acompañó y fue parte de proyectos de comunicación comunitaria y popular junto con organizaciones campesinas.",
    frase: "Sumar y construir. Por una universidad que crezca en la democratización del conocimiento, una universidad que abra el conocimiento a la imaginación, al arte, al pueblo. Construiremos la democratización universitaria mirando de frente los desafíos y escuchando todas las voces con honestidad, con debates, con inclusión. Será con la experiencia de quienes iniciaron este proyecto, será con la fuerza de quienes lo continuarán, será con el reconocimiento y el respeto a la tarea cotidiana de todas las personas que trabajan en y por el IUPA.",
    foto: solanasFoto,
  },
      {
    id: 7,
    nombre: "Jorgelina Llanos",
    cargo: "Consejera Docente Suplente - Departamento Formación General",
    claustro: "docente",
    departamentoDocente: "formacion-general",
    bio: "....",
    frase: "... ",
    foto: llanosFoto,
  },
        {
    id: 8,
    nombre: "Nicolás Maldonado",
    cargo: "Consejero Docente Suplente - Departamento Formación General",
    claustro: "docente",
    departamentoDocente: "formacion-general",
    bio: "Es licenciado en Psicología en la Universidad de Buenos Aires. Actualmente es docente en IUPA. Forma parte del departamento de Formación General. Es profesor de la materia Taller de Solidaridad y Creatividad hace 7 años. ",
    frase: "Una universidad de arte en la Patagonia es una responsabilidad enorme. Necesita como punto de partida ineludible ser democrática y estar dirigida por un equipo que comprenda el arte en todas sus dimensiones: como una herramienta formativa, cultural, educativa y con perspectivas reales de desarrollo para estudiantes y profesionales. Una universidad que promueva el arte como valor agregado del desarrollo de la provincia.",
    foto: maldonadoFoto,
  },
         {
    id: 9,
    nombre: "Noe Brevi",
    cargo: "Consejera Docente Titular - Departamento Artes del Movimiento",
    claustro: "docente",
    departamentoDocente: "movimiento",
    bio: "Es Docente Superior de Danza con orientación en Danza clásica y Contemporánea (IUPA), Licenciada en Educación (UES21), Especialista en Gestión Cultural (UNC), bailaora y profesora de flamenco. Hace 12 años ejerce la docencia en los distintos niveles formativos de IUPA, desde los Trayectos no universitarios, hasta el Profesorado Universitario. Está a cargo de cátedras específicas, como Danza clásica, y de cátedras de formación docente (Talleres de Práctica Docente y Residencia). Mayormente acompañando y supervisando las prácticas profesionalizantes que conectan a los estudiantes con diversas instituciones educativas y socio comunitarias de la ciudad. A su vez, participa activamente en los procesos de evaluación y reformulación de planes de estudio, comprometiéndose con la calidad educativa de la oferta del departamento de Artes del Movimiento.",
    frase: "Una universidad que posicione a la danza y el arte como conocimiento, hacia una inclusión real de la misma en el diseño curricular en todos los niveles educativos de Río Negro; brindando así un horizonte laboral a nuestros egresados, y una oportunidad de formación integral a todos habitantes de nuestra provincia",
    foto: breviFoto,
  }, 
  {
    id: 10,
    nombre: "Enzo Martinez",
    cargo: "Consejero Docente Titular - Departamento Artes del Movimiento",
    claustro: "docente",
    departamentoDocente: "movimiento",
    bio: "....",
    frase: "... ",
    foto: enzoFoto,
  }, 

      {
    id: 11,
    nombre: "Marianela Aliberti",
    cargo: "Consejera Docente Suplente - Departamento Artes del Movimiento",
    claustro: "docente",
    departamentoDocente: "movimiento",
    bio: "Es bailarina y profesora de Danzas Folklóricas, maestranda en docencia universitaria en UnViMe, estudiante avanzada en Licenciatura en Folklore en IUPA. Actualmente se desempeña como docente en IUPA en el departamento de Artes del Movimiento en las Cátedras de Danzas Nativas II, Proyección Coreografía y Práctica Escénica Vipertenecientes a la tecnicatura, profesorado y licenciatura en folklore",
    frase: "Democratizar la universidad es territorializar el conocimiento, profesionalizar al artista como investigador y docente, dar lugar a una producción de conocimiento en donde el movimiento impulse el desarrollo social en nuestra provincia.",
    foto: alibertiFoto,
  }, 
       {
    id: 12,
    nombre: "Sofia Gelashvili",
    cargo: "Consejera Docente Suplente - Departamento Artes del Movimiento",
    claustro: "docente",
    departamentoDocente: "movimiento",
    bio: "Es docente, Profesora Superior Nacional de Danzas Españolas y Licenciada en Enseñanza Universitaria de las Artes.  Desde hace 18 años se desempeña como docente en el IUPA. Fue coordinadora de las carreras de profesorado y tecnicatura en Danzas españolas en 2024. En la actualidad está a cargo de la cátedra de Composición Coreográfica I y II (en dupla) y dicta diversas materias de carácter práctico correspondientes a los cursos de Formación no universitaria, participando activamente en los procesos de formación artística y pedagógica de la institución.",
    frase: "Fortalecer la democratización de la institución, promover el desarrollo del Departamento de Artes del Movimiento y sostener una articulación permanente con el sistema educativo de la provincia, potenciando la danza como trabajo, como campo profesional y como herramienta para mejorar los procesos de aprendizaje y la convivencia socia",
    foto: gelashviliFoto,
  },
        {
    id: 13,
    nombre: "Vanesa Flores",
    cargo: "Consejera Docente Titular - Departamento Artes Visuales",
    claustro: "docente",
    departamentoDocente: "visuales",
    bio: "Es artista y profesora de Artes Visuales con orientación en Grabado y Arte Impreso. Es licenciada en Enseñanza Universitaria de las Artes. Actualmente cursa la Maestría en Docencia Universitaria (UNVIME). Es profesora de Grabado desde el 2013. En la actualidad dicta el Taller II de Grabado en la Licenciatura en Artes Visuales y la Residencia del Profesorado en Artes Visuales (IUPA). Fue coordinadora del Departamento de Artes Visuales del IUPA entre 2016 - 2021 y directora del mismo departamento entre 2021 - 2025. Participó en diversos proyectos de investigación. Actualmente integra el Colectivo Río, grupo dedicado a la creación de obras que ponen en evidencia las problemáticas del territorio que habitan.",
    frase: "Una universidad pública, democrática y cogobernada, que investigue, produzca y enseñe desde el territorio propio. Que fortalezca las artes visuales como espacio de pensamiento crítico, experimentación y compromiso con lo ambiental, lo comunitario y lo colectivo. ",
    foto: floresFoto,
  },  
          {
    id: 14,
    nombre: "Nicolás Muñoz",
    cargo: "Consejero Docente Titular - Departamento Artes Visuales",
    claustro: "docente",
    departamentoDocente: "visuales",
    bio: "Es licenciado en Artes por la Universidad Nacional de San Martín (UNSAM). Desde 2020 se desempeña como profesor de Artes Visuales en cátedras de grabado y arte impreso en el IUPA, y desde 2024 dicta Historia de las Artes Visuales II. Entre 2021 y 2023 fue coordinador de la carrera Tecnicatura en Artes Visuales (IUPA).Es artista independiente y escritor. Desde 2018 publica sus obras desde su taller experimental de edición y producción \"Creatura\", donde articula la gráfica, el dibujo y el relato corto como lenguajes.",
    frase: "Una universidad pública, democrática y cogobernada, que investigue, produzca y enseñe desde el territorio propio. Que fortalezca las artes visuales como espacio de pensamiento crítico, experimentación y compromiso con lo ambiental, lo comunitario y lo colectivo. ",
    foto: munozFoto,
  },
            {
    id: 15,
    nombre: "Emiliana Garcia",
    cargo: "Consejera Docente Suplente - Departamento Artes Visuales",
    claustro: "docente",
    departamentoDocente: "visuales",
    bio: "Profesora Universitaria y Licenciada en Artes Visuales. Especialista en redacción de textos críticos y de difusión mediatica de las Artes (UNA). Maestranda en Educación Artística, mención en Artes Visuales (UNR). Actualmente cursando la Especialización en Práctica Docente (UNR). Docente en escuelas primarias y secundarias, en el área de plástica y Artes Visuales. En iupa formo parte de los Talleres de Prácticas Docentes de nivel inicial y primario, de nivel medio y superior, en escultura de primer año y visualidad del último año. He formado parte de equipos de investigación en iupa (2018, 2021). Desde el 2024 me desempeño como Coordinadora del Departamento.",
    frase: "Transparencia en la gestión y una universidad pública y democrática, gobernada por quienes la construyen y la transitan cotidianamente. ",
    foto: garciaFoto,
  }, 
  {
    id: 16,
    nombre: "Cristian Riquelme",
    cargo: "Consejero Docente Suplente - Departamento Artes Visuales",
    claustro: "docente",
    departamentoDocente: "visuales",
    bio: "Es Diseñador Gráfico, especialista en gestión cultural y maestrando en Educación Universitaria. Actualmente es docente y coordinador en el departamento de artes visuales en IUPA.Ejerce la docencia desde hace más de 15 años y ha trabajado en el ámbito municipal y provincial de la gestión cultural.",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: riquelmeFoto,
  },
  {
    id: 17,
    nombre: "Ignacio Camba Sans",
    cargo: "Consejero Docente Titular - Departamento de Música",
    claustro: "docente",
    departamentoDocente: "musica",
    bio: "Es Licenciado en la enseñanza universitaria de las artes (IUPA), Músico Profesional con especialización en Bajo eléctrico (EMBA). Actualmente cursando la Maestría en Investigación a través de la práctica artística (UNVM). Docente en IUPA desde el año 2017 en cátedras de Bajo eléctrico, Práctica en conjunto, Taller de ensambles, Improvisación, Arreglos y Composición. Coordinador de la Licenciatura en Música Popular (2020-2024), Coordinador de cátedras Práctica en conjunto y Taller de ensambles (2019-2024), Coordinador de la Biga Band de IUPA (2023-2025). Director del Departamento de Música (2025). Director del Proyecto de Investigación el Groove entre el bajo y la batería (2020-2021). Productor de IUPA Canta (2020-2022), Productor de Patagonia Sonora (2023-2024)",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: cambaFoto,
  },
  {
    id: 18,
    nombre: "Cecilia Beniez",
    cargo: "Consejera Docente Titular - Departamento de Música",
    claustro: "docente",
    departamentoDocente: "musica",
    bio: "Licenciada en la enseñanza universitaria de las artes (IUPA) (2021), Instructora en canto funcional (2019). Profesora de las cátedras de Canto y de Canto Complementario de la Licenciatura en Música Popular desde el año 2018. Realiza múltiples cursos y seminarios de canto, armonia, escritura academica, arreglos, sonido, y se especializa en idiomas inglés y francés. Jurado del pre-cosquín sede Choele Choel (2022), y sede Zapala (2023 y 2024). Cantante de numerosos proyectos de varios géneros de la música popular, entre los que se destacan \"Fisque Menuco\" y Relics, proyecto del que continúa siendo parte. Productora, sonidista y conductora del programa televisivo \"Con los fisque\" (2008-2016)",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: benitezFoto,
  }, 
  {
    id: 21,
    nombre: "Diego Bascur",
    cargo: "Consejero Docente Suplente - Departamento de Música",
    claustro: "docente",
    departamentoDocente: "musica",
    bio: "Profesor nacional de música: especialidad educación musical. Actualmente preparando el TFI de la lic en enseñanza del arte en la universidad. Cursando la maestría en enseñanza universitaria (Un.Vi.Me) Docente de piano I y II, Piano Compl. I y II. Taller de práctica en conjunto folklore I y II. Docente del taller profesionalizante \"Combo Latino\"",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: bascurFoto,
  },
    {
    id: 22,
    nombre: "Gabriela Poroyan",
    cargo: "Consejera Docente Suplente - Departamento de Música",
    claustro: "docente",
    departamentoDocente: "musica",
    bio: "...",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: poroyanFoto,
  },
      {
    id: 23,
    nombre: "Lilen Quintin",
    cargo: "Consejera Docente Suplente - Departamento Arte Dramático",
    claustro: "docente",
    departamentoDocente: "dramatico",
    bio: "Es profesora de teatro. Actualmente desarrolla sus actividades en I.U.P.A como referente y docente de arte dramático en el área de accesibilidad y como investigadora en artes escénicas.Frase:   Una universidad pública gratuita y de calidad, inclusiva, con perspectiva comunitaria y transparencia. Una universidad con todos y para todos.",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: quintinFoto,
  }, 
        {
    id: 24,
    nombre: "Fernando Ocuart",
    cargo: "Consejera Docente Titular - Departamento Arte Dramático",
    claustro: "docente",
    departamentoDocente: "dramatico",
    bio: "....",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: ocuartFoto,
  },  
         {
    id: 25,
    nombre: "Silvina Mañueco",
    cargo: "Consejera Docente Suplente - Departamento Arte Dramático",
    claustro: "docente",
    departamentoDocente: "dramatico",
    bio: "....",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: faltaFoto,
  },
           {
    id: 26,
    nombre: "Juan Rolón",
    cargo: "Consejerao Docente Suplente - Departamento Arte Dramático",
    claustro: "docente",
    departamentoDocente: "dramatico",
    bio: "Es Maestrando en Investigación a través de la Propia Práctica por la Universidad Nacional de Villa María,  Licenciado en Enseñanza Universitaria de Artes por IUPA. , Actor, docente e investigador. En ejercicio ininterrumpido de la estatua viviente desde 2007 interviniendo ciudades de Paraguay, Argentina y Chile. Incorpora académicamente la formación de estatuas vivientes,en talleres y seminarios dictados en la institución. Frase: Una Universidad que promueve el desarrollo académico de sus participantes, que incorpora a las artes como herramienta fundamental de fortalecimiento integral de la comunidad",
    frase: "Una universidad pública, gratuita y de calidad como herramienta de movilidad social para Río Negro. Democratizar el acceso al arte y la cultura.",
    foto: rolonFoto,
  },
             {
    id: 27,
    nombre: "Agustín Picco",
    cargo: "Consejero Titular - No Docente",
    claustro: "nodocente",
    bio: "Es licenciado en Psicología por la Universidad Nacional de Córdoba, y actualmente forma parte del Equipo Técnico del Área de Accesibilidad. Se desempeña desde hace 7 años en la Secretaría de Extensión y Bienestar Estudiantil como referente en distintas áreas y proyectos. Es parte del Banco de Evaluadores de la REXUNI perteneciente al Consejo Interuniversitario Nacional (CIN) y ha participado como evaluador en convocatorias del IUPA y otras universidades nacionales.",
    frase: "La madurez de la comunidad del IUPA se refleja en la necesidad de un nuevo modo de vincularnos adentro y hacia afuera. Una universidad en serio debe promover vínculos transparentes, dialógicos y participativos con reglas claras y pluralidad de voces.",
    foto: picoFoto,
  }, 
              {
    id: 28,
    nombre: "Paula Manríquez",
    cargo: "Consejera Suplente - No Docente",
    claustro: "nodocente",
    bio: "Es licenciada en Psicopedagogía por la Universidad de la Cuenca del Plata y actualmente finaliza su tesis de Licenciatura y Profesorado en Sociología (UNSJ). Desde 2020 es referente técnica y coordinadora del Área de Accesibilidad en el IUPA. Cuenta con un extenso recorrido en el sistema educativo y de salud, trabajando en pos de la inclusión en instituciones como la escuela especial 1 y APASIDO. Su labor se centra en el acompañamiento de trayectorias y la promoción de la accesibilidad en nuestra universidad, con una mirada técnica sostenida en una profunda convicción de la necesidad de construir vínculos colectivos y la defensa de la educación pública, gratuita, accesible y de calidad como derecho inclaudicable.",
    frase: "Creemos en una gestión que exprese el sentido democrático: transparente, humana  y que valore a todos sus actores. Mi compromiso es garantizar la justicia curricular y el derecho de todos y todas a acceder y apropiarse del conocimiento que nuestra universidad ofrece.",
    foto: manriquezFoto,
  }, 
                        {
    id: 29,
    nombre: "Yamila Cabezas Bosso",
    cargo: "Consejera Titular - Graduados",
    claustro: "graduado",
    bio: "Profesora Universitaria de artes visuales con especialidad en grabado y arte impreso.Docente en escuelas primarias y secundarias, en el área de plástica y Artes Visuales desde el 2019.En IUPA he sido parte como ayudante de cátedra de los Talleres de Prácticas Docentes de nivel primario y nivel medio (2018). He participado en muchas capacitaciones docentes a lo largo de estos años incluido un postítulo sobre educación sexual integral.",
    frase: "Vincular la formación universitaria con la realidad actual de las escuelas es vital para que los futuros docentes egresen con herramientas prácticas y efectivas.",
    foto: bossoFoto,
  },           {
    id: 30,
    nombre: "Cecilia Guaragna",
    cargo: "Consejera Suplente - Graduados",
    claustro: "graduado",
    bio: "...",
    frase: "Vincular la formación universitaria con la realidad actual de las escuelas es vital para que los futuros docentes egresen con herramientas prácticas y efectivas.",
    foto: guaragnaFoto,
  }, 
             
];

export function Candidatos() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const filtros: Array<{ value: Filtro; label: string }> = [
    { value: "todos", label: "Todos" },
    { value: "docente", label: "Todos los Docentes" },
    { value: "docente-audiovisual", label: "Audiovisuales" },
    { value: "docente-musica", label: "Música" },
    { value: "docente-dramatico", label: "Arte Dramático" },
    { value: "docente-visuales", label: "Artes Visuales" },
    { value: "docente-movimiento", label: "Artes del Movimiento" },
    { value: "docente-formacion", label: "Formación General" },
    { value: "nodocente", label: "Personal de Apoyo" },
    { value: "graduado", label: "Graduados/as" },
  ];

  const candidatosFiltrados = candidatos.filter((c) => {
    if (filtro === "todos") return true;
    if (filtro === "docente") return c.claustro === "docente";
    if (filtro === "docente-audiovisual") {
      return c.claustro === "docente" && c.departamentoDocente === "audiovisual";
    }
    if (filtro === "docente-musica") {
      return c.claustro === "docente" && c.departamentoDocente === "musica";
    }
    if (filtro === "docente-dramatico") {
      return c.claustro === "docente" && c.departamentoDocente === "dramatico";
    }
    if (filtro === "docente-visuales") {
      return c.claustro === "docente" && c.departamentoDocente === "visuales";
    }
    if (filtro === "docente-movimiento") {
      return c.claustro === "docente" && c.departamentoDocente === "movimiento";
    }
    if (filtro === "docente-formacion") {
      return (
        c.claustro === "docente" &&
        c.departamentoDocente === "formacion-general"
      );
    }
    return c.claustro === filtro;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Candidatos y Candidatas
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl">
            Conocé a quienes te van a representar en el Consejo Superior del
            IUPA. Personas comprometidas con una universidad democrática,
            inclusiva y de calidad.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b border-primary/20 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile: selector compacto */}
          <div className="md:hidden">
            <label
              htmlFor="filtro-candidatos-mobile"
              className="block text-xs font-semibold uppercase tracking-wide text-foreground/70 mb-2"
            >
              Filtrar candidatos
            </label>
            <select
              id="filtro-candidatos-mobile"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value as Filtro)}
              className="w-full h-11 rounded-md border border-primary/30 bg-white px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {filtros.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: botones */}
          <div className="hidden md:flex flex-wrap gap-3">
            {filtros.map((item) => (
              <Button
                key={item.value}
                variant={filtro === item.value ? "default" : "outline"}
                onClick={() => setFiltro(item.value)}
                className={filtro === item.value ? "bg-primary text-white" : "text-foreground"}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de candidatos */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidatosFiltrados.map((candidato) => (
              <div
                key={candidato.id}
                className="bg-white rounded-lg border border-primary/20 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={candidato.foto}
                  alt={candidato.nombre}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {candidato.nombre}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {candidato.cargo}
                  </p>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {candidato.bio}
                  </p>
                  <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm italic text-foreground">
                      "{candidato.frase}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {candidatosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No hay candidatos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}










