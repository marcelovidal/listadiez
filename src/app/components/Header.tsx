import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

interface HeaderProps {
  isHomePage?: boolean;
}

export function Header({ isHomePage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Nombre */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white px-3 py-1 rounded">
              <span className="text-xl font-bold">10</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base text-foreground">
                Celeste y Blanca
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                IUPA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("somos")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Somos
                </button>
                <button
                  onClick={() => scrollToSection("proyecto")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Proyecto
                </button>
                <button
                  onClick={() => scrollToSection("votamos")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  ¿Qué votamos?
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </>
            )}
            <Link
              to="/candidatos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Candidatos/as
            </Link>
            <Link
              to="/propuestas"
              className="text-foreground hover:text-primary transition-colors"
            >
              Propuestas
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary/20">
          <nav className="px-4 py-4 space-y-3">
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("somos")}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Somos
                </button>
                <button
                  onClick={() => scrollToSection("proyecto")}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Proyecto
                </button>
                <button
                  onClick={() => scrollToSection("votamos")}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  ¿Qué votamos?
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </>
            )}
            <Link
              to="/candidatos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Candidatos/as
            </Link>
            <Link
              to="/propuestas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Propuestas
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
