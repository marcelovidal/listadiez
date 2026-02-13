import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información */}
          <div>
            <h3 className="font-bold text-lg mb-4">Lista 10 – Celeste y Blanca</h3>
            <p className="text-sm opacity-90">
              Por una universidad pública, democrática, inclusiva y de calidad.
            </p>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-bold text-lg mb-4">Seguinos</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://instagram.com/celesteyblancaiupa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Instagram size={20} />
                <span className="text-sm">@celesteyblancaiupa</span>
              </a>
              <a
                href="https://facebook.com/CelesteyBlancaIUPA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Facebook size={20} />
                <span className="text-sm">Celeste y Blanca IUPA</span>
              </a>
              <a
                href="mailto:celesteyblancaiupa@gmail.com"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={20} />
                <span className="text-sm">celesteyblancaiupa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Financiamiento */}
          <div>
            <h3 className="font-bold text-lg mb-4">Transparencia</h3>
            <p className="text-sm opacity-90">
              Campaña autofinanciada por miembros de la comunidad universitaria.
              Sin aportes externos.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
          <p>
            © 2026 Lista 10 – Celeste y Blanca. Instituto Universitario
            Patagónico de las Artes.
          </p>
        </div>
      </div>
    </footer>
  );
}
