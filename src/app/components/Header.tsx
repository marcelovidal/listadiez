import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "@/assets/images/logo.png";

interface HeaderProps {
  isHomePage?: boolean;
}

export function Header({ isHomePage: _isHomePage = false }: HeaderProps) {
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
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Lista 10" className="h-20 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
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
            <button
              onClick={() => scrollToSection("que-votamos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Qué votamos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary/20">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
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
            <button
              onClick={() => scrollToSection("que-votamos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Qué votamos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
