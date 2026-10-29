/*
  FAQ Component

  Responsável pelas perguntas frequentes.

  Funções:
  - Esclarece dúvidas comuns dos clientes.
  - Permite interação de abrir e fechar respostas.
*/
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Como funciona a solução?",
      answer:
        "Nossa solução foi desenvolvida para oferecer uma experiência simples, rápida e intuitiva, reunindo os principais recursos em um único lugar.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Sim. Você pode cancelar sua assinatura quando quiser, sem burocracia.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Sim. Utilizamos boas práticas de segurança para proteger seus dados e proporcionar uma experiência confiável.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Você pode realizar o pagamento utilizando cartão de crédito, cartão de débito ou outras opções disponíveis no momento da contratação.",
    },
    {
      question: "Existe período de teste?",
      answer:
        "Sim. Dependendo do plano escolhido, você poderá experimentar os recursos antes de decidir pela contratação.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-950 px-6 py-24 text-while">
      <div className="mx-auto max-w-4xl">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Tire suas dúvidas sobre nossa solução.
          </p>
        </div>

        {/* Perguntas */}
        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-fuchsia-900/80 bg-slate-900/50"
              >
                {/* Pergunta */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`size-5 transition-transform duration-300 
                      ${isOpen ? "rotate-180 text-fuchsia-400" : ""}`}
                  />
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-4 border-t border-slate-800 px-6 pt-4 text-slate-400">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
