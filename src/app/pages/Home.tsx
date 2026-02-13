import { ArrowRight, Users, Target, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear el mailto link con los datos del formulario
    const mailtoLink = `mailto:celesteyblancaiupa@gmail.com?subject=Contacto desde el sitio web&body=Nombre: ${formData.nombre}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.mensaje}`;
    window.location.href = mailtoLink;
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
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        {/* Textura de fondo sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h6V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Número de lista destacado */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="bg-white text-primary px-6 py-3 rounded-lg">
                <span className="text-4xl md:text-5xl font-bold">10</span>
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
                className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Conocer el proyecto</span>
                <ArrowRight size={20} />
              </button>
              <Link to="/candidatos">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  Manifiesto
                </Button>
              </Link>
              <button
                onClick={() => scrollToSection("votamos")}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all"
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
                "Gobernada por su comunidad",
                "Pública, gratuita y accesible",
                "Democrática y transparente",
                "Académicamente sólida",
                "Con carrera administrativa para el personal de apoyo",
                "Integrada al desarrollo provincial",
                "Con arraigo territorial",
                "Moderna y conectada a redes universitarias",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg border border-primary/20 hover:border-primary transition-all hover:shadow-md"
                >
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Mail className="mr-2" size={20} />
                  Enviar mensaje
                </Button>
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
