import {
  ArrowRight,
  Users,
  Target,
  CheckCircle,
  CircleSlash2,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import fondoHero from "@/assets/images/fondo.png";
import fondoManifiesto from "@/assets/images/manifiesto.png";
import diezLogo from "@/assets/images/diez.png";

export function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/celesteyblancaiupa@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            email: formData.email,
            mensaje: formData.mensaje,
            _subject: "Contacto desde el sitio web - Lista 10",
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      setFormData({ nombre: "", email: "", mensaje: "" });
      setFormStatus({
        type: "success",
        message: "Mail enviado, gracias por tu mensaje.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "No se pudo enviar el mensaje. Intentá nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isHomePage={true} />

      {/* HERO / INICIO */}
      <section
        className="relative text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoHero})` }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div id="inicio" className="max-w-4xl scroll-mt-24">
            {/* Número de lista destacado */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <div>
                <img
                  src={diezLogo}
                  alt="Lista 10"
                  className="h-[5.6rem] md:h-[7rem] w-auto object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-4xl font-bold">
                  Celeste y Blanca
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Una universidad en serio
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Una universidad de los artistas y trabajadores, democrática,
              inclusiva y de calidad. Una universidad para el desarrollo de la
              provincia.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-base md:text-lg leading-relaxed">
                Votamos consejeros y consejeras por claustros: docente (por
                departamentos), personal de apoyo, estudiantes y graduados.
                También elegimos, de modo indirecto, al rectorado.
              </p>
              <p className="text-base md:text-lg mt-4 leading-relaxed">
                Es importante porque es la{" "}
                <strong>primera vez que podemos elegir</strong> nuestro Consejo
                Superior, órgano de cogobierno universitario, y a nuestras
                autoridades.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("proyecto")}
                className="h-12 px-6 bg-white text-primary rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Conocer el proyecto</span>
                <ArrowRight size={20} />
              </button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("manifiesto")}
                className="h-12 px-6 w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Manifiesto
              </Button>
              <button
                onClick={() => scrollToSection("votamos")}
                className="h-12 px-6 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-primary transition-all"
              >
                Entender el Consejo Superior
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOMOS */}
      <section id="somos" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
                <span className="font-bold">Quiénes somos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                La Lista 10 – Celeste y Blanca
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  La Lista 10 es un espacio político universitario integrado por
                  trabajadores de apoyo, docentes, estudiantes y graduados del
                  IUPA, comprometidos con la construcción de una universidad
                  pública, democrática, inclusiva y orientada al desarrollo de la
                  provincia de Río Negro.
                </p>
                <p>
                  Nacimos de la conversación en los pasillos, de habitar
                  oficinas, aulas, talleres y estudios. Conocemos la universidad
                  desde abajo y la vivimos a diario.
                </p>
                <p>
                  Somos un grupo heterogéneo, diverso y joven. Muchos nos
                  formamos aquí y en otras universidades y queremos representar
                  una nueva manera de pensar la universidad en nuestro territorio
                  y hacia adelante.{" "}
                  <strong className="text-primary">
                    Deseamos que nos acompañes.
                  </strong>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl p-8 border-2 border-primary/20">
                <Users className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Un espacio plural
                </h3>
                <ul className="space-y-3">
                  {[
                    "Trabajadores de apoyo",
                    "Docentes de todos los departamentos",
                    "Estudiantes comprometidos",
                    "Graduados y graduadas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            id="manifiesto"
            className="mt-12 rounded-2xl p-8 md:p-10 border-2 border-primary/20 scroll-mt-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${fondoManifiesto})` }}
          >
            <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
              <span className="font-bold">Manifiesto</span>
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
              <p>
                La universidad existe cada vez que una comunidad decide pensar
                en común. No es solo intercambio de saberes, también es
                conversación, producción de conocimiento, soberanía, encuentro,
                creación. La universidad existe cuando el pensamiento se vuelve
                asunto colectivo.
              </p>
              <p>
                La universidad pública nació para acercar lo que estaba lejos,
                para abrir puertas. Para unir. Esa idea, aunque viva, necesita
                ser revisada, discutida y reorientada hacia adelante cada vez
                que el viento cambia.
              </p>
              <p>
                El IUPA forma parte de esa tradición y se sostuvo en el tiempo
                por el compromiso cotidiano de sus trabajadores, docentes y
                estudiantes. Por prácticas de enseñanza, de estudio, de
                creación, de investigación, de producción artística y de
                formación constante. Se sostiene como se sostienen las cosas
                importantes, con amor, con paciencia y convicción, con trabajo
                diario, con estudio y creatividad, con ese especial cuidado que
                tenemos con los espacios que habitamos.
              </p>
              <p>Cuidar nuestra universidad es cuidar nuestra casa.</p>
              <p>
                En IUPA nos formamos desde la sensibilidad, desde el
                pensamiento crítico, desde el cuerpo, la voz, la imagen, el
                sonido. Nuestra manera de producir conocimiento es también crear
                e imaginar futuros posibles.
              </p>
              <p>
                Este momento abre una posibilidad histórica para pensar cómo se
                organiza esa vida común. Qué reglas la sostienen, qué voces
                participan, qué lugar ocupa cada parte de la comunidad
                universitaria.
              </p>
              <p>
                La democracia es una forma de cuidar lo público. Cuidar nuestra
                casa.
              </p>
              <p>
                Desde acá afirmamos una universidad de todos, una universidad en
                serio. Que produce arte y conocimiento, que dialoga con su
                territorio, que dialoga con el mundo, que reconoce el trabajo
                que la hizo posible y que asume un nuevo lugar en la historia.
                futuros escribir
              </p>
              <p>
                Dar este paso es poner la universidad al frente. En serio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROYECTO */}
      <section id="proyecto" className="py-16 md:py-24 bg-muted scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
              <span className="font-bold">Nuestro proyecto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              El Proyecto
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground/80 leading-relaxed">
              Queremos poner en valor a la universidad como actor estratégico en
              el desarrollo del arte, la formación artística y las industrias
              culturales rionegrinas, clave para la soberanía del conocimiento y
              la transformación social.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-lg p-8 border border-primary/20">
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              También constituir a la universidad de artes como espacio
              permanente de reflexión sobre políticas públicas provinciales
              vinculadas a industrias culturales y formación artística.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Es esencial cumplir los procesos regulatorios del sistema
              universitario argentino: acreditación de carreras, transparencia
              administrativa y financiera y respeto por los derechos de
              trabajadores y estudiantes.
            </p>
          </div>

          {/* Universidad que queremos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Queremos una universidad:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  positiva: "Gobernada por su comunidad",
                  negativa:
                    "Gobernada por un rector no elegido democráticamente",
                },
                {
                  positiva: "Directores elegidos en democracia",
                  negativa: "Directores normalizadores impuestos",
                },
                {
                  positiva:
                    "Articulada con el sistema científico nacional y redes universitarias",
                  negativa: "Arcaica, endogámica, anárquica",
                },
                {
                  positiva: "Transparente y con reglas claras",
                  negativa: "Opaca, sin normativa ni previsibilidad",
                },
                {
                  positiva: "Sólida académicamente",
                  negativa:
                    "Desordenada, sin carrera docente, con subestimación de la vocación científica",
                },
                {
                  positiva:
                    "Carrera administrativa y posibilidad real de crecimiento profesional para trabajadores",
                  negativa: "Ascenso por negociación discrecional",
                },
                {
                  positiva: "Diálogo y participación",
                  negativa: "Unilateralidad, violencia",
                },
                {
                  positiva: "Integrada al desarrollo provincial",
                  negativa:
                    "Aislada y desconectada de los organismos y proyectos estratégicos provinciales",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg border border-primary/20 hover:border-primary transition-all hover:shadow-md"
                >
                  <div className="flex items-start space-x-2 mb-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground font-medium">
                      {item.positiva}
                    </span>
                  </div>
                  {item.negativa && (
                    <div className="flex items-start space-x-2 border-t border-primary/10 pt-2">
                      <CircleSlash2 className="text-destructive flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground font-medium line-through decoration-destructive/80">
                        {item.negativa}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ejes */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Ejes principales
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cogobierno",
                  desc: "Fortalecimiento del cogobierno y del Consejo Superior",
                },
                {
                  title: "Carrera profesional",
                  desc: "Carrera profesional docente y del personal de apoyo",
                },
                {
                  title: "Vinculación territorial",
                  desc: "Vinculación territorial con diálogo comunitario",
                },
                {
                  title: "Institucionalización",
                  desc: "Institucionalización de espacios de reflexión y jornadas",
                },
              ].map((eje, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg border-2 border-primary/20 hover:border-primary transition-all"
                >
                  <Target className="text-primary mb-3" size={32} />
                  <h4 className="font-bold text-lg mb-2 text-foreground">
                    {eje.title}
                  </h4>
                  <p className="text-foreground/80 text-sm">{eje.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ VOTAMOS */}
      <section id="votamos" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div id="que-votamos" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
              <span className="font-bold">Información importante</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ¿Qué votamos cuando votamos?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              El Consejo Superior
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                El <strong>Consejo Superior</strong> es el órgano de cogobierno
                de la universidad. Es el espacio donde se toman las decisiones
                más importantes sobre el rumbo institucional, académico y
                administrativo del IUPA.
              </p>
              <p>
                Está integrado por representantes de todos los claustros:
                docentes, estudiantes, personal de apoyo y graduados. Cada sector
                de la comunidad universitaria tiene voz y voto.
              </p>
              <p>
                <strong>¿Qué decide el Consejo Superior?</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Políticas académicas y planes de estudio</li>
                <li>Presupuesto y distribución de recursos</li>
                <li>Creación de carreras y programas</li>
                <li>Normativas y reglamentos institucionales</li>
                <li>Designación de autoridades (Rector/a)</li>
              </ul>
              <p className="font-bold text-primary mt-6">
                Por eso es fundamental que elijamos representantes comprometidos
                con una universidad democrática, transparente y de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPAR / CONTACTO */}
      <section
        id="contacto"
        className="py-16 md:py-24 bg-gradient-to-br from-muted to-white scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
              <span className="font-bold">Sumate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Participar y Contacto
            </h2>
            <p className="text-xl text-foreground/80">
              Queremos escucharte. Escribinos y sumate a la Lista 10.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulario */}
            <div className="bg-white p-8 rounded-lg border border-primary/20 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Dejanos tu mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block mb-2 text-foreground">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block mb-2 text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Mail className="mr-2" size={20} />
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
                {formStatus && (
                  <p
                    className={
                      formStatus.type === "success"
                        ? "text-sm text-green-700"
                        : "text-sm text-red-700"
                    }
                  >
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg border border-primary/20 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Nuestras redes
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/celesteyblancaiupa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Instagram</p>
                      <p className="text-sm text-foreground/70">
                        @celesteyblancaiupa
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://facebook.com/CelesteyBlancaIUPA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Facebook</p>
                      <p className="text-sm text-foreground/70">
                        Celeste y Blanca IUPA
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:celesteyblancaiupa@gmail.com"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-sm text-foreground/70">
                        celesteyblancaiupa@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Financiamiento transparente
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Esta campaña es autofinanciada exclusivamente por miembros de
                  la comunidad universitaria del IUPA. No recibimos aportes
                  externos ni de partidos políticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
