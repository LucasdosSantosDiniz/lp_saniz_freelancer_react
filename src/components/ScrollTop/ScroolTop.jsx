/*
  ScrollTop Component

  Responsável por permitir que o usuário volte rapidamente
  para o início da página.

  Funções:
  - Detecta quando o usuário começa a rolar a página.
  - Exibe o botão "Voltar ao topo" após determinado scroll.
  - Retorna o usuário ao início da página ao clicar no botão.
*/

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScroolTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!show) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6"
        aria-label="Voltar ao topo"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default ScroolTop;
