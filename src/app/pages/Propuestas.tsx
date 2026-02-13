import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
  CheckCircle,
} from "lucide-react";

type Claustro = "docentes" | "estudiantes" | "nodocentes" | "graduados";

interface Propuesta {
  titulo: string;
  items: string[];
}

const propuestasPorClaustro: Record<Claustro, Propuesta[]> = {
  docentes: [
    {
      titulo: "Carrera Docente",
      items: [
        "Implementación efectiva del escalafón docente universitario",
        "Concursos públicos y transparentes para todos los cargos",
        "Estabilidad laboral y respeto por los derechos adquiridos",
        "Formación y capacitación continua en pedagogía y disciplinar",
        "Equiparación salarial con otras universidades nacionales",
      ],
    },
    {
      titulo: "Condiciones de Trabajo",
      items: [
        "Espacios dignos y equipados para el trabajo docente",
        "Acceso a materiales, tecnología y recursos pedagógicos",
        "Tiempos adecuados para investigación y extensión",
        "Reconocimiento de la dedicación a la gestión académica",
        "Protocolos claros de convivencia institucional",
      ],
    },
    {
      titulo: "Participación y Democracia",
      items: [
        "Voz real en las decisiones académicas y de gestión",
        "Participación activa en el Consejo Superior",
        "Construcción colectiva de planes de estudio",
        "Espacios de debate sobre el proyecto institucional",
        "Transparencia en el uso de recursos y toma de decisiones",
      ],
    },
  ],
  estudiantes: [
    {
      titulo: "Bienestar Estudiantil",
      items: [
        "Becas suficientes y accesibles para estudiantes de toda la provincia",
        "Comedor universitario con alimentos de calidad",
        "Espacios de estudio y descanso adecuados",
        "Servicio de salud estudiantil integral",
        "Apoyo psicopedagógico y tutorías académicas",
      ],
    },
    {
      titulo: "Accesibilidad e Inclusión",
      items: [
        "Eliminación de barreras arquitectónicas y comunicacionales",
        "Adecuaciones curriculares para estudiantes con discapacidad",
        "Protocolos contra la violencia y discriminación",
        "Respeto por la diversidad de género, origen y condición social",
        "Cupo laboral trans en la universidad",
      ],
    },
    {
      titulo: "Calidad Académica",
      items: [
        "Acreditación de todas las carreras ante CONEAU",
        "Actualización permanente de planes de estudio",
        "Equipamiento técnico y tecnológico de vanguardia",
        "Biblioteca actualizada con acceso a recursos digitales",
        "Intercambios y convenios con otras universidades",
      ],
    },
    {
      titulo: "Participación Estudiantil",
      items: [
        "Representación genuina en el Consejo Superior",
        "Apoyo institucional al centro de estudiantes",
        "Espacios de organización y debate político",
        "Fomento de proyectos culturales y de extensión estudiantil",
        "Canales de comunicación directa con las autoridades",
      ],
    },
  ],
  nodocentes: [
    {
      titulo: "Carrera Administrativa",
      items: [
        "Implementación del escalafón para personal de apoyo",
        "Concursos transparentes para ingreso y promoción",
        "Capacitación permanente y desarrollo profesional",
        "Reconocimiento de la antigüedad y experiencia",
        "Estabilidad laboral y respeto por los derechos laborales",
      ],
    },
    {
      titulo: "Condiciones Laborales",
      items: [
        "Salarios dignos equiparables a otras universidades",
        "Espacios de trabajo adecuados y saludables",
        "Equipamiento y tecnología para el trabajo administrativo",
        "Horarios compatibles con la vida personal y familiar",
        "Licencias y beneficios acordes a convenios colectivos",
      ],
    },
    {
      titulo: "Participación y Representación",
      items: [
        "Voz en el Consejo Superior y órganos de decisión",
        "Participación en comisiones institucionales",
        "Reconocimiento del rol fundamental del personal de apoyo",
        "Espacios de diálogo con autoridades",
        "Respeto por la organización gremial",
      ],
    },
    {
      titulo: "Formación y Desarrollo",
      items: [
        "Programas de capacitación en administración universitaria",
        "Acceso a formación continua y actualización",
        "Oportunidades de crecimiento dentro de la institución",
        "Reconocimiento de estudios y formación previa",
        "Apoyo para cursar carreras universitarias",
      ],
    },
  ],
  graduados: [
    {
      titulo: "Vinculación con Graduados/as",
      items: [
        "Creación de una red activa de graduados del IUPA",
        "Espacios de encuentro, formación y actualización profesional",
        "Base de datos de egresados para seguimiento de trayectorias",
        "Reconocimiento de los aportes al campo artístico regional",
        "Participación en actividades académicas y culturales",
      ],
    },
    {
      titulo: "Inserción Profesional",
      items: [
        "Bolsa de trabajo y oportunidades laborales",
        "Articulación con organismos culturales provinciales",
        "Promoción de proyectos artísticos de graduados",
        "Apoyo a emprendimientos culturales y creativos",
        "Vínculos con industrias culturales y creativas",
      ],
    },
    {
      titulo: "Participación Institucional",
      items: [
        "Representación efectiva en el Consejo Superior",
        "Participación en comisiones curriculares y académicas",
        "Aporte de experiencia profesional al proyecto institucional",
        "Colaboración en proyectos de investigación y extensión",
        "Rol activo en la evaluación y mejora de carreras",
      ],
    },
  ],
};

export function Propuestas() {
  const [claustroActivo, setClaustroActivo] = useState<Claustro>("estudiantes");

  const claustros: Array<{
    id: Claustro;
    nombre: string;
    icon: React.ReactNode;
    color: string;
  }> = [
    {
      id: "docentes",
      nombre: "Docentes",
      icon: <GraduationCap size={24} />,
      color: "bg-blue-500",
    },
    {
      id: "estudiantes",
      nombre: "Estudiantes",
      icon: <Users size={24} />,
      color: "bg-primary",
    },
    {
      id: "nodocentes",
      nombre: "Personal de Apoyo",
      icon: <Briefcase size={24} />,
      color: "bg-teal-500",
    },
    {
      id: "graduados",
      nombre: "Graduados/as",
      icon: <Award size={24} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Propuestas por Claustro
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl">
            Propuestas concretas para cada sector de la comunidad universitaria.
            Un proyecto construido desde abajo, escuchando las necesidades
            reales de docentes, estudiantes, personal de apoyo y graduados/as.
          </p>
        </div>
      </section>

      {/* Selector de claustro */}
      <section className="bg-white border-b border-primary/20 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {claustros.map((claustro) => (
              <button
                key={claustro.id}
                onClick={() => setClaustroActivo(claustro.id)}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 transition-all ${
                  claustroActivo === claustro.id
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white text-foreground border-primary/20 hover:border-primary hover:shadow-md"
                }`}
              >
                {claustro.icon}
                <span className="font-bold text-sm md:text-base">
                  {claustro.nombre}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Propuestas */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              {claustros.find((c) => c.id === claustroActivo)?.icon}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Propuestas para{" "}
                {claustros.find((c) => c.id === claustroActivo)?.nombre}
              </h2>
            </div>
            <p className="text-lg text-foreground/80">
              Compromisos concretos para mejorar las condiciones de este
              claustro y fortalecer la universidad.
            </p>
          </div>

          <div className="grid gap-8">
            {propuestasPorClaustro[claustroActivo].map((propuesta, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border-2 border-primary/20 p-6 md:p-8 hover:border-primary transition-all"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {i + 1}
                  </span>
                  {propuesta.titulo}
                </h3>
                <ul className="space-y-3">
                  {propuesta.items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-foreground/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Financiamiento */}
          <div className="mt-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Financiamiento Universitario
            </h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Todas estas propuestas requieren un financiamiento adecuado de la
              universidad pública. Desde la Lista 10 defendemos:
            </p>
            <ul className="space-y-2">
              {[
                "Presupuesto universitario acorde a las necesidades reales del IUPA",
                "Transparencia total en el uso de los recursos",
                "Gestión de fondos nacionales y provinciales adicionales",
                "Búsqueda de convenios y proyectos con financiamiento externo",
                "Auditorías periódicas y rendición de cuentas pública",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-primary flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
