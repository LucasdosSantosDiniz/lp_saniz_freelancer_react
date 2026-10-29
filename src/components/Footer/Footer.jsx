/*
  Footer Component

  Responsável pelas informações finais da página.

  Funções:
  - Exibe informações da empresa.
  - Mostra links de contato.
  - Apresenta direitos autorais.
*/

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Conteúdo principal */}
        <div className=" grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Empresa */}
          <div>
            <h3 className="text-xl font-bold text-white">Saniz</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400 ">
              {" "}
              Uma solução moderna para transformar sua presença digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white">Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-fuchsia-400">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="transition hover:text-fuchsia-400"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition hover:text-fuchsia-400"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition hover:text-fuchsia-400"
                >
                  Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-fuchsia-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Design Responsivo</li>
              <li>Segurança</li>
              <li>Alta Perfomace</li>
              <li>Suporte</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li> contato@saniz.com</li>
              <li>(99)9999-9999</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div
          className="mt-10 flex flex-col 
        items-center justify-between gap-4
        border-t border-white/5 pt-6
        text-sm text-slate-500 sm:flex-row"
        >
          <p>Saniz LTDA © {new Date().getFullYear()}</p>
          <a href="#" className="transition hover:text-fuchsia-400">
            Politica de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
