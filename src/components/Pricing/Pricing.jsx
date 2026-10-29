import { Check, Clock1 } from "lucide-react";
import { motion } from "framer-motion";

/*
  Pricing Component

  Responsável pela apresentação do plano e valores.

  Funções:
  - Mostra o preço do serviço.
  - Lista benefícios inclusos.
  - Direciona o usuário para ação de compra ou contato.
*/

const Pricing = () => {
  const pricing = [
    {
      title: "Plano Essencial",
      price: "R$ 99,90/mês",
      desc: "Para quem está começando e precisa das ferramentas essenciais para organizar sua rotina e melhorar sua presença digital.",
      benefits: ["Recursos essenciais", "Design responsivo", "Suporte básico"],
      featured: false,
    },
    {
      title: "Plano Profissional",
      price: "R$ 199,90/mês",
      desc: "Para profissionais e empresas que querem mais recursos, desempenho e uma experiência completa.",
      benefits: [
        "Todos os recursos essenciais",
        "Alta performance",
        "Suporte prioritário",
      ],
      featured: true,
    },
    {
      title: "Plano Premium",
      price: "R$ 349,90/mês",
      desc: "Para quem busca uma solução completa, com recursos avançados e suporte diferenciado para crescer ainda mais.",
      benefits: [
        "Todos os recursos profissionais",
        "Recursos avançados",
        "Suporte exclusivo",
      ],
      featured: false,
    },
  ];

  return (
    <>
      {/** Preço */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-8 mb-10">
        <div className="mx-auto max-w-7xl">
          {/* Cabeçalho da seção */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Veja nosso planos!
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-400">
              Escolha o plano ideal para o seu projeto e tenha acesso a uma
              solução completa, moderna e profissional. Oferecemos opções
              flexíveis para diferentes necessidades, com excelente
              custo-benefício e tudo o que você precisa para criar uma presença
              online de qualidade.
            </p>
          </div>

          {/* Cards */}
          <div className=" grid gap-6 sm:grid-cols-1 lg:grid-cols-3 ">
            {pricing.map((price, index) => (
              <motion.div
                key={price.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1
                   ${
                     price.featured
                       ? "border-fuchsia-500 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/10"
                       : "border-slate-800 bg-slate-900/50 hover:border-fuchsia-500/50"
                   }`}
              >
                {price.featured && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-fuchsia-600
                   px-4 py-1 text-sm font-semibold text-while"
                  >
                    Mais Popular
                  </div>
                )}
                {/** Planos */}
                <div className="text-2xl font-extrabold mt-2">
                  {price.title}
                </div>
                <div className="text-sm text-slate-400"> A partir de: </div>

                {/** Preços */}
                <div className="text-4xl font-extrabold mt-2">
                  {price.price}
                </div>
                <div className="text-sm text-slate-400 mt-6">{price.desc}</div>

                {/* Beneficios */}
                {price.benefits.map((benefit) => (
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400" />
                      {benefit}
                    </li>
                  </ul>
                ))}

                {/** Botão de comprar */}
                <div className="text-sm text-slate-300 mt-6 flex items-center gap-2">
                  <Clock1 className=" size-4 text-amber-400 " />
                  <p>Somente Hoje !</p>
                </div>
                <button
                  className={`mt-6 w-full cursor-pointer rounded-2xl 
                         bg-fuchsia-600 hover:bg-fuchsia-800
                        px-8 py-3 font-medium transition
                        ${
                          price.featured
                            ? "bg-fuchsia-400 hover:bg-fuchsia-500"
                            : "bg-fuchsia-800 hover:bg-fuchsia-900"
                        }`}
                >
                  Comprar Agora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
