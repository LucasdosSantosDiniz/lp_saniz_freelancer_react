import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 border-b z-40 transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "bg-slate-950/40 backdrop-blur-md border-white/[0.06] shadow-lg"
              : "bg-transparent border-white/[0.03]"
          }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Saniz</span>
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-fuchsia-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão menu mobile */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden">
            {/* Fundo escuro */}
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            >
              {/* Sidebar */}
              <div
                className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Cabeçalho do menu */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-6 text-fuchsia-400" />
                    <span className="font-semibold">Saniz</span>
                  </div>

                  <button
                    className="p-2 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-slate-200 hover:text-fuchsia-300 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
