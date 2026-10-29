import { Star, Shield, Zap, Sparkles, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

/*
  Features Component

  Responsável por apresentar os principais recursos e
  benefícios oferecidos pela empresa.

  Funções:
  - Exibe os diferenciais do serviço.
  - Organiza os recursos em cards.
  - Apresenta um ícone, título e descrição para cada recurso.
  - Ajuda o visitante a entender rapidamente o que o serviço oferece.
*/

const Features = () => {
  return (
    <section id="features" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo o que você precisa
          </h2>
          <p className="max-w-2xl text-slate-400 mt-4 ">
            Recursos pensados para tornar sua experiência mais rápida, segura e
            eficiente. <br /> Tudo o que você precisa, reunido em uma solução
            simples, moderna e intuitiva.
          </p>
        </div>

        {/* Cards */}
        <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {[
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: Smartphone,
            },
            {
              title: "Segurança",
              desc: "Seus dados sempre protegidos",
              icon: Shield,
            },
            {
              title: "Alta Performance",
              desc: "Uma experiência rápida e eficiente",
              icon: Zap,
            },
            {
              title: "Experiência Moderna",
              desc: "Interface simples e intuitiva",
              icon: Sparkles,
            },
            {
              title: "Qualidade",
              desc: "Uma solução pensada para você",
              icon: Star,
            },
            {
              title: "Confiabilidade",
              desc: "Tecnologia segura e confiável",
              icon: Shield,
            },
          ].map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.1, delay: index * 0.2 }}
                className=" gropu rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all 
                duration-300 hover:-translate-y-1 hover:border-fuchsia-500/50 hover:bg-slate-900"
              >
                {/* Ícone */}
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-fuchsia-500/10">
                  <Icon className="size-6 text-fuchsia-400" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold">{f.title}</h3>

                {/* Descrição */}
                <p className="mt-2 text-slate-400">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
