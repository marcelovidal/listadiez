import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

type Claustro = "todos" | "docente" | "nodocente" | "estudiante" | "graduado";

interface Candidato {
  id: number;
  nombre: string;
  cargo: string;
  claustro: Claustro;
  bio: string;
  frase: string;
  foto: string;
}

// Datos de ejemplo - en producción vendrían de una API o base de datos
const candidatos: Candidato[] = [
  {
    id: 1,
    nombre: "María González",
    cargo: "Consejera Docente - Departamento de Artes Visuales",
    claustro: "docente",
    bio: "Profesora de Pintura con 15 años de experiencia en el IUPA. Especializada en arte contemporáneo y pedagogía artística.",
    frase: "Por una universidad que forme artistas críticos y comprometidos con su territorio.",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    nombre: "Javier Martínez",
    cargo: "Consejero Docente - Departamento de Música",
    claustro: "docente",
    bio: "Compositor y docente de Armonía. Director del conjunto de música contemporánea del IUPA.",
    frase: "Defendamos la calidad académica y el cogobierno democrático.",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    nombre: "Ana Rodríguez",
    cargo: "Consejera Docente - Departamento de Teatro",
    claustro: "docente",
    bio: "Actriz y docente de Actuación. Investigadora en artes escénicas patagónicas.",
    frase: "Una universidad inclusiva que represente la diversidad de voces de nuestra región.",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    nombre: "Carlos Fernández",
    cargo: "Representante Personal de Apoyo",
    claustro: "nodocente",
    bio: "Personal administrativo del IUPA con 12 años de antigüedad. Comprometido con los derechos laborales.",
    frase: "Por una carrera administrativa justa y condiciones dignas de trabajo.",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    nombre: "Laura Sánchez",
    cargo: "Representante Personal de Apoyo",
    claustro: "nodocente",
    bio: "Trabaja en el área de Biblioteca. Promotora de la transparencia institucional.",
    frase: "Los trabajadores de apoyo somos parte fundamental de esta universidad.",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    nombre: "Tomás García",
    cargo: "Consejero Estudiantil - Artes Visuales",
    claustro: "estudiante",
    bio: "Estudiante de 3er año de la Licenciatura en Artes Visuales. Activo en el centro de estudiantes.",
    frase: "Que las decisiones sean tomadas con participación real de los estudiantes.",
    foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    nombre: "Lucía Pérez",
    cargo: "Consejera Estudiantil - Música",
    claustro: "estudiante",
    bio: "Estudiante de Composición Musical. Comprometida con la accesibilidad y la inclusión.",
    frase: "Por una universidad que garantice el derecho a estudiar sin barreras.",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    nombre: "Martín López",
    cargo: "Consejero Estudiantil - Teatro",
    claustro: "estudiante",
    bio: "Estudiante avanzado de Teatro. Impulsor de proyectos de extensión territorial.",
    frase: "El IUPA debe ser un actor cultural clave en toda la provincia.",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    nombre: "Sofía Romero",
    cargo: "Consejera Graduada",
    claustro: "graduado",
    bio: "Licenciada en Artes Visuales. Artista visual y gestora cultural en Bariloche.",
    frase: "Los graduados tenemos mucho que aportar al futuro del IUPA.",
    foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    nombre: "Diego Silva",
    cargo: "Consejero Graduado",
    claustro: "graduado",
    bio: "Licenciado en Música. Docente en escuelas de música de la región.",
    frase: "Por una universidad conectada con las realidades artísticas de Río Negro.",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

export function Candidatos() {
  const [filtro, setFiltro] = useState<Claustro>("todos");

  const candidatosFiltrados =
    filtro === "todos"
      ? candidatos
      : candidatos.filter((c) => c.claustro === filtro);

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
          <div className="flex flex-wrap gap-3">
            <Button
              variant={filtro === "todos" ? "default" : "outline"}
              onClick={() => setFiltro("todos")}
              className={
                filtro === "todos" ? "bg-primary text-white" : "text-foreground"
              }
            >
              Todos
            </Button>
            <Button
              variant={filtro === "docente" ? "default" : "outline"}
              onClick={() => setFiltro("docente")}
              className={
                filtro === "docente"
                  ? "bg-primary text-white"
                  : "text-foreground"
              }
            >
              Docentes
            </Button>
            <Button
              variant={filtro === "nodocente" ? "default" : "outline"}
              onClick={() => setFiltro("nodocente")}
              className={
                filtro === "nodocente"
                  ? "bg-primary text-white"
                  : "text-foreground"
              }
            >
              Personal de Apoyo
            </Button>
            <Button
              variant={filtro === "estudiante" ? "default" : "outline"}
              onClick={() => setFiltro("estudiante")}
              className={
                filtro === "estudiante"
                  ? "bg-primary text-white"
                  : "text-foreground"
              }
            >
              Estudiantes
            </Button>
            <Button
              variant={filtro === "graduado" ? "default" : "outline"}
              onClick={() => setFiltro("graduado")}
              className={
                filtro === "graduado"
                  ? "bg-primary text-white"
                  : "text-foreground"
              }
            >
              Graduados/as
            </Button>
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
